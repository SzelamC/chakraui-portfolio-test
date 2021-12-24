import { extendTheme } from "@chakra-ui/react";
import config from "./foundation/config";
import Link from "./components/Link";

const overrides = {
  config,
  components: {
    Link,
  },
};

export default extendTheme(overrides);
