import { auth, provider } from "../FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const Auth = ({setIsAuth}) => {
    const signInWithGoogle = async () => {
            const res = await signInWithPopup(auth, provider);
            console.log(res.user)
           cookies.set('auth-token', res.user.refreshToken)
           setIsAuth(true)
    };

    return (
        <>
            <button onClick={signInWithGoogle}>Sign in</button>
        </>
    );
};

export default Auth;