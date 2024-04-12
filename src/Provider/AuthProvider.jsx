import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    // create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }



    // UserLog in
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }




    // google Login
    const singWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }





    // log Out
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // Update Profile
    const userUpdateProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
    }



    // User Manage (onAuthStateChanged)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            // console.log('use in the'), createUser
        });
        return () => {
            unSubscribe()
        }
    }, [])


    // console.log(user)

    const authInfo = {
        user,
        loading,
        createUser,
        userLogIn,
        userLogOut,
        singWithGoogle,
        userUpdateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;