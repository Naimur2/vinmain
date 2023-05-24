import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
    const appPlugins = config.plugins ?? [];

    return {
        ...config,
        name: "World of Plastics",
        slug: "world-of-plastics",
        extra: {},
        androidStatusBar: {
            hidden: true,
        },
        android: {
            ...config.android,
            permissions: [
                "CAMERA",
                "READ_EXTERNAL_STORAGE",
                "WRITE_EXTERNAL_STORAGE",
                "RECORD_AUDIO",
            ],
            versionCode: 1,
        },
        ios: {
            ...config.ios,
            infoPlist: {
                NSCameraUsageDescription:
                    "This app requires camera access to provide you with the best experience.",
                NSPhotoLibraryUsageDescription:
                    "This app requires photo library access to provide you with the best experience.",
                NSMicrophoneUsageDescription:
                    "This app requires microphone access to provide you with the best experience.",
            },
        },
        plugins: [...appPlugins],
    };
};
