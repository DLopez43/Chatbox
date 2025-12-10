import React from 'react'
import "./App.css"
import ChatWindow from "./components/ChatWindow"

const MainRoom: React.FC = () => {
    return (
        <div className="main-room">
            <ChatWindow/>
        </div>
    )
}

export default MainRoom; 


// // import {FC} from 'express'

// import './App.css'

// const [ message , setMessage ] = useState({
//     username: " ",
//     message: " ",
// });

// if (!message.trim()) return;

// //message template
// const newMessage = {
//     text: message.message,
//     username: message.username,
//     createdAt: new Date().toLocaleTimeString(),// new is a invocation alert to let you know that we are using date as a template
//     };

//     setMessage( (prev:string) => [...prev, newMessage]);
//     setMessage("");


//     return (
//         <>
//         <form onSubmit={handleSend}>
//         // this is where the inputs
//         //each input has a value
//         // use an onChange to set your target value


//         </form>
//         </>
//     )
// }
    


// export default MainRoom;