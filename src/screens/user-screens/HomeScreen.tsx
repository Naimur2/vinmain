import React from "react";
import asRoute from "hoc/asRoute";
import { Center, Text } from "native-base";

const HomeScreen = () => {
    return (
        <Center flex={1}>
            <Text color={"#000"}>HomeScreen</Text>
        </Center>
    );
};

const homeScreen = asRoute(HomeScreen, "homeScreen");

export default homeScreen;
