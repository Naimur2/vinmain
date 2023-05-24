import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { HStack, Image, Pressable } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image as ExpoImage } from "expo-image";

const Header = (props: NativeStackHeaderProps) => {
    const insets = useSafeAreaInsets();
    return (
        <HStack bg={"#fff"} px={4} pt={insets.top + 2} pb={2}>
            <Pressable
               
            >
                <ExpoImage
                    source={require("../../assets/svgs/back-arrow.svg")}
                />
            </Pressable>
            <Image
                source={require("../../assets/images/app/logo.png")}
                alt="logo"
                h="100px"
                w="100px"
                resizeMode={"contain"}
                mx={"auto"}
            />
        </HStack>
    );
};

export default Header;
