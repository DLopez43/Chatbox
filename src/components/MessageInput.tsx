
export default function MessageInput() {
    return (
        <div className="message-input">
            <input
            type="text"
            className="message-input-field"
            placeholder="Type your message..."
            />
            <button className="message-send-button">
                Send
            </button>
        </div>
    )
}