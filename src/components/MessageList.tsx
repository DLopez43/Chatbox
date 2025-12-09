import React from 'react';

//Tipo de mensaje(estructura que tendra cada mensje )
type Message = {
    id: number
    text: string
    username: string
    createdAt: string
};
//datos falsos para disenar la UI( then we can replace with API)
const mockMessages: Message[] = [
    {id: 1, text: "Hi", username: "Stormi", createdAt: "12:30" },
    {id: 2, text: "How are you?", username: "Manny", createdAt:"14:28"}
]

export default function MessageList() {
    return(
        <div className="message-list">
            { mockMessages.map((msg)=> (
                <div key={msg.id} className="message-bubble">
                    <div className="message-header">
                        <span className="message-username">{msg.username}</span>
                        <span className="message-time">
                        {new Date().toLocaleTimeString()}</span>
                    </div>
                    <div className="message-text">{msg.text}</div>
                </div>
            ))}
        </div>
    );
}
