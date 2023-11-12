import React from 'react';
import { AuthData } from '../context/UserContext';

const UserPage = () => {

    const { user, setUser } = AuthData();

    const handleLogin = ()=>{

        // If you have not checked for whether setUser is null or not it would have thrown error as setUser is type useState<AuthType | null>(null);
        // and there is no gurantee it is not null so on Type Narrowing only it helps to work.
        // To get out of the situation we have to write 
        // const [user, setUser] = useState<AuthType | null>({} as AuthType);
        // After writing that then the stuffs can be defereferenced.

        if(setUser){

            setUser({
                name:"Soumyajeet",
                email:"Soumyajeet@gmail.com",
            })
        }
    }

    const handleLogout = ()=>{
        setUser(null)
    }

    return (

        <>
            <div>
                <h3>Username : {user?.name}</h3>
                <h3>Email : {user?.email}</h3>
            </div>

            <div>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogout}>Logout</button>
            </div>

        </>
    )
}

export default UserPage
