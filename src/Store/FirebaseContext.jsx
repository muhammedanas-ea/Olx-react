import { createContext, useState} from "react";
import 'firebase/compat/auth'
export const FirebaseContext = createContext(null);
export const AuthCotext = createContext(null);



export default function Context ({children}){

    const [user,setUser] = useState(null);

    return(
        <AuthCotext.Provider value={{user, setUser}}>
            {children}
        </AuthCotext.Provider>
    )
}