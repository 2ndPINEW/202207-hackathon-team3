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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const Header = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={8}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link href="/">
          <Heading as="h1" size="lg" letterSpacing={"tighter"} cursor="pointer">
            ふくフォト
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        {!isOpen ? (
          <HamburgerIcon cursor="pointer" />
        ) : (
          <CloseIcon cursor="pointer" />
        )}
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        gap={2}
      >
        <Link href="/">
          <Text>Home</Text>
        </Link>
        <Link href="/upload">
          <Text>Upload</Text>
        </Link>
        <Link href="/recommend">
          <Text>Recommend</Text>
        </Link>
        <Link href="/ranking">
          <Text>Ranking</Text>
        </Link>
      </Stack>

      {/* <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            mt={{ base: 4, md: 0 }}
          >
            <Button
              variant="outline"
              _hover={{ bg: "teal.700", borderColor: "teal.700" }}
            >
              Create account
            </Button>
          </Box> */}
    </Flex>
  );
};
