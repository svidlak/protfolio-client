import React, {useEffect, useState} from "react";
import request from "../../utils/request";
import IUser from "../../interfaces/IUser";
import UserListItem from "./UserListItem";
import {Empty, Row} from "antd";
import {message, Button} from "antd";
import SaveUserItem from "./SaveUserItem";

const UsersList: React.FC = () => {
    const [usersList, setUsersList] = useState<IUser[]>([])
    const [shouldSave, setShouldSave] = useState<boolean>(false)

    useEffect(()=> {
        handleGetUsers()
    }, [])

    const handleGetUsers = () => {
        request
            .getEntities()
            .then( (users: IUser[]) => {
                setUsersList(users.filter(user => user.isActive))
            }).catch(() => {
                message.error('Something went wrong')
            })
    }

    return(
        <>
            <Button
                type="primary"
                style={{display: 'block'}}
                onClick={()=>setShouldSave(true)}
            >Create User</Button>
            <SaveUserItem
                getUsers={handleGetUsers}
                shouldSave={shouldSave}
                setShouldSave={setShouldSave}
            />
            <Row gutter={16}>
                {
                    !usersList.length ? <Empty /> : usersList.map( (user, idx) => {
                        return(
                            <UserListItem
                                user={user}
                                key={user.name + user.lastName + idx}
                                getUsers={handleGetUsers}
                            />
                        )
                    })
                }
            </Row>
        </>
    )
}

export default UsersList
