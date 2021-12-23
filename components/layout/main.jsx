import { Box, Container } from "@chakra-ui/react";
import Navbar from "../Navbar"

const Layout = ({ children }) => {
  return (
    <Box>
      <Container maxW="80%" py={3}>
        <Navbar />
      </Container>
      <Container>{children}</Container>
    </Box>
  );
};

export default Layout;
