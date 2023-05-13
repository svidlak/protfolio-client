import axios, {Axios} from 'axios';
import IUser from "../interfaces/IUser";

class Request {
    private request: Axios
    private authToken: string | null

    constructor() {
        this.request = axios.create({
            baseURL: 'http://localhost:8080/api/v1',
            timeout: 5000
        })
        this.authToken = null
    }


    public async getAuthKey(): Promise<string> {
        const {data} = await this.request.get('/auth')
        this.authToken = data
        this.request.defaults.headers.common['authorization'] = this.authToken
        return data
    }

    public async saveEntity(user: IUser): Promise<IUser>{
        const {data} = await this.request.post('/users', user)
        return data;
    }

    public async updateEntity(user: IUser, id: string): Promise<IUser>{
        const {data} = await this.request.put(`/users/${id}`, user)
        return data;
    }

    public async getEntities(): Promise<IUser[]>{
        const {data} = await this.request.get('/users')
        return data;
    }

    public async deleteEntity(id: string): Promise<void> {
        await this.request.delete(`/users/${id}`)
    }
}

const request = new Request()

export default request
