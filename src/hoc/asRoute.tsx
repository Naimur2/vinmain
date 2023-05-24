import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import React from "react";
import { IReactNavigationRoute } from "typedef/navigation.types";

export default function asRoute(
    Component: React.ComponentType<any>,
    routeName: string,
    options?: NativeStackNavigationOptions
): IReactNavigationRoute {
    return {
        name: routeName,
        component: Component,
        options: options,
    };
}
