import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, Input } from "antd";
import logo from '../../assets/Kong.jpg'
export default function InfoUser() {

    return (
        <Form layout="vertical" hideRequiredMark >
            <Row xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} span={8}>
                    <Row style={{ justifyContent: "center" }}>
                        <Form.Item name="image">
                            <img
                                src={logo}
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
                                    style={{ padding: '10px 20px', marginTop: 10, color: 'black' }}
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
                                    placeholder="Nhập Tài khoản"
                                    style={{ padding: '10px 20px', marginTop: 10, color: 'black' }}
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
                                    style={{ padding: '10px 20px', marginTop: 10, color: 'black' }}
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
                                    style={{ padding: '10px 20px', marginTop: 10, color: 'black' }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row xs={24} sm={24} md={24} lg={8} xl={8} gutter={8}>
                        <Col span={24}>
                            <Button
                                style={{ float: 'right', marginTop: '75px' }}
                                type="primary"
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
