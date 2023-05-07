import { io } from 'socket.io-client';

const URL = 'http://localhost:8080/';

class Socket {
    public socket;

    constructor(pathName: string) {
        this.socket = io(`${URL}${pathName}`, {autoConnect: false})
    }

    connected() {
        return this.socket.connected
    }

    get getSocket() {
        return this.socket;
    }
}

export default Socket
