import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      maxW="lg"
      bg={useColorModeValue("yellow.400", "cyan.400")}
      borderRadius="4px"
    >
      <Text
        color={useColorModeValue("black", "gray.800")}
        py={3}
        px={8}
        fontSize="md"
        textAlign="center"
      >
        Hi, i am a graduated student from CUHK
      </Text>
    </Box>
  );
};

export default Home;
