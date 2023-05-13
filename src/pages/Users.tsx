import React from "react";
import UsersList from "../components/UsersList/UsersList";
import {Spin} from "antd";
import useAuthKey from "../hooks/useAuthKey";

const Users: React.FC = () => {
    const authKey = useAuthKey()
    return(
        <div>
            {
                authKey ?  <UsersList /> : <Spin size="large" />
            }
        </div>
    )
}

export default Users
