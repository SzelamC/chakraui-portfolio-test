import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";
import theme from "../theme/index";
import "@fontsource/varela-round/"

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
