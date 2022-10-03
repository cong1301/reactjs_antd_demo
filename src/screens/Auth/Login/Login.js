import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Input, Row, message, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../../reducers/authReducer";
import bkbg from "../../../assets/reactjs1.jpg";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const token = useSelector((store) => store.authReducer.token);

  const onLogin = (values) => {
    const body = {
      username: values?.username,
      password: values?.password,
    };
    dispatch(
      login(body, {
        onError: (err) => {
          if (err.status === 400 && err.data.error === "Bad credentials")
            message.error("Sai thông tin đăng nhập!");
        },
      })
    );
  };

  return token ? (
    <Redirect to="/" />
  ) : (
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
                onFinish={onLogin}
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
                      <b>Đăng nhập</b>
                    </h1>
                  </div>

                  <Form.Item
                    style={{ fontWeight: "bold" }}
                    name="username"
                    rules={[{ required: true, message: "Nhập tên đăng nhập" }]}
                  >
                    <Input
                      style={{ padding: "10px 20px", borderRadius: 6 }}
                      placeholder="Nhập tên đăng nhập"
                    />
                  </Form.Item>

                  <Form.Item
                    style={{ fontWeight: "bold" }}
                    name="password"
                    rules={[{ required: true, message: "Nhập mật khẩu" }]}
                  >
                    <Input.Password
                      style={{ padding: "10px 20px", borderRadius: 6 }}
                      placeholder="Nhập mật khẩu"
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
                        backgroundColor: "#1877f2",
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "1.3em",
                      }}
                    >
                      Đăng Nhập
                    </Button>
                  </Form.Item>
                  <hr></hr>
                  <br></br>
                  <Form.Item>
                    <Button
                      type="primary"
                      style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', height: '5vh', borderRadius: 5, backgroundColor: '#42b72a', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '1.3em' }}
                    >
                      <Link to={"/register"}>
                        {" "}
                        <span style={{}}>
                          {" "}
                          Tạo tài khoản mới{" "}
                        </span>
                      </Link>
                    </Button>
                  </Form.Item>
                </Card>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Login;
