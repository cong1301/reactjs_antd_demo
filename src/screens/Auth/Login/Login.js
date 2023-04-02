import React, { useRef } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../reducers/authReducer";
import { Col, Form, Row, Image, notification } from "antd";
import { CardStyle, InputUserName, InputPassWord, ButtonLogin, Line } from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const inputRef = useRef()

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
          if (err.status === 400 && err.data.error === "Bad credentials") {
            notification.error({
              message: `Sai thông tin đăng nhập`,
            })
            inputRef.current.focus()
            form.setFieldsValue({
              username: "",
              password: "",
            });
          }
        }
      })
    );
  };

  return token ? (
    <Redirect to="/" />
  ) : (
    <>
      <Row span={24} >
        <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={3} />
        <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={18} >
          <Row span={24} style={{ paddingTop: 50, paddingBottom: 50 }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} >
              <div style={{ marginTop: 110, textAlign: 'center' }}>
                {/* <img width="80%" height="180" src={logo} /> */}
              </div>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10} >
              <CardStyle bordered={false} bodyStyle={{ backgroundColor: "#D9E3F0", borderRadius: 10 }}  >

                <Form
                  form={form}
                  onFinish={onLogin}
                  autoComplete="off"
                >

                  <Form.Item name="username" rules={[{ required: true, message: "Nhập tài khoản" }]}>
                    <InputUserName ref={inputRef} placeholder="Tài khoản" />
                  </Form.Item>

                  <Form.Item name="password" rules={[{ required: true, message: "Nhập mật khẩu" }]}  >
                    <InputPassWord placeholder="Mật khẩu" />
                  </Form.Item>

                  <Form.Item>
                    <ButtonLogin type="primary" htmlType="submit" >
                      Đăng nhập
                    </ButtonLogin>
                  </Form.Item>

                  <Line />
                </Form>
              </CardStyle>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={2} />
          </Row>
        </Col>
        <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={3} />
      </Row >
    </>
  );
};
export default Login;
