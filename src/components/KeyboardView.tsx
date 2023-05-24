import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type KeyboardScrollViewDefaultProps = React.ComponentProps<
    typeof KeyboardAwareScrollView
>;

export interface KeyboardScrollViewProps
    extends KeyboardScrollViewDefaultProps {
    children: React.ReactNode;
    containerStyle?: any;
}

export default function KeyboardView({
    children,
    containerStyle = {},
}: KeyboardScrollViewProps) {
    return (
        <KeyboardAwareScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: "#F8F8F8",
                ...containerStyle,
            }}
            keyboardShouldPersistTaps="handled"
        >
            {children}
        </KeyboardAwareScrollView>
    );
}
