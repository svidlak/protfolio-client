import React, {useState} from "react";
import {message, Modal} from "antd";
import request from "../../utils/request";

const DeleteUserItem: React.FC<any> = ({ user, getUsers, shouldDelete, setShouldDelete}: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleUserDelete = () => {
        setIsLoading(true)
        request
            .deleteEntity(user.id)
            .then(()=> {
                message.success('User deleted')
                setIsLoading(false)
                getUsers()
            })
            .catch(() => {
                setIsLoading(false)
                message.error('Something went wrong')
            })
    }

    return (
        <Modal
            title={'Delete item'}
            open={shouldDelete}
            onOk={handleUserDelete}
            confirmLoading={isLoading}
            onCancel={()=> setShouldDelete(false)}
        >
            Are you sure you want to delete the user?
        </Modal>
    )
}

export default DeleteUserItem
