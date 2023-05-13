import {useEffect, useState} from "react";
import request from "../utils/request";

const useAuthKey = () => {
    const [authKey, setAuthKey] = useState<string | null>(null)

    useEffect(()=> {
        request.getAuthKey().then((authKey: string) => setAuthKey(authKey))
    }, [])

    return authKey
}

export default useAuthKey
