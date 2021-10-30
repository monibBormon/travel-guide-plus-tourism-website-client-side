import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/firebase.init';

// init firebase
firebaseInitialization();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // google login
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // state changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        })
        return () => unSubscribe
    }, [])

    //log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                window.location.reload(true)
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }



    // returns
    return {
        user,
        isLoading,
        setIsLoading,
        googleSignIn,
        logOut
    }

};

export default useFirebase;