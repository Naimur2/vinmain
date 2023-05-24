import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export interface IReactNavigationRoute {
    name: string;
    component: React.ComponentType<any>;
    options?: NativeStackNavigationOptions;
}

export interface IReactNavigationRoutes {
    [key: string]: IReactNavigationRoute;
}

export interface IStackNavigationConfig {
    initialRouteName: string;
    routes: IReactNavigationRoute[];
    screenOptions?: NativeStackNavigationOptions;
}

type TNavigationConfig = Omit<IStackNavigationConfig, "screenOptions">;

export interface ITabNavigationConfig extends TNavigationConfig {
    screenOptions: BottomTabNavigationOptions;
}
