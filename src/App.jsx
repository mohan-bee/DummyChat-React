import { useRef, useState } from 'react'
import './App.css'
import Auth from './Components/Auth'

import Cookies from 'universal-cookie'
import Chat from './Components/Chat'
import SignOut from './Components/SignOut'
import styled from 'styled-components'



const cookies = new Cookies()

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState(null)

  const roomRef = useRef("")


  if (!isAuth){

    return (
    <>
      <Nav>
      <h1>Dummy Chat</h1>
      <Auth setIsAuth = {setIsAuth}/>
      </Nav>
    </>
    )
  }
  
  return (

    <>
      <SignOut setIsAuth={setIsAuth} setRoom={setRoom} />

    {room ? <Chat room={room}/>: 
    
     <div className='room'> 
      <label>Enter you room Name</label>
      <input  type="text" ref={roomRef} />
      <button onClick={()=> setRoom(roomRef.current.value)}>Enter Room</button>
       </div>    
    }
    </>
  )
}

export default App

const Nav = styled.div`
    background-color: aliceblue;    
    padding: 30px 50px;
    display: flex;
    justify-content: space-between;
    gap: 100px;
`