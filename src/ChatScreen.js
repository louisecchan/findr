import React from "react";
import Avatar from "@mui/icons-material";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Randall",
      image: "...",
      message: "Whats up",
    },
    {
      message: "Hi! How are you Randall!",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p>YOU MATCHED WITH RANDALL ON 11/02/23</p>
      {messages.map((message) => (
        <div className="chatScreen__message">
          <Avatar
            className="chatScreen__message"
            alt={message.name}
            src={message.image}
          />
          <p className="chatScreen_text">{message.message}</p>
        </div>
       ) : (
        <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message}</p>
        </div>
       )
      )}

      <form className="chatScreen__input">
            <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen__inputField" placeholder="Type a message..." type="text" />
            <button onClick={handleSend} type="submit" className="inputButton">SEND</button>
        </form>


    </div>
  );
}

export default ChatScreen;
