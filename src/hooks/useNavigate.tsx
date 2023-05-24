import { NavigationContext } from "@react-navigation/native";
import { TUserRoutes } from "@routes/userRoutes/user.routes";
import React from "react";

export type TRoutes = TUserRoutes;

type TUseNavigate = (screen: TRoutes, params?: any) => void;

export default function useNavigate(): TUseNavigate {
    const navigation = React.useContext(NavigationContext);
    const navigate = (screen: TRoutes, params?: any) => {
        navigation?.navigate(screen as string, params);
    };
    return navigate;
}
