import React, { useContext, createContext, useState } from "react";


// In createContext we give the type what we pass in the value of the Provider
const UserContext = createContext({} as UserType);



// const UserContext = createContext<UserType | null>(null);
// If you provide like this we will get error while dereferencing the user and setUser in the UserPage.tsx. 
// The reason is you cannot destructure the value because you have not verified that it is an actually an UserType and not null.


type AuthType = {
    name: string,
    email: string
}

type UserType = {
    user: AuthType | null,
    setUser: React.Dispatch<React.SetStateAction<AuthType | null>>
}


type UserContextProviderType = {
    children: React.ReactNode
}

export const UserContextProvider = ({ children }: UserContextProviderType) => {

    
    // If you have not checked for whether setUser is null or not in the UserPage.tsx it would have thrown error as setUser 
    // is type useState<AuthType | null>(null); and there is no gurantee it is not null so on Type Narrowing only it helps to work.
    // To get out of the situation we have to write 
    // const [user, setUser] = useState<AuthType | null>({} as AuthType);
    // After writing that then the stuffs can be dereferenced.
    
    const [user, setUser] = useState<AuthType | null>(null);


    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}


export const AuthData = () => {
    return useContext(UserContext);
}