import { Box, Container, Divider } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Container maxW="container.lg" py={2}>
        <Navbar />
      </Container>
      <Divider />
      <Container maxW="container.md" display='flex' justifyContent="center" py={8}>{children}</Container>
    </Box>
  );
};

export default Layout;
