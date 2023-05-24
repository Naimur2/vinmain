import useNavigate from "@hooks/useNavigate";
import { Image as ExpoImage } from "expo-image";
import asRoute from "hoc/asRoute";
import { Image, Pressable, ScrollView, Text, VStack } from "native-base";
import React from "react";

const HomeScreen = () => {
    const navigate = useNavigate();
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <VStack flex={1} position={"relative"}>
                <Image
                    source={require("../../../assets/images/app/home-bg.png")}
                    alt="Home"
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    w={"100%"}
                    h={"100%"}
                    resizeMode={"cover"}
                    zIndex={-1}
                />
                <Text
                    color={"#fff"}
                    fontWeight={600}
                    fontSize={"lg"}
                    textAlign={"center"}
                    maxWidth={"320px"}
                    mx={"auto"}
                    mt={10}
                >
                    “We help you buy your vehicle by showing all relevant
                    information including loan options. All for free.”
                </Text>
                <VStack
                    position={"relative"}
                    px={6}
                    py={4}
                    maxW={"320px"}
                    mx={"auto"}
                    w="full"
                    mt={16}
                    rounded={"xl"}
                    overflow="hidden"
                    space="4"
                >
                    <ExpoImage
                        source={require("../../../assets/svgs/home-gradient.svg")}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }}
                    />
                    <Text
                        color={"#fff"}
                        fontWeight={600}
                        fontSize={"lg"}
                        textAlign={"center"}
                        maxWidth={"320px"}
                        mx={"auto"}
                        mb={2}
                    >
                        Enter Your VIN
                    </Text>
                    <Pressable
                        bg="white"
                        px={4}
                        py={2}
                        rounded={"md"}
                        alignItems={"center"}
                        display="flex"
                        style={{ gap: 14 }}
                        flexDirection={"row"}
                        _pressed={{
                            bg: "#ffffff60",
                        }}
                    >
                        <ExpoImage
                            source={require("../../../assets/svgs/icons/edit.svg")}
                            style={{ width: 28, height: 28 }}
                        />
                        <Text color={"#000"} fontWeight={500} fontSize={"sm"}>
                            Type Your VIN (17 Digits)
                        </Text>
                    </Pressable>
                    <Pressable
                        bg="white"
                        px={4}
                        py={2}
                        rounded={"md"}
                        alignItems={"center"}
                        display="flex"
                        flexDirection={"row"}
                        style={{ gap: 14 }}
                        _pressed={{
                            bg: "#ffffff60",
                        }}
                        onPress={() => navigate("scannerScreen")}
                    >
                        <ExpoImage
                            source={require("../../../assets/svgs/icons/scanner.svg")}
                            style={{ width: 28, height: 28 }}
                        />
                        <Text color={"#000"} fontWeight={500} fontSize={"sm"}>
                            Scan Your VIN/Barcode
                        </Text>
                    </Pressable>
                </VStack>
                <Text
                    color={"#fff"}
                    fontWeight={600}
                    fontSize={"sm"}
                    textAlign={"center"}
                    maxWidth={"320px"}
                    mx={"auto"}
                    mt={6}
                    onPress={() => navigate("whereIsMyVin")}
                >
                    Where is my VIN?
                </Text>
            </VStack>
        </ScrollView>
    );
};

const homeScreen = asRoute(HomeScreen, "homeScreen");

export default homeScreen;
