import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, Input } from "antd";

export default function InfoUser() {
    return (
        <Form layout="vertical" hideRequiredMark >
            <Row xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
                <Col span={8}> </Col>
                <Col span={8}>
                    <h1 style={{ textAlign: 'center', fontSize: '1.5em', fontWeight: 'bold', }}>Thông tin tài khoản</h1>
                </Col>
                <Col span={8}> </Col>
            </Row>
            <Row xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} span={8}>
                    <h3 style={{ textAlign: "center", marginBottom: "20px", fontWeight: 'bold' }}>Hình đại diện</h3>
                    <Row style={{ justifyContent: "center" }}>
                        <Form.Item name="image">
                            <img
                                src={'https://www.w3schools.com/howto/img_avatar.png'}
                                style={{
                                    height: 200,
                                    width: 200,
                                    borderRadius: "50%",
                                }}
                                className="image-shop"
                                alt="imageshop"
                            />
                        </Form.Item>
                    </Row>
                    <Row style={{ justifyContent: "center", padding: "20px" }}>
                        {/* <Upload
                            showUploadList={false}
                        // action={`${API_URL}/upload/shop/logo`}
                        // headers={HEADERS.JWT_HEADER()}
                        // beforeUpload={beforeUpload}
                        // onChange={this.handleChange}
                        >
                            <Button
                                style={{
                                    backgroundColor: '#26C7BE',
                                    borderRadius: 5,
                                    border: '1px solid #26C7BE',
                                    marginRight: 8,
                                    color: 'white',

                                }}
                                icon={<UploadOutlined />}>Chọn ảnh</Button>
                        </Upload> */}
                    </Row>
                </Col>

                <Col xs={24} sm={24} md={24} lg={16} xl={16} span={16}>
                    <Row xs={24} sm={24} md={24} lg={16} xl={16} gutter={16}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
                            <Form.Item
                                label="Họ và tên"
                                name="name"
                                style={{ fontWeight: 'bold' }}
                            >
                                <Input
                                    placeholder="Nhập Họ và tên"
                                    style={{ padding: '10px 20px', borderRadius: 5, marginTop: 10, border: '1px solid #37B59D', color: 'black' }}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
                            <Form.Item
                                disabled
                                label="Tài khoản"
                                name="username"
                                style={{ fontWeight: 'bold' }}
                            >
                                <Input
                                    style={{ padding: '10px 20px', borderRadius: 5, marginTop: 10, border: '1px solid #37B59D', color: 'black' }}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
                            <Form.Item
                                label="Số điện thoại"
                                name="phone"
                                style={{ fontWeight: 'bold' }}
                            >
                                <Input
                                    placeholder="Nhập số điện thoại"
                                    style={{ padding: '10px 20px', borderRadius: 5, marginTop: 10, border: '1px solid #37B59D', color: 'black' }}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
                            <Form.Item
                                label="Địa chỉ"
                                name="address"
                                style={{ fontWeight: 'bold' }}
                            >
                                <Input
                                    placeholder="Nhập địa chỉ"
                                    style={{ padding: '10px 20px', borderRadius: 5, marginTop: 10, border: '1px solid #37B59D', color: 'black' }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row xs={24} sm={24} md={24} lg={8} xl={8} gutter={8}>
                        <Col span={24}>
                            <Button
                                style={{
                                    backgroundColor: '#37B59D',
                                    borderRadius: 5,
                                    border: "#37B59D",
                                    color: 'white',
                                    float: 'right',
                                    marginTop: '75px'
                                }}
                                type="primary"
                                htmlType="submit"
                            >
                                Lưu thông tin
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    )
}
