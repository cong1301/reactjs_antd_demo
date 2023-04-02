import React from 'react'
import { useDispatch } from "react-redux";
import { Form, Input, message, Modal, notification } from 'antd';
import styled from 'styled-components';

export default function ChangePassUserLogin(props) {
    const dispatch = useDispatch();

    const { show, handleCancel } = props;
    const [form] = Form.useForm();

    const onChangpass = async (values) => {
        if (values?.newPassword !== values?.checkPassword) {
            message.error('Xác nhận mật khẩu không đúng');
        } else {
            const body = {
                currentPassword: values?.currentPassword,
                newPassword: values?.newPassword,
            };
            // dispatch(
            //     changPassLogin(body, {
            //         onSuccess: () => {
            //             notification.success({
            //                 message: `Đổi mật khẩu thành công`,
            //             });
            //             onClose()
            //         },
            //         onError: () =>
            //             notification.error({
            //                 message: `Đổi mật khẩu thất bại - mật khẩu cũ không đúng`,
            //             })
            //     })
            // );
        }
    };

    const onClose = () => {
        handleCancel()
        form.setFieldsValue({
            newPassword: "",
            checkPassword: "",
        });
    }
    return (
        <Modal
            title={`Đổi mật khẩu`}
            open={show}
            okButtonProps={{ form: 'insPassUser-form', key: 'submit', htmlType: 'submit' }}
            onCancel={onClose}
        >
            <Form form={form} id='insPassUser-form' name="nest-messages" onFinish={onChangpass} autoComplete="off"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>

                <FormItem
                    label="Mật khẩu mới"
                    name="newPassword"
                    rules={[{ required: true, message: 'Nhập mật khẩu mới' }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu mới" />
                </FormItem>

                <FormItem
                    label="Xác nhận mật khẩu"
                    name="checkPassword"
                    rules={[{ required: true, message: 'Nhập lại mật khẩu mới' }]}
                >
                    <Input.Password placeholder="Xác nhận mật khẩu mới" />
                </FormItem>
            </Form>
        </Modal>
    )
}

const FormItem = styled(Form.Item)`
    font-weight: 500;
`;

