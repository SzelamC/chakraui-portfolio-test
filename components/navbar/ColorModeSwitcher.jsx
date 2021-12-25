import { Box, IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <BiSun /> : <BiMoon />}
        aria-label="Switch color mode"
      />
    </Box>
  );
};

export default ColorModeSwitcher;
