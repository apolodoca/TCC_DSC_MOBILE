import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import * as Location from 'expo-location';

// Replace with your actual Mapbox access token
MapboxGL.setAccessToken('sk.eyJ1IjoiYXBvbG8tZG9jYSIsImEiOiJjbTM3Y240ZmowM3M2MmxvZzdic3hnbzA2In0.PMnrYTX5L8DBAKKMcx9Hwg');

const PROXIMITY_THRESHOLD = 100; // meters

export default function MapboxProximity() {
    const [userLocation, setUserLocation] = useState(null);
    const [isWithinProximity, setIsWithinProximity] = useState(false);
    const [targetLocation, setTargetLocation] = useState({
        latitude: 40.7128,
        longitude: -74.0060,
    });
    const [locationInput, setLocationInput] = useState('');

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 5000,
                    distanceInterval: 5,
                },
                (location) => {
                    setUserLocation(location.coords);
                    checkProximity(location.coords);
                }
            );
        })();
    }, []);

    const checkProximity = (userCoords) => {
        if (!userCoords) return;

        const distance = calculateDistance(
            userCoords.latitude,
            userCoords.longitude,
            targetLocation.latitude,
            targetLocation.longitude
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

    const getCoordinatesFromLocation = async (location) => {
        try {
            const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json`;
            const url = `${endpoint}?access_token=${MapboxGL.getAccessToken()}`;

            const response = await fetch(url);
            const data = await response.json();

            if (data.features && data.features.length > 0) {
                const [longitude, latitude] = data.features[0].center;
                return { latitude, longitude };
            } else {
                console.error('Location not found');
                return null;
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
            return null;
        }
    };

    const handleLocationSubmit = async () => {
        const coordinates = await getCoordinatesFromLocation(locationInput);
        if (coordinates) {
            setTargetLocation(coordinates);
            setLocationInput('');
        }
    };

    return (
        <View style={styles.container}>
            <MapboxGL.MapView style={styles.map}>
                <MapboxGL.Camera
                    zoomLevel={14}
                    centerCoordinate={[targetLocation.longitude, targetLocation.latitude]}
                />

                {userLocation}
            </MapboxGL.MapView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={locationInput}
                    onChangeText={setLocationInput}
                    placeholder="Enter a location"
                />
                <Button title="Set Location" onPress={handleLocationSubmit} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    {isWithinProximity
                        ? "You are within 100 meters of the target location!"
                        : "You are not within 100 meters of the target location."}
                </Text>
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
    inputContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    input: {
        flex: 1,
        marginRight: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
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
    },
});