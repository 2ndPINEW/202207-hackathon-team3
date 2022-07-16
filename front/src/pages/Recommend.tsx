import { ChangeEvent, useState, FC } from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  Button,
  useDisclosure,
  Link,
  useColorModeValue,
  Image,
  Center,
  AspectRatio,
} from "@chakra-ui/react";
import ranking1 from "../assets/RANKING1.jpg";
import ranking2 from "../assets/RANKING2.jpg";
import ranking3 from "../assets/RANKING3.jpg";

export const Recommend: FC = () => {
  return (
    <>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex={1} padding={5}>
          <Text textAlign={"center"}>food 1</Text>
          <AspectRatio maxW="400px" ratio={4 / 3}>
            <Image src={ranking1} />
          </AspectRatio>
        </Box>
        <Box flex={1} padding={5}>
          <Text textAlign={"center"}>food 2</Text>
          <AspectRatio maxW="400px" ratio={4 / 3}>
            <Image src={ranking2} />
          </AspectRatio>
        </Box>
        <Box flex={1} padding={5}>
          <Text textAlign={"center"}>food 3</Text>
          <AspectRatio maxW="400px" ratio={4 / 3}>
            <Image src={ranking3} />
          </AspectRatio>
        </Box>
      </Flex>
    </>
  );
};
