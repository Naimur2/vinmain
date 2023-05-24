import { IStackNavigationConfig } from "typedef/navigation.types";
import Header from "../../components/Header";
import homeScreen from "../../screens/user-screens/HomeScreen";
import scannerScreen from "../../screens/user-screens/ScannerScreen";

const userScreens = {
    homeScreen,
    scannerScreen,
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
