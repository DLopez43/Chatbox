

interface Props{
    handleSend: () => void;
    message: string;
    setMessage: (value: string) => void;
}



export default function MessageInput({handleSend, message, setMessage}:Props) {
    return (
        <form onSubmit = {handleSend}>
        <div className="message-input">
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