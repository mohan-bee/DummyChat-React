import { useRef } from 'react'
import styled from 'styled-components'

const Room = ({setRoom}) => {
    const roomRef = useRef("")

  return (
    <>
    <div className='room'> 
      <label>Enter you room Name</label>
      <input  type="text" ref={roomRef} />
      <button onClick={()=> setRoom(roomRef.current.value)}>Enter Room</button>
       </div>  
         </>
  )
}

export default Room


// const RoomDetails = styled.div`
    
// `