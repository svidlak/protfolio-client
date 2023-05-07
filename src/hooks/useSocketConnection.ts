import Socket from "../utils/websocket";
import {useEffect, useMemo, useState} from "react";
import {INewMessage} from "../interfaces/INewMessage";

const useSocketConnection = (pathName: string) => {
    if(!pathName) throw new Error('useSocketConnection missing pathName')
    const socketClass = useMemo(()=> new Socket(pathName), [])
    const socket = socketClass.getSocket;

    const [messages, setMessages] = useState([]);
    const [socketId, setSocketId] = useState(null);


    const addMessage = (message: string) => {
        if(!socket.connected) {
            socket.connect();
        }
        socket.emit('broadcastMessage', message)
    }

    useEffect(() => {
        if(!socket.connected) {
            socket.connect();
        }

        socket.on("connect", () => {
            setSocketId(()=> socket.id)
        });

        socket.on('broadcastMessage', (newMessage: INewMessage) => {
            setMessages((msgs) => [...msgs, newMessage])
        })

        return () => {
            socket.removeAllListeners();
            socket.disconnect();
        };
    }, []);

    return [messages, addMessage, socketId]
}

export default useSocketConnection
