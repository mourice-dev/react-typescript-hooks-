import { createContext, useContext, useState } from "react"

export const UserContext = createContext("");

export default function UseContexts() {
    const [user, setUser] = useState("Maurice");

    return (
        <UserContext.Provider value={user}>
            <p>{user}</p>
            <Component2 />
        </UserContext.Provider>
    )
}
function Component2() {
    const user = useContext(UserContext)
    return (
        <div>
           <p>{user}</p>
           <Component3 />
        </div>
    )
}
function Component3() {
    const user = useContext(UserContext)
    return (
        <div>

           <p>{user}</p>
           
        </div>
    )
}