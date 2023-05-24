import { createNativeStackNavigator } from "@react-navigation/native-stack";
import userRoutes from "./user.routes";

const Stack = createNativeStackNavigator();

export default function UserRoutes() {
    return (
        <Stack.Navigator
            screenOptions={userRoutes.screenOptions}
            initialRouteName={userRoutes.initialRouteName}
        >
            {userRoutes.routes.map((route) => {
                return (
                    <Stack.Screen
                        key={route.name}
                        name={route.name}
                        component={route.component}
                        options={route.options}
                    />
                );
            })}
        </Stack.Navigator>
    );
}
