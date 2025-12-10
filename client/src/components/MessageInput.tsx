

interface Props{
    handleSend: () => void;
    user: string;
    message: string;
    setMessage: (value: string) => void;
    setUser: (value: string) => void;
}



export default function MessageInput({handleSend, message, setMessage, setUser, user}:Props) {
    return (
        <form onSubmit = {(e) => {
            e.preventDefault();
            handleSend();
        }}>
        <div className="message-input">
            <input
            type="text"
            className="user-input-field"
            placeholder="Type your name..."
            onChange = {(e) => {setUser(e.target.value)}}
            value = {user}
            />
            <input
            type="text"
            className="message-input-field"
            placeholder="Type your message..."
            onChange = {(e) => {setMessage(e.target.value)}}
            value = {message}
            />
            {/* //onchange attribute that should grab user input */}
            <button className="message-send-button" type= 'submit' >  
                {/* /add an onSubmit attribute and a type  with the value of submit */}
                Send
            </button>
        </div>
        </form>
    )
}