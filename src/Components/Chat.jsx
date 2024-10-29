import { useState, useEffect, useRef } from "react";
import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore';
import { auth, db } from "../FirebaseConfig";
import styled from 'styled-components';

const Chat = ({ room }) => {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messageRef = collection(db, "messages");
    const chatsRef = useRef(null);
    const inputRef = useRef(null);
    const isSubmitting = useRef(false); 

    useEffect(() => {
        const queryMessages = query(
            messageRef,
            where('room', '==', room)
        );

        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            if (snapshot.empty) {
                console.log("No messages found.");
            } else {
                const fetchedMessages = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));

               
                const sortedMessages = fetchedMessages.sort((a, b) => {
                    return (a.createdAt?.toMillis() || 0) - (b.createdAt?.toMillis() || 0);
                });

                console.log("Fetched messages:", sortedMessages);
                setMessages(sortedMessages);
            }
        }, (error) => {
            console.error("Error fetching messages:", error);
        });

        return () => unsubscribe();
    }, [room]);

    useEffect(() => {
        if (chatsRef.current) {
            chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmitMessage = async (e) => {
        e.preventDefault();
        
        if (newMessage.trim() === "" || isSubmitting.current) return; 

        isSubmitting.current = true;

        try {
           
            await addDoc(messageRef, {
                text: newMessage,
                createdAt: serverTimestamp(),
                user: auth.currentUser.displayName,
                userId: auth.currentUser.uid,
                room,
            });


            setNewMessage(""); 
            
            
            setTimeout(() => {
                isSubmitting.current = false; 
            }, 100);
        } catch (error) {
            console.error("Error adding message:", error);
            isSubmitting.current = false; // Reset the flag in case of an error
        }
    };

    return (
        <Container>
            <h1>Welcome to: {room}</h1>
            <div className="chats" ref={chatsRef}>
                {messages.map((msg) => (
                    <Message
                        key={msg.id}
                        isCurrentUser={msg.userId === "q7COMJrocpgh1pJtofDghMgKF0y1"}
                    >
                        {msg.user}: {msg.text}
                    </Message>
                ))}
            </div>
            <form onSubmit={handleSubmitMessage}>
                <input
                    ref={inputRef}
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    type="text"
                    placeholder="Enter your message"
                />
                <button type="submit">Send</button>
            </form>
        </Container>
    );
};

const Message = styled.p`
    background-color: ${props => props.isCurrentUser ? "#243642" : "#d2eaff"};
    color: ${props => props.isCurrentUser ? "white" : "black"};
    margin: 10px 0;
    padding: 10px;
    width: fit-content;
    border-radius: 5px;
`;

export default Chat;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: lightgray;
    width: 80vw;
    height: 60vh;

    h1 {
        background-color: #06001e;
        color: white;
        text-align: center;
        padding: 20px 0;
    }

    .chats {
        flex-grow: 1;
        padding: 20px;
        background-color: #1a1a1a;
        overflow-y: scroll;
    }

    form {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 20px;
        position: sticky;
        bottom: 0;
        gap: 20px;
    }

    input {
        width: 80%;
        padding-left: 10px;
        border-radius: 10px;
        border: none;
    }
`;