import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState();


    // create User
    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }



    // UserLog in
    const userLogIn = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // log Out
    const userLogOut = () => {
        // setLoading(true)
        return signOut(auth)
    }



    // User Manage (onAuthStateChanged)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // setLoading(false)
            // console.log('use in the'), createUser
        });
        return () => {
            unSubscribe()
        }
    }, [])


    console.log(user)

    const authInfo = {
        user,
        createUser,
        userLogIn,
        userLogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;