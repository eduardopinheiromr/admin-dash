import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { chakra, LinkProps } from "@chakra-ui/react";

const ChakraLink = chakra(NextLink);

export type CustomLinkProps = LinkProps & NextLinkProps;

export default function Link(props: CustomLinkProps) {
  return <ChakraLink draggable={false} {...props} />;
}
