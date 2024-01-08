import { ComponentStyleConfig } from "@chakra-ui/react";

export const Radio: ComponentStyleConfig = {
  parts: ["container", "control", "label"],
  sizes: {
    lg: {
      label: {
        fontSize: "13px",
        bg: "red",
      },
    },
  },
};
