import React, { useState, useEffect } from "react";
import { Form, Input, Modal, notification } from "antd";
import { useDispatch } from "react-redux";

const UpdSupplier = (props) => {
    const { TextArea } = Input;
    const dispatch = useDispatch();
    const { show, id, handleCancel } = props;
    const [form] = Form.useForm();

    useEffect(() => {

    }, []);

    const onUpd = (values) => {
        const body = {
            code: values?.code,
            name: values?.name,
            address: values?.address,
            phone: values?.phone
        };
        console.log("body", body)
        handleCancel()
        // dispatch(
        //     updStaff(body, {
        //         onSuccess: (message) => {
        //             notification.success({
        //                 message: `${message?.data?.data?.message}`,
        //             });
        //             handleCancel()
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
            title={`CẬP NHẬT NHÀ CUNG CẤP`}
            visible={show}
            onCancel={handleCancel}
            okButtonProps={{ form: 'updSupplier', key: 'submit', htmlType: 'submit' }}
            width={"30%"}
            style={{ borderRadius: '10px' }}
        >
            <Form form={form} id='updSupplier' onFinish={onUpd} autoComplete="off" hideRequiredMark
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>

                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Mã nhà cung cấp"
                    name="code"
                    rules={[{ required: true, message: 'Nhập mã nhà cung cấp' }]}
                >
                    <Input style={{ borderRadius: 5, border: '1px solid #37B59D' }} placeholder="Nhập mã nhà cung cấp" />
                </Form.Item>
                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Tên nhà cung cấp"
                    name="name"
                    rules={[{ required: true, message: 'Nhập tên nhà cung cấp' }]}
                >
                    <Input style={{ borderRadius: 5, border: '1px solid #37B59D' }} placeholder="Nhập tên nhà cung cấp" />
                </Form.Item>
                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Số điện thoại"
                    name="phone"
                    rules={[{ required: true, message: 'Nhập số điện thoại' }]}
                >
                    <Input style={{ borderRadius: 5, border: '1px solid #37B59D' }} placeholder="Nhập số điện thoại" />
                </Form.Item>
                <Form.Item
                    style={{ fontWeight: 'bold' }}
                    label="Địa chỉ"
                    name="address"
                    rules={[{ required: true, message: 'Nhập địa chỉ' }]}
                >
                    <TextArea autoSize style={{ borderRadius: 5, border: '1px solid #37B59D' }} placeholder="Nhập địa chỉ" />
                </Form.Item>
            </Form>
        </Modal>
    )
}
export default UpdSupplier
