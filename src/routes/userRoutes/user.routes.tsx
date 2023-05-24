import { IStackNavigationConfig } from "typedef/navigation.types";
import Header from "../../components/Header";
import homeScreen from "../../screens/user-screens/HomeScreen";

const userScreens = {
    homeScreen,
};

const userRoutes: IStackNavigationConfig = {
    initialRouteName: "homeScreen",
    routes: Object.values(userScreens),
    screenOptions: {
        animation: "slide_from_right",
        header: Header,
    },
};

export type TUserRoutes = keyof typeof userScreens;

export default userRoutes;
