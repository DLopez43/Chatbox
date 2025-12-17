import React from 'react'
import "./App.css"
import ChatWindow from "./components/ChatWindow"
// import App from './components/darkmode/App'

const MainRoom: React.FC = () => {
    return (
        <>
        <h1 className='title_chatroom'>💙🌺Blue Poppy Chat Room💙🌺</h1> 
        <div className="main-room">
            <ChatWindow/>
            {/* <App/> */}
        </div>
        </>
    )
}

export default MainRoom; 

