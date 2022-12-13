import React, { useState, useEffect } from "react";
import { Form, Input, Modal, notification } from "antd";
import { useDispatch } from "react-redux";
const InsSupplier = (props) => {
    const { TextArea } = Input;
    const dispatch = useDispatch();
    const { show, handleCancel } = props;
    const [form] = Form.useForm();

    const handleCancelIns = () => {
        handleCancel();
        form.setFieldsValue({
            code: "",
            name: "",
            address: "",
            phone: "",
        });
    };

    const onIns = (values) => {
        const body = {
            code: values?.code,
            name: values?.name,
            address: values?.address,
            phone: values?.phone
        };
        console.log("body", body)
        handleCancelIns()
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
            title={`THÊM NHÀ CUNG CẤP`}
            visible={show}
            onCancel={handleCancelIns}
            okButtonProps={{ form: 'insSupplier', key: 'submit', htmlType: 'submit' }}
        >
            <Form form={form} id='insSupplier' onFinish={onIns} autoComplete="off" hideRequiredMark
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>

                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Mã nhà cung cấp"
                    name="code"
                    rules={[{ required: true, message: 'Nhập mã nhà cung cấp' }]}
                >
                    <Input placeholder="Nhập mã nhà cung cấp" />
                </Form.Item>
                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Tên nhà cung cấp"
                    name="name"
                    rules={[{ required: true, message: 'Nhập tên nhà cung cấp' }]}
                >
                    <Input placeholder="Nhập tên nhà cung cấp" />
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
export default InsSupplier
