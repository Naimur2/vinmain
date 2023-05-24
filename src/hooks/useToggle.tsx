import React from "react";

type TUseToggle = [status: boolean, toggle: () => void];

export default function useToggle(): TUseToggle {
    const [status, setStatus] = React.useState<boolean>(false);

    const toggle = () => {
        setStatus((prev) => !prev);
    };

    return [status, toggle];
}
