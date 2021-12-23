import { ChakraProvider, Box } from "@chakra-ui/react";
import Layout from "../components/layout/main";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
