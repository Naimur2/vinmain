import useNavigate from "@hooks/useNavigate";
import asRoute from "hoc/asRoute";
import {
    Button,
    HStack,
    Image,
    Input,
    Modal,
    Pressable,
    ScrollView,
    Text,
    VStack,
} from "native-base";
import React from "react";
import { Image as ExpoImage } from "expo-image";
import useToggle from "@hooks/useToggle";

const VinConfirmation = () => {
    const navigate = useNavigate();
    const [isOpen, toggleIsOpen] = useToggle(false);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <VStack flex={1} position={"relative"} bg="white" py={4}>
                <VStack
                    bg="primary.100"
                    px="4"
                    pt={10}
                    pb={20}
                    space={3}
                    borderRadius={20}
                >
                    <Text color={"#fff"} fontWeight={600} fontSize={"2xl"}>
                        VIN Confirmation
                    </Text>
                    <Text color={"#fff"} fontWeight={400} fontSize={"md"}>
                        We scanned the VIN of your car using your mobile camera
                    </Text>
                </VStack>

                <VStack
                    bg="primary.200"
                    px="4"
                    pt={10}
                    pb={20}
                    space={3}
                    borderRadius={20}
                    mt={-10}
                >
                    <Text color={"#000"} fontWeight={600} fontSize={"xl"}>
                        Scanned VIN
                    </Text>

                    <HStack space="1">
                        <Text
                            color={"#ffffff"}
                            fontWeight={700}
                            fontSize={"2xl"}
                        >
                            2T2ZFMCA2GC001437
                        </Text>
                        <Pressable p="1" onPress={toggleIsOpen}>
                            <ExpoImage
                                source={require("../../../assets/svgs/icons/pencil.svg")}
                                style={{ width: 14, height: 14 }}
                            />
                        </Pressable>
                    </HStack>

                    <Text color={"#fff"} fontWeight={600} fontSize={"md"}>
                        Feel free to change VIN number if we scanned incorrectly
                    </Text>
                </VStack>

                <VStack
                    bg="white"
                    px="4"
                    pt={10}
                    pb={10}
                    space={1}
                    borderRadius={20}
                    mt={-10}
                    position={"relative"}
                >
                    <Text color={"#000"} fontWeight={600} fontSize={"2xl"}>
                        Confirm the VIN is scanned correctly or not.
                    </Text>
                    <Text color={"#000"} fontWeight={400} fontSize={"md"}>
                        Sometime because of angle, shadow, glare, dirt or water
                        damage, we may scan it incorrectly even through it might
                        be looking perfect with human eyes.
                    </Text>
                </VStack>

                <VStack p="4" mt={4}>
                    <Button variant={"primary"}>Accept</Button>
                </VStack>
            </VStack>
            <Modal
                isOpen={isOpen}
                onClose={toggleIsOpen}
                closeOnOverlayClick={true}
            >
                <VStack
                    w="full"
                    bg="white"
                    px="4"
                    py={4}
                    maxWidth={"360px"}
                    mx={4}
                    rounded={10}
                    space={4}
                >
                    <Input placeholder="Enter VIN" />
                    <HStack space="1" justifyContent={"space-between"}>
                        <Button w="48%" variant={"primary"}>
                            Submit
                        </Button>
                        <Button
                            w="48%"
                            variant={"outline"}
                            onPress={toggleIsOpen}
                        >
                            Cancel
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        </ScrollView>
    );
};

const vinConfirmation = asRoute(VinConfirmation, "vinConfirmation");

export default vinConfirmation;
