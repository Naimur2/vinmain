import React, { useEffect, useState } from "react";
import asRoute from "hoc/asRoute";
import {
    Button,
    Center,
    Factory,
    HStack,
    Image,
    Pressable,
    ScrollView,
    Text,
    VStack,
} from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { Image as ExpoImage } from "expo-image";
import { BarCodeScanner } from "expo-barcode-scanner";
const ScannerScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <VStack flex={1}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                <Button onPress={() => setScanned(false)}>Scan Again</Button>
            )}
        </VStack>
    );
};

const scannerScreen = asRoute(ScannerScreen, "scannerScreen");

export default scannerScreen;
