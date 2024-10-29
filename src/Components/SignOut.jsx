
import {signOut} from 'firebase/auth'
import { auth } from '../FirebaseConfig'
import Cookies from 'universal-cookie'
let cookies = new Cookies()

const SignOut = ({setIsAuth, setRoom}) => {
    const handleSignOut =  async () => {
        await signOut(auth)
        setIsAuth(false)
        setRoom(null)
        cookies.remove('auth-token')
    }
  return (
    <button onClick={handleSignOut}>Sign out</button>
  )
}

export default SignOut