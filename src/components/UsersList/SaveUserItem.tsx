import React, {useRef, useState} from "react";
import {Form, Input, Modal, message} from "antd";
import request from "../../utils/request";

const SaveUserItem: React.FC<any> = ({ user, getUsers, shouldSave, setShouldSave }: any)=> {
    const [isFormValid, setIsFormValid] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const formRef = useRef<any | null>(null)


    const handleUserSave = () => {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const {name, lastName} = formRef?.current?.getFieldsValue(true)
        const updatedEntity = {
            ...user,
            name,
            lastName
        }

        const promise = updatedEntity.id ?
            request.updateEntity(updatedEntity, updatedEntity.id) : request.saveEntity(updatedEntity)

        promise.then(()=> {
            message.success('User saved')
            setIsLoading(false)
            formRef?.current?.resetFields()
            getUsers()
            setShouldSave(false)
        }).catch(() => {
            setIsLoading(false)
            message.error('Something went wrong')
        })

    }
    return (
        <Modal
            title={'Please Create User'}
            open={shouldSave}
            okButtonProps={{ disabled: !isFormValid }}
            onOk={handleUserSave}
            afterOpenChange={()=> {
                if(shouldSave && user) {
                    formRef?.current?.setFieldsValue(user)
                    const formValues = formRef?.current?.getFieldsValue(true)
                    setIsFormValid((formValues?.name?.length > 2 && formValues?.lastName?.length > 2))
                }
            }}
            confirmLoading={isLoading}
            onCancel={()=> setShouldSave(false)}
        >
            <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
                ref={formRef}
                onChange={()=> {
                    const formValues = formRef?.current?.getFieldsValue(true)
                    setIsFormValid((formValues?.name?.length > 2 && formValues?.lastName?.length > 2))
                }}
            >
                <Form.Item
                    label="First Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your First Name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your Last Name!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default SaveUserItem
