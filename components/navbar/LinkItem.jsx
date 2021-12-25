import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const LinkItem = ({ href, children, isExternal}) => {
  return (
    <NextLink href={href} passHref>
      <Link fontSize="lg"  isExternal={isExternal}>{children}</Link>
    </NextLink>
  );
};

export default LinkItem;
