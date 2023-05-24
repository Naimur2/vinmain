import useNavigate from "@hooks/useNavigate";
import asRoute from "hoc/asRoute";
import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";

const WhereIsMyVin = () => {
    const navigate = useNavigate();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <VStack flex={1} position={"relative"} py={4}>
                <VStack
                    bg="primary.100"
                    px="4"
                    pt={10}
                    pb={20}
                    space={3}
                    borderRadius={20}
                >
                    <Text color={"#fff"} fontWeight={600} fontSize={"2xl"}>
                        Where Is My VIN?
                    </Text>
                    <Text color={"#fff"} fontWeight={400} fontSize={"md"}>
                        A VIN,or vehicle identification number,is a unique
                        identifying code given to a vehicle when it’s
                        manufactured.
                    </Text>
                </VStack>
                <VStack
                    bg="white"
                    px="4"
                    pt={10}
                    pb={20}
                    space={1}
                    borderRadius={20}
                    mt={-10}
                    position={"relative"}
                >
                    <Text color={"#000"} fontWeight={600} fontSize={"2xl"}>
                        2T2ZFMCA2GC001437
                    </Text>
                    <Text color={"#000"} fontWeight={500} fontSize={"md"}>
                        (usually 17 characters)
                    </Text>
                    <Image
                        source={require("../../../assets/images/app/car-vin.png")}
                        alt="VIN"
                        zIndex={-1}
                        mt={-5}
                    />
                </VStack>
                <VStack
                    bg="primary.200"
                    px="4"
                    pt={10}
                    pb={10}
                    space={3}
                    borderRadius={20}
                    mt={-10}
                >
                    <Text color={"#fff"} fontWeight={600} fontSize={"2xl"}>
                        How To Find Your Car’s VIN Number?
                    </Text>
                    <HStack
                        space={3}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                    >
                        <Text
                            color={"#000000"}
                            fontWeight={600}
                            fontSize={"2xl"}
                        >
                            1{")"}
                        </Text>
                        <Text color={"#fff"} fontWeight={500} fontSize={"md"}>
                            In the driver’s side door jamb-the VIN is usually
                            printed on a sticker in that location.
                        </Text>
                    </HStack>
                    <HStack
                        space={3}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                    >
                        <Text
                            color={"#000000"}
                            fontWeight={600}
                            fontSize={"2xl"}
                        >
                            2{")"}
                        </Text>
                        <Text color={"#fff"} fontWeight={500} fontSize={"md"}>
                            Look for your car VIN at the front of the dashboard
                            .on the driver’s side of the vehicle.
                        </Text>
                    </HStack>
                </VStack>
                <VStack p="4" mt={4}>
                    <Button variant={"primary"}>Ok</Button>
                </VStack>
            </VStack>
        </ScrollView>
    );
};

const whereIsMyVin = asRoute(WhereIsMyVin, "whereIsMyVin");

export default whereIsMyVin;
