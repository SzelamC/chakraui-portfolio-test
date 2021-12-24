import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <Box>
      <Container maxW="container.xl" py={3}>
        <Navbar />
      </Container>
      <Container>{children}</Container>
    </Box>
  );
};

export default Layout;
