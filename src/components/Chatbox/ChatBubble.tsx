import React from "react";
import './ChatBubble.css';
import {INewMessage} from "../../interfaces/INewMessage";

const ChatBubble: React.FC<{
    messages: string[],
    userId: string
}> = ({messages, userId}) => {
    return (
        <div className="imessage">
            {
                messages.map((message: INewMessage, idx: number) => {
                    const className = userId === message.socketId ? "from-me" : "from-them"
                    return (<p key={idx} className={className}>{message.data}</p>)
                })
            }
        </div>
    )
}

export default ChatBubble
