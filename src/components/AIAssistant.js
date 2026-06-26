import { useState } from "react";

function AIAssistant() {

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([
        {
            sender: "AI",
            text: "👋 Hello! I'm AIFlow Assistant. How can I help you today?"
        }
    ]);

    const sendMessage = () => {

        if (message.trim() === "") return;

        setChat([
            ...chat,
            {
                sender: "You",
                text: message
            },
            {
                sender: "AI",
                text: "Thanks! This is a demo response. Later we'll connect this to an AI API."
            }
        ]);

        setMessage("");

    };

    return (

        <div className="assistant-card">

            <h2>🤖 AI Assistant</h2>

            <div className="chat-box">

                {chat.map((item, index) => (

                    <div
                        key={index}
                        className={item.sender === "AI" ? "ai-msg" : "user-msg"}
                    >

                        <strong>{item.sender}:</strong> {item.text}

                    </div>

                ))}

            </div>

            <div className="chat-input">

                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask anything..."
                />

                <button onClick={sendMessage}>
                    Send
                </button>

            </div>

        </div>

    );

}

export default AIAssistant;