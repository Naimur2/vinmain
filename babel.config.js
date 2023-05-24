module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./"],
                    alias: {
                        "@fonts": "./assets/fonts",
                        "@images": "./assets/images",
                        "@svgs": "./assets/svgs",
                        "@components": "./src/components/index.ts",
                        "@screens": "./src/screens",
                        "@routes": "./src/routes",
                        "@sections": "./src/sections",
                        "@hooks": "./src/hooks",
                        "@colors": "./src/theme/colors",
                        "@theme": "./src/theme",
                        typedef: "./src/typedef",
                        "@layouts": "./src/layouts",
                        hoc: "./src/hoc",
                        "@redux":"./src/redux",
                        "@validators":"./src/validators",

                    },
                },
            ],
            "react-native-reanimated/plugin",
        ],
    };
};
