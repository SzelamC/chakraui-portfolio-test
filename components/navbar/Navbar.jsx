import { Box, HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import LinkItem from "./LinkItem";

const Navbar = () => {
  return (
    <Box as="nav" maxW="100%">
      <HStack justifyContent="space-between">
        <HStack spacing={10}>
          <Box as={Logo} />
          <HStack pt={2} spacing={5}>
            <LinkItem href="/works">Works</LinkItem>
            <LinkItem href="/posts">Posts</LinkItem>
            <LinkItem isExternal href="https://github.com/SzelamC">
              Github
            </LinkItem>
          </HStack>
        </HStack>
        <Box>haha</Box>
      </HStack>
    </Box>
  );
};

export default Navbar;
