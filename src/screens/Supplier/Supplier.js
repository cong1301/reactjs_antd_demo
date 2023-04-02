import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from '../../services/Api'
import ImgCrop from 'antd-img-crop';
import { Col, Row, Form, Upload, Breadcrumb, Image } from "antd";
import { Title, FormItem, LayoutImage, ButtonSave, RowStyle } from './styles';
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import { ErrorType } from '../../constant/ErrorType';
import { InputStyle, TextAreaStyle } from '../../Styles/InputStyles';

const JWT_HEADER = () => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
})

export default function Supplier() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [images, setImages] = useState("");

    const handleChangeLogo = (info) => {
        let fileList = [...info.fileList];
        let urlList = [];
        const { status } = info.file;
        if (status === "done") {
            fileList.map((file) => {
                if (file.response) {
                    file.url = file.response.image;
                    urlList.push(file.url?.toString());
                }
                return file;
            });
            setImages(urlList.toString());
        } else if (status === "error") {
        }
    };

    const onSave = (value) => {
        const body = {
            image: images,
            name: value.name,
            link: value.link,
            phone: value.phone,
            email: value.email,
            address: value.address,
        };
        console.log("body", body)
    }

    return (
        <>
            <Row span={24}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={"/"} > <HomeOutlined /> </Link>
                    </Breadcrumb.Item>
                    <Title> <b>Thông tin liên hệ</b> </Title>
                </Breadcrumb>
            </Row>

            <RowStyle span={24}>
                <Col xs={0} sm={0} md={1} lg={2} xl={2} xxl={2} />
                <Col xs={24} sm={24} md={22} lg={18} xl={18} xxl={18}>
                    <Form
                        form={form}
                        onFinish={onSave}
                        autoComplete="off"
                        labelCol={{ xs: 24, sm: 11, md: 8, lg: 6, xl: 6, xxl: 4 }}
                        wrapperCol={{ xs: 24, sm: 13, md: 16, lg: 18, xl: 18, xxl: 20 }}
                    >
                        <Row span={24}>
                            <Col span={24}>
                                <FormItem label="Logo"  >
                                    <ImgCrop rotate>
                                        <Upload
                                            name="file"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action={`${process.env.REACT_APP_API_KEY}/image/upload`}
                                            headers={JWT_HEADER}
                                            method="POST"
                                            onChange={handleChangeLogo}
                                        >
                                            {images ? (
                                                <Image
                                                    className='imgLogo'
                                                    src={`${process.env.REACT_APP_API_KEY}${images}`}
                                                    alt="avatar"
                                                    preview={false}
                                                />
                                            ) : (
                                                <div>
                                                    <PlusOutlined />
                                                    <LayoutImage >Tải ảnh</LayoutImage>
                                                </div>
                                            )}
                                        </Upload>
                                    </ImgCrop>
                                </FormItem>

                                <FormItem
                                    label="Tên nhà cung cấp"
                                    name="name"
                                    rules={[{ required: true, message: "Nhập tên nhà cung cấp" }]}
                                >
                                    <InputStyle placeholder="Tên nhà cung cấp" />
                                </FormItem>

                                <FormItem
                                    label="Link web"
                                    name="link"
                                >
                                    <InputStyle placeholder="Link Web" />
                                </FormItem>

                                <FormItem
                                    label="Số điện thoại"
                                    name="phone"
                                    rules={[{ required: true, message: "Nhập số điện thoại" }]}
                                >
                                    <InputStyle placeholder="Số điện thoại" />
                                </FormItem>

                                <FormItem
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: "Nhập Email" }]}
                                >
                                    <InputStyle placeholder="Email" />
                                </FormItem>

                                <FormItem
                                    label="Địa chỉ"
                                    name="address"
                                    rules={[{ required: true, message: "Nhập địa chỉ" }]}
                                >
                                    <TextAreaStyle autoSize placeholder="Địa chỉ" />
                                </FormItem>
                            </Col>

                            <Col span={24}>
                                <ButtonSave type="primary" htmlType="submit" >
                                    Lưu thông tin
                                </ButtonSave>
                            </Col>

                        </Row>
                    </Form>
                </Col>
                <Col xs={0} sm={0} md={1} lg={4} xl={4} xxl={4} />
            </RowStyle>
        </>
    )
}
