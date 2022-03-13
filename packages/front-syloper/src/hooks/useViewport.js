import { useContext, createContext } from "react";

const viewportContext = createContext({});

export const useViewport = () => {
    const { width, height } = useContext(viewportContext);
    return { width, height };
};