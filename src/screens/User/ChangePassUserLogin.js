import React from 'react'
import { Form, Input, message, Modal, notification } from 'antd';
export default function ChangePassUserLogin(props) {
    const { show, handleCancel } = props;
    const [form] = Form.useForm();

    const onChangpass = async (values) => {
        if (values?.newPassword !== values?.checkPassword) {
            message.error('Xác nhận mật khẩu không đúng');
        } else {
            const body = {
                password: values?.checkPassword,
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
            //                 message: `Thất bại`,
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
            visible={show}
            okButtonProps={{ form: 'insPassUser-form', key: 'submit', htmlType: 'submit' }}
            onCancel={handleCancel}
        >
            <Form form={form} hideRequiredMark id='insPassUser-form' name="nest-messages" onFinish={onChangpass} autoComplete="off"
                labelCol={{ span: 24, }}
                wrapperCol={{ span: 24, }}
            >
                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Mật khẩu mới"
                    name="newPassword"
                    rules={[{ required: true, message: 'Nhập mật khẩu mới' }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu mới" />
                </Form.Item>
                <Form.Item
                    label="Xác nhận mật khẩu"
                    style={{ fontWeight: 'bold' }}
                    name="checkPassword"
                    rules={[{ required: true, message: 'Nhập lại mật khẩu mới' }]}
                >
                    <Input.Password placeholder="Xác nhận mật khẩu mới" />
                </Form.Item>
            </Form>
        </Modal>
    )
}
