import { useRef } from 'react'


const Room = ({setRoom}) => {
    const roomRef = useRef("")

  return (
    <RoomDetails>
    <div className='room'> 
      <label>Enter you room Name</label>
      <input  type="text" ref={roomRef} />
      <button onClick={()=> setRoom(roomRef.current.value)}>Enter Room</button>
       </div>  
         </RoomDetails>
  )
}

export default Room


