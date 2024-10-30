import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  SimpleGrid,
  List,
  ListItem,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { logo, medic } from "assets/img/application";
import { persons } from "./settings";
import RegistrationForm from "components/organisms/Form";

export const Home = () => {
  return (
    <Box bg="white" color="white" minHeight="100vh">
      <VStack spacing={8} align="stretch" alignItems="center" w="100%">
        <Image
          src={logo}
          alt="logo"
          borderRadius="full"
          boxSize="200"
          position="absolute"
        />
        <Flex h="100vh">
          <HStack>
            <Flex w="70%">
              <Image src={medic} alt="logo" w="100vw" maxH="100vh" />
            </Flex>
            <RegistrationForm />
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};
