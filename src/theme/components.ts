import _ from "lodash";
import colors from "./colors";
import { fontSizes } from "./typography";

const components = {
    Button: {
        baseStyle: {
            borderRadius: 8,
            _text: {
                fontWeight: 600,
                fontSize: fontSizes.md,
                color: "white",
                py: 1,
                px: 6,
            },
        },
        variants: {
            primary: {
                backgroundColor: _.get(colors, "primary.800"),
                _pressed: {
                    backgroundColor: _.get(colors, "primary.700"),
                },
            },
            secondary: {
                backgroundColor: "transparent",
                borderColor: _.get(colors, "gray.300"),
                borderWidth: 1,
                _text: {
                    color: _.get(colors, "primary.800"),
                },
                _pressed: {
                    backgroundColor: "#ffffff90",
                },
            },
            green: {
                backgroundColor: _.get(colors, "secondary.900"),
                _text: {
                    color: _.get(colors, "gray.25"),
                },
                _pressed: {
                    backgroundColor: _.get(colors, "secondary.700"),
                },
            },
            outline: {
                backgroundColor: "transparent",
                borderColor: _.get(colors, "primary.800"),
                borderWidth: 1,
                _text: {
                    color: _.get(colors, "primary.800"),
                    fontWeight: 600,
                },
                _pressed: {
                    backgroundColor: "#ffffff90",
                },
            },
        },
    },
    Input: {
        baseStyle: {
            borderWidth: "1px",
            borderColor: _.get(colors, "gray.300"),
            placeholderTextColor: _.get(colors, "dark.700"),
            fontWeight: 500,
            borderRadius: 14,
            color: _.get(colors, "dark.800"),
            _focus: {
                borderColor: _.get(colors, "gray.400"),
                borderWidth: 1,
                backgroundColor: "white",
            },
            px: 4,
            py: 3,
        },
        defaultProps: {
            fontSize: 16,
        },
    },
    Text: {
        baseStyle: {
            color: _.get(colors, "gray.700"),
        },
        variants: {
            p1: {
                fontSize: fontSizes["md"],
                fontWeight: 400,
                color: _.get(colors, "gray.500"),
            },
            h1: {
                fontSize: fontSizes["2xl"],
                fontWeight: 700,
                color: _.get(colors, "dark.800"),
            },
            h2: {
                fontSize: fontSizes["md"],
                fontWeight: 600,
                color: _.get(colors, "dark.800"),
            },
            h3: {
                fontSize: fontSizes["sm"],
                fontWeight: 500,
                color: _.get(colors, "dark.800"),
            },
        },
    },
    Checkbox: {
        baseStyle: {
            rounded: "md",
            size: "sm",
            borderColor: _.get(colors, "primary.800"),
            _checked: {
                bg: "primary.800",
                borderColor: "primary.800",
            },
            justifyContent: "flex-start",
            alignItems: "flex-start",
        },
    },
};

export default components;
