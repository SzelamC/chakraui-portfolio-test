import {  Link, Icon, Heading} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiGhostSmileFill } from "react-icons/ri";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Link
        display="flex"
        justifyContent="center"
        alignItems="center"
        _hover={{
          transform: "scale(1.2)",
          color: 'gray.300'
        }}
        transition=" transform 0.3s ease"
      >
        <Icon as={RiGhostSmileFill} w={7} h={7} />
        <Heading fontFamily="Varela Round">SzeLam</Heading>
      </Link>
    </NextLink>
  );
};

export default Logo;
