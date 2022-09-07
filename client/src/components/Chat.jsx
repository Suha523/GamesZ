import React, { useEffect, useState } from 'react';
import '../assets/styles/chat.css';
export default function Chat({ socket, user, room }) {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const sendMessage = async () => {
        if (currentMessage !== '') {
            const messageData = {
                room: room,
                author: user,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ':' +
                    new Date(Date.now()).getMinutes(),
            };
            await socket.emit('sendMessage', messageData);
            let newMessages = [...messages, messageData];
            setMessages(newMessages);
        }
    };

    useEffect(() => {
        socket.on('receive_message', (data) => {
            let newMessages = [...messages, data];
            setMessages(newMessages);
            //   setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">
                {messages.map((m) => (
                    <h3>{m.message}</h3>
                ))}
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Hey..."
                    onChange={(e) => {
                        setCurrentMessage(e.target.value);
                    }}
                />
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    );
}
