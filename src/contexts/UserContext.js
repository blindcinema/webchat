import React from "react";
import { useState } from "react";
export const UserContext = React.createContext("Please Use app provider");

export const UserConsumer = UserContext.Consumer;

export function UserProvider(props) {
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState(0);
    const [color, setColor] = useState("rgb (0,0,0)");
    return (
        <UserContext.Provider value={{
            username: username,
            setUsername:setUsername,
            avatar:avatar,
            setAvatar:setAvatar,
            isSignedIn: username !== "",
            color:color,
            setColor:setColor,
        }}>
            {props.children}
        </UserContext.Provider>
    );
};