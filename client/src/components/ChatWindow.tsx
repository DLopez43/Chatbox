import MessageList from "./MessageList.tsx"
import type { Message } from "./MessageList.tsx"
import MessageInput from "./MessageInput"
import {useEffect, useState, useRef} from 'react'
import { io } from "socket.io-client"


const ChatWindow: React.FC = () => {
    const [ messages , setMessages ] = useState<Message[]>([]);
    const [currMessage, setCurrMessage ] = useState<string>('')
    const [ user, setUser] = useState<string> ("");
    const [error,setError] = useState <string | null> (null);
    const [loading, setLoading] = useState<boolean>(true);
    
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("chatUsername"); 
        if (savedUser) {
            setUser(savedUser)
        }
    },[]); 

    useEffect(() => {
        // if there is a user then save them, if not do not save 
        if (user) {
            localStorage.setItem("chatUsername", user)
        }
    },[user])



    // create initial socket connection with useEffect
    useEffect(() => {

        const socket = io("http://localhost:3000", {
            withCredentials: true, 
            transports: ["websocket", "polling"]
        })


        socket.on("connect", () => {
            console.log("Socket connected: ", socket.id)
        })
        
        socket.on("disconnect", () => {
            console.log("Socket disconnected: ")
        })

        socket.on("connect_error", () => {
            console.log("Socket err: ", error)
        })

        // listening for new messages
        socket.on('new_message', (message: Message) => {
            console.log("recieved new message: ", message);
            setMessages((prev) => {
                const exists = prev.some(m => m._id === message._id);
                if (exists) return prev; 
                return [...prev, message]
            });
            
        })

        return ()  => {
            socket.off('connect');
        }
    },[])


    // create a use effect that will fetch the messages and load them on mount 
    useEffect(() => {

        const fetchMessages = async () => {
            try {
            const res = await fetch("/messages");
            console.log("FETCH STATUS:", res.status);

            if (!res.ok) {
                console.error('Failed to fetch messages');
                return;
            }
             
            const data = await res.json();
            console.log("DATA FROM BACKEND:", data);

            //msn from backend 
            if(res.ok) {
                setMessages(data);
                setLoading(false);
                console.log("NEW STATE:", data);
            } 

            } catch(err) {
                console.error("Error fetching message:" , err)
                setError("Failed to load message");
                setLoading(false);
            }
        }

        // init fetch 
        fetchMessages();


    }, []);

    //useEffect to auto-scroll to the bottom of the chat...
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });

        // if (bottomRef.current) {
        //     bottomRef.current.scrollIntoView({ behavior: "smooth" });
        // }
    }, [messages]);


    const handleSend = async () => {

    if (!currMessage || !user) return;// add a field to check empty user aswell
    try{ 
    const res = await fetch("/messages", {
    method: "POST" ,
    headers: {"content-type": "application/json"},
    body: JSON.stringify({
        message: currMessage,
        username:user,
    })
    
    // do a check to ensure res is ok
    
    
    });
    if(!res.ok){
        const err = await res.json();
        setError(err.error|| `Failed to create message`)
        return;
    }
    setCurrMessage('')
    } catch (err) {
        console.error("Error creating message:", err);
        setError("Something went wrong. Please try again.");

    }
    }

    return (
    <div className= "chat-window">
        <MessageList
        messages={messages} 
        currentUser={user} 
        bottomRef = {bottomRef}
        />
        <MessageInput 
            handleSend = {handleSend}
            message = {currMessage}
            setMessage = {setCurrMessage}
            user={user}
            setUser={setUser}
            />
    </div>
)
}

export default ChatWindow;