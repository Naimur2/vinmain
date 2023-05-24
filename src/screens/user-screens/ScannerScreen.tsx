import { BarCodeScanner } from "expo-barcode-scanner";
import { LinearGradient } from "expo-linear-gradient";
import asRoute from "hoc/asRoute";
import { Box, Factory, Pressable, ScrollView, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Image as ExpoImage } from "expo-image";
import useNavigate from "@hooks/useNavigate";
import { useNavigation } from "@react-navigation/native";

const ScannerScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const LinGrad = Factory(LinearGradient);
    const navigate = useNavigate();
    const navigation = useNavigation();

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);

        navigation.replace("vinConfirmation", {
            vin: data,
        });
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            setScanned(false);
        });

        return unsubscribe;
    }, [navigation]);

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            bg={"#fff"}
        >
            <VStack flex={1} bg={"#ffffff"} position={"relative"}>
                <VStack flex="0.8">
                    <BarCodeScanner
                        onBarCodeScanned={
                            scanned ? undefined : handleBarCodeScanned
                        }
                        style={StyleSheet.absoluteFillObject}
                    />
                </VStack>
                <VStack
                    bg={"#00075870"}
                    space="4"
                    px="4"
                    py="8"
                    position={"absolute"}
                    bottom={0}
                    left={0}
                    right={0}
                    flex={0.2}
                    w="full"
                >
                    <Text
                        color={"#fff"}
                        fontWeight={700}
                        fontSize={"xl"}
                        textAlign={"center"}
                        maxWidth={"320px"}
                        mx={"auto"}
                        mt={10}
                    >
                        Scan Your VIN/Barcode
                    </Text>
                    <Text
                        color={"#fff"}
                        fontWeight={500}
                        fontSize={"sm"}
                        textAlign={"center"}
                        maxWidth={"320px"}
                        mx={"auto"}
                    >
                        Hold steadily... VIN/Barcode will scan automatically.
                        Center the VIN/Barcode and try to avoid shadows and
                        glare.
                    </Text>
                </VStack>

                <LinGrad
                    colors={["#FFFFFF63", "#FFFFFF78"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    display={"flex"}
                    alignItems={"center"}
                    style={{
                        gap: 20,
                    }}
                    position={"absolute"}
                    top={10}
                    right={5}
                    px={2}
                    py={3}
                    borderRadius={10}
                >
                    <Pressable>
                        <ExpoImage
                            source={require("../../../assets/svgs/icons/flash.svg")}
                            style={{
                                height: 24,
                                width: 24,
                            }}
                            contentFit="contain"
                        />
                    </Pressable>

                    <Box bg={"#fff"} w={"full"} h={"1px"} />

                    <Pressable>
                        <ExpoImage
                            source={require("../../../assets/svgs/icons/question.svg")}
                            style={{
                                height: 24,
                                width: 24,
                            }}
                            contentFit="contain"
                        />
                    </Pressable>
                </LinGrad>
            </VStack>
        </ScrollView>
    );
};

const scannerScreen = asRoute(ScannerScreen, "scannerScreen");

export default scannerScreen;
