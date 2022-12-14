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
                                            <b>????ng k??</b>
                                        </h1>
                                    </div>

                                    <Form.Item
                                        style={{ fontWeight: "bold" }}
                                        name="name"
                                        rules={[{ required: true, message: "Nh???p h??? v?? t??n" }]}
                                    >
                                        <Input
                                            style={{ padding: "10px 20px", borderRadius: 6 }}
                                            placeholder="H??? v?? t??n"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ fontWeight: "bold" }}
                                        name="phone"
                                        rules={[{ required: true, message: "Nh???p s??? ??i???n tho???i" }]}
                                    >
                                        <Input
                                            style={{ padding: "10px 20px", borderRadius: 6 }}
                                            placeholder="S??? ??i???n tho???i"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ fontWeight: "bold" }}
                                        name="username"
                                        rules={[{ required: true, message: "Nh???p t??n ????ng nh???p" }]}
                                    >
                                        <Input
                                            style={{ padding: "10px 20px", borderRadius: 6 }}
                                            placeholder="T??n ????ng nh???p"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        style={{ fontWeight: "bold" }}
                                        name="password"
                                        rules={[{ required: true, message: "Nh???p  m???t kh???u" }]}
                                    >
                                        <Input.Password
                                            style={{ padding: "10px 20px", borderRadius: 6 }}
                                            placeholder="M???t kh???u"
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
                                            ????ng k??
                                        </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Link to={"/login"}>
                                            <h3 style={{ color: '#1877f2', }}><ArrowLeftOutlined /> Quay l???i </h3>
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
