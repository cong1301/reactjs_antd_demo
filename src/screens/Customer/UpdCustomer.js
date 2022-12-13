import React, { useState, useEffect } from "react";
import { Form, Input, Modal, notification } from "antd";
import { useDispatch } from "react-redux";

export default function UpdCustomer(props) {

    const { TextArea } = Input;
    const dispatch = useDispatch();
    const { show, handleCancel } = props;
    const [form] = Form.useForm();

    const handleCancelUpd = () => {
        handleCancel();
        form.setFieldsValue({
            name: "",
            date: "",
            email: "",
            phone: "",
            address: "",
        });
    };

    const onUpd = (values) => {
        const body = {
            name: values?.name,
            date: values?.date,
            email: values?.address,
            phone: values?.phone,
            address: values?.address
        };
        console.log("body", body)
        handleCancelUpd()
        // dispatch(
        //     updStaff(body, {
        //         onSuccess: (message) => {
        //             notification.success({
        //                 message: `${message?.data?.data?.message}`,
        //             });
        //             handleCancelIns()
        //         },
        //         onError: (message) => {
        //             notification.error({
        //                 message: `${message?.data?.message}`,
        //             })
        //         }

        //     })
        // );
    }

    return (
        <Modal
            title={`Sửa thông tin khách hàng`}
            visible={show}
            onCancel={handleCancelUpd}
            okButtonProps={{ form: 'updCustomer', key: 'submit', htmlType: 'submit' }}
        >
            <Form form={form} id='updCustomer' onFinish={onUpd} autoComplete="off" hideRequiredMark
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>

                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Họ và tên"
                    name="name"
                    rules={[{ required: true, message: 'Nhập họ và tên' }]}
                >
                    <Input placeholder="Nhập họ và tên" />
                </Form.Item>
                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Ngày sinh"
                    name="date"
                    rules={[{ required: true, message: 'Nhập ngày sinh' }]}
                >
                    <Input placeholder="Nhập ngày sinh" />
                </Form.Item>
                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Nhập Email' }]}
                >
                    <Input placeholder="Nhập Email" />
                </Form.Item>
                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Số điện thoại"
                    name="phone"
                    rules={[{ required: true, message: 'Nhập số điện thoại' }]}
                >
                    <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Địa chỉ"
                    name="address"
                    rules={[{ required: true, message: 'Nhập địa chỉ' }]}
                >
                    <TextArea autoSize placeholder="Nhập địa chỉ" />
                </Form.Item>
            </Form>
        </Modal>
    )
}
