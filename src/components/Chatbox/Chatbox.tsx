import React, {useEffect, useRef, useState} from 'react';
import { Input } from 'antd';
import ChatBubble from "./ChatBubble";
const { Search } = Input;
import useSocketConnection from "../../hooks/useSocketConnection";
import './Chatbox.css'

const Chatbox: React.FC = () => {
    const [newMessage, setNewMessage] = useState<string>('');
    const chatFeed = useRef<HTMLInputElement>(null);

    const [messages, addMessage, userId] = useSocketConnection('chatbox')

    useEffect(()=> {
        if(chatFeed && chatFeed.current) {
            chatFeed.current.scrollTop = chatFeed.current.scrollHeight;
        }
    }, [messages])

    return (
        <div className={'chatbox'} ref={chatFeed}>
            <ChatBubble
                messages={messages}
                userId={userId}
            />
            <Search
                placeholder="Enter your message"
                onSearch={(value: string) => {
                    addMessage(value)
                    setNewMessage('')
                }}
                enterButton="Send"
                value={newMessage}
                onChange={(e) => {
                    setNewMessage(e.target.value)
                }}
                style={{position: 'absolute', bottom: '0'}}
            />
        </div>
    );
}
export default Chatbox
