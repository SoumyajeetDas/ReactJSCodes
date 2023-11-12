import React, { useState } from 'react'

interface AuthUser {
    name: string,
    email: string
}

const User = () => {

    // const [user, setUser] = useState<AuthUser | null>(null);

    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name: "Soumyajeet",
            email: "s@gmail.com"
        })
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <>
            <div>
                <h2>Username : {user?.name}</h2>
                <h2>Email : {user?.email}</h2>
            </div>
            <div>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>

    )
}

export default User
