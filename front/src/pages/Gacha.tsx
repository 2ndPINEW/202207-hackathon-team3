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
} from "@chakra-ui/react";
import gacha from "../assets/gacha.png";
import gacha2 from "../assets/gacha2.png";
export const Gacha: FC = () => {
  return (
    <Box mt={20} mb={10}>
      <Box>
        <Heading mb={6} textAlign="center">
          がちゃ
        </Heading>
        <Center>
          <Image width="300px" src={gacha} />
        </Center>
      </Box>

      <Box height="50vh"></Box>
      <Box>
        <Center>
          <Image width="300px" src={gacha2} />
        </Center>
      </Box>
      <Box mb={10} mt={10}>
        <Center>
          <Link href="recommend">
            <Button colorScheme="blue">おすすめの特産品を見る</Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};
