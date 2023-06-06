import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "./firebase.config";

// export const AuthContext = React.createContext();
const AuthContext = React.createContext();

// this is a standard pattern for accessing context value
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    //for accessing context value in others file
    return useContext(AuthContext); //=> {currentUser, signUp, login, googleSignIn, logout}
};

//authentication provider func for adding value and return
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    // for authentication state change for login/logout
    useEffect(() => {
        setLoading(true);
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // signUp function
    const signUp = async (email, password, username, photoURL = "") => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // profile update
        await updateProfile(auth.currentUser, {
            displayName: username,
            photoURL,
        });

        // for currentUser state change
        const updatedUser = auth.currentUser;
        setCurrentUser({
            ...updatedUser,
        });
    };

    // login function
    const login = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password); // return a promise
    };

    // facebook signIn
    const facebookSignIn = () => {
        const auth = getAuth();
        const FacebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, FacebookProvider);
    };
    // google signIn
    const googleSignIn = () => {
        const auth = getAuth();
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider);
    };

    // github signIn
    const githubSignIn = () => {
        const auth = getAuth();
        const GithubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, GithubProvider);
    };

    // logout function
    const logout = () => {
        const auth = getAuth();
        return signOut(auth); // return a promise
    };

    const value = {
        currentUser,
        signUp,
        login,
        facebookSignIn,
        googleSignIn,
        githubSignIn,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
