import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { HStack, Image, Pressable, VStack } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image as ExpoImage } from "expo-image";

const Header = (props: NativeStackHeaderProps) => {
    const insets = useSafeAreaInsets();
    return (
        <HStack
            bg={"#fff"}
            px={4}
            pt={insets.top + 2}
            pb={2}
            alignItems={"center"}
        >
            <VStack w="15%">
                {props?.back ? (
                    <Pressable onPress={() => props?.navigation?.goBack()}>
                        <ExpoImage
                            source={require("../../assets/svgs/back-arrow.svg")}
                            style={{ width: 16, height: 16 }}
                        />
                    </Pressable>
                ) : null}
            </VStack>
            <VStack w="70%" alignItems={"center"} justifyContent={"center"}>
                <Image
                    source={require("../../assets/images/app/logo.png")}
                    alt="logo"
                    h="120px"
                    w="120px"
                    resizeMode={"contain"}
                    mx={"auto"}
                />
            </VStack>
            <VStack w="15%" alignItems={"flex-end"}></VStack>
        </HStack>
    );
};

export default Header;
