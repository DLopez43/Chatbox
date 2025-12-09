import { useState } from 'react'

import './App.css'

function MainRoom() {

const [ message , setMessage ] = useState({
    username: " ",
    message: " ",
});

if (!message.trim()) return;

//message template
const newMessage = {
    text: message.message,
    username: message.username,
    createdAt: new Date().toLocaleTimeString(),// new is a invocation alert to let you know that we are using date as a template
};

setMessage( (prev:string) => [...prev, newMessage]);
setMessage("");

}

export default MainRoom;
