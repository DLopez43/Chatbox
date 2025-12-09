import MessageList from "./MessageList.tsx"
import MessageInput from "./MessageInput"
import {useState} from 'react'

export const ChatWindow = () => {
    const [ message , setMessage ] = useState("");
    const [ user, setUser] = useState("");
    const [error,setError] = useState <string | null> (null)

    const handleSend = async () => {

    if (!message.trim() || !user.trim()) return;// add a field to check empty usert aswell
    try{ 
    const res = await fetch("/messages", {
    method: "POST" ,
    headers: {"content-type": "application/json"},
    body: JSON.stringify({
        message:message,
        username:user,
    })
    
    // do a check to ensure res is ok
    
    
    });
    if(!res.ok){
        const err = await res.json();
        setError(err.error|| `Failed to create message`)
        return;
    }
    
    const savedMessage = await res.json();
    


    // setMessage( (prev:string) => [...prev, newMessage]);
    setMessage(savedMessage);
    setMessage("");
    } catch (err) {
        console.error("Error creating message:", error);
        setError("Something went wrong. Please try again.");

    }

    

    // //message template
    // const newMessage = {
    //     text: message,
    //     username: user,
    //     createdAt: new Date().toLocaleTimeString(),// new is a invocation alert to let you know that we are using date as a template
    // }
    return (
        <div className= "chat-Window">
            <MessageList />
            <MessageInput 
                handleSend = {handleSend}
                message = {message}
                setMessage = {setMessage} />
        </div>
    )
}
}