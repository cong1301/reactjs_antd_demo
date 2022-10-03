import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, } from '@ant-design/icons';
import bkbg from "../../../assets/reactjs1.jpg";
import "./Register.css";

export default function Register() {

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onRegister = (values) => {

    };

    return (
        <>
            <div style={{ backgroundImage: "url(" + bkbg + ")", height: "100%", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <Row>
                    <Col span={14}></Col>
                    <Col span={10}>
                        <div class="container-form-layout">
                            <Form
                                form={form}
                                hideRequiredMark
                                id="insUser-form"
                                name="normal_Resgiter"
                                className="resgiter-form"
                                onFinish={onRegister}
                                autoComplete="off"
                            >
                                <Card
                                    bordered={false}
                                    bodyStyle={{ backgroundColor: "#ffffff", borderRadius: 20 }}
                                    style={{
                                        maxWidth: "75%",
                                        display: "block",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        background: "white",
                                        borderRadius: "50px",
                                        boxShadow:
                                            "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                    }}

                                >
                                    <div>
                                        <h1 style={{ textAlign: "center" }}>
                                            <b>Đăng ký</b>
                                        </h1>
                                    </div>

                                    <Form.Item
                                        style={{ fontWeight: "bold" }}
                                        name="name"
                                        rules={[{ required: true, message: "Nhập họ và tên" }]}
                                    >
                                        <Input
                                            style={{ padding: "10px 20px", borderRadius: 6 }}
                                            placeholder="Họ và tên"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ fontWeight: "bold" }}
                                        name="phone"
                                        rules={[{ required: true, message: "Nhập số điện thoại" }]}
                                    >
                                        <Input
                                            style={{ padding: "10px 20px", borderRadius: 6 }}
                                            placeholder="Số điện thoại"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ fontWeight: "bold" }}
                                        name="username"
                                        rules={[{ required: true, message: "Nhập tên đăng nhập" }]}
                                    >
                                        <Input
                                            style={{ padding: "10px 20px", borderRadius: 6 }}
                                            placeholder="Tên đăng nhập"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ fontWeight: "bold" }}
                                        name="password"
                                        rules={[{ required: true, message: "Nhập  mật khẩu" }]}
                                    >
                                        <Input.Password
                                            style={{ padding: "10px 20px", borderRadius: 6 }}
                                            placeholder="Mật khẩu"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            style={{
                                                width: "100%",
                                                height: "5vh",
                                                borderRadius: 5,
                                                backgroundColor: "#42b72a",
                                                border: "none",
                                                fontWeight: "bold",
                                                fontSize: "1.3em",
                                            }}
                                        >
                                            Đăng ký
                                        </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Link to={"/login"}>
                                            <h3 style={{ color: '#1877f2', }}><ArrowLeftOutlined /> Quay lại </h3>
                                        </Link>
                                    </Form.Item>
                                </Card>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
