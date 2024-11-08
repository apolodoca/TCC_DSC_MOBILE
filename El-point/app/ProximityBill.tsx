import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';
import * as Location from 'expo-location';
import {Localizacao} from "./pontoBill";
// Replace with your actual Google Maps API Key
const GOOGLE_MAPS_API_KEY = 'AIzaSyB_mJqAIonmuW6OBCC9Ugd1ywxApe-0VTA';

// Constant target location (replace with desired location name)
const TARGET_LOCATION = Localizacao

const PROXIMITY_THRESHOLD = 100; // meters

export default function ProximityChecker() {
    const router = useRouter();
    const [userLocation, setUserLocation] = useState(null);
    const [targetCoordinates, setTargetCoordinates] = useState(null);
    const [isWithinProximity, setIsWithinProximity] = useState(false);
    const [region, setRegion] = useState({
        latitude: 40.7128,
        longitude: -74.0060,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        (async () => {
            // Get target location coordinates
            const targetCoords = await getCoordinatesFromLocation(TARGET_LOCATION);
            if (targetCoords) {
                setTargetCoordinates(targetCoords);
                setRegion({
                    ...targetCoords,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            }

            // Get user's current location
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setUserLocation(location.coords);

            if (targetCoords) {
                checkProximity(location.coords, targetCoords);
            }
        })();
    }, []);

    const getCoordinatesFromLocation = async (location) => {
        try {
            const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${GOOGLE_MAPS_API_KEY}`;

            const response = await fetch(endpoint);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry.location;
                return { latitude: lat, longitude: lng };
            } else {
                Alert.alert('Erro', 'Localização não encontrada');
                return null;
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
            Alert.alert('Erro', 'Falha ao abrir coordenadas');
            return null;
        }
    };

    const checkProximity = (userCoords, targetCoords) => {
        if (!userCoords || !targetCoords) return;

        const distance = calculateDistance(
            userCoords.latitude,
            userCoords.longitude,
            targetCoords.latitude,
            targetCoords.longitude
        );

        setIsWithinProximity(distance <= PROXIMITY_THRESHOLD);
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371e3; // Earth's radius in meters
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c; // Distance in meters
    };

    const handleRedirectToIndex = () => {
        if(isWithinProximity){
            router.push('./sucesso');
        }
        else router.push('/falha');
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={setRegion}
            >
                {targetCoordinates && (
                    <Marker
                        coordinate={targetCoordinates}
                        title={TARGET_LOCATION}
                        pinColor="red"
                    />
                )}
                {userLocation && (
                    <Marker
                        coordinate={userLocation}
                        title="Your Location"
                        pinColor="blue"
                    />
                )}
            </MapView>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    {isWithinProximity
                        ? `Você está a 100 metros de: ${TARGET_LOCATION}!`
                        : `Você não está a 100 metros de: ${TARGET_LOCATION}.`}
                </Text>
                <Button title="Bater Ponto" onPress={handleRedirectToIndex} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    infoContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 5,
    },
    infoText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
});