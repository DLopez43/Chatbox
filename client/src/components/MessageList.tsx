export type Message = {
  _id?: string;
  message: string;
  username: string;
  createdAt?: string;
  // messages: Message[];
}

function formatTime(dateString: string | undefined) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

 //cammbio
interface MessageListProps {
  messages: Message[];
  currentUser?: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, currentUser }) => {

  // /Loading state
    if (messages.length === 0) {
        return <div> Loading messages...</div>
    }

// //Feature aligment bubble (me & others)
// return (
//   <div className="message-list">
//     {messages.map((msg, index) => {
//   const isMe = msg.username === currentUser;


//   return (
//     // <div
//     //   key={msg._id || index}
//     //   className={`message-row ${isMe ? "message-row-me" : "message-row-other"}`}
//     // >
//     //   <div className={`message-bubble ${isMe ? "message-bubble-me" : "message-bubble"}`}>




return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={msg._id || index} className="message-bubble">
          <div className="message-header">
            <span className="message-username">{msg.username}</span>
            <span className="message-time">{formatTime(msg.createdAt)}</span>
          </div>
          <div className="message-text">{msg.message}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageList