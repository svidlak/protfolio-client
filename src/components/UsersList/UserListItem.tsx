import React, {useState} from "react";
import {Card, Col, Tooltip} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DeleteUserItem from "./DeleteUserItem";
import SaveUserItem from "./SaveUserItem";

const UserListItem: React.FC<any> = ({user, getUsers}: any) => {
    const [shouldDelete, setShouldDelete] = useState<boolean>(false);
    const [shouldSave, setShouldSave] = useState<boolean>(false)

    return (
        <Col span={8}>
            <Card
                title={`${user.name} ${user.lastName}`}
                bordered={false}
                style={{marginTop: 15}}
                actions={[
                    <Tooltip placement="bottom" title="Edit User">
                        <EditOutlined
                            key="edit"
                            onClick={()=>setShouldSave(true)}
                        />
                    </Tooltip>,
                    <Tooltip placement="bottom" title="Delete User">
                        <DeleteOutlined
                            key="delete"
                            onClick={()=>setShouldDelete(true)}
                        />
                    </Tooltip>
                ]}
            >
                <p><b>User ID:</b> {user.id}</p>
                <p><b>Created on:</b> {user.createdAt}</p>
                <p><b>Last updated on:</b> {user.updatedAt}</p>
            </Card>
            <DeleteUserItem
                user={user}
                getUsers={getUsers}
                shouldDelete={shouldDelete}
                setShouldDelete={setShouldDelete}
            />
            <SaveUserItem
                user={user}
                getUsers={getUsers}
                shouldSave={shouldSave}
                setShouldSave={setShouldSave}
            />
        </Col>
    )
}

export default UserListItem
