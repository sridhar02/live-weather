import { useEffect, createContext, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = (props) => {
    const [socket, setSocket] = useState();
    const baseURL = import.meta.env.VITE_BACKEND_API || "http://localhost:4000";

    // useEffect(() => {
    //     const socketObj = io(baseURL);
    //     setSocket(socketObj);
    // }, []);

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    );
};