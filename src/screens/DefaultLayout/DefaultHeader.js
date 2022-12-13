import React, { useState } from 'react'
import { Avatar, Col, Layout, Modal, Row } from 'antd';
import './DefaultLayout.css'
import UserDropdown from "../../components/UserDropdown";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../reducers/authReducer"
import ChangePassUserLogin from '../User/ChangePassUserLogin';
import logo from '../../assets/Kong.jpg'
const { Header } = Layout;

export default function DefaultHeader({ toggle, collapsed }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const [showchangePass, setShowchangePass] = useState({ show: false })

  const onCancelShow = () => {
    setShowchangePass({ show: false });
  };

  const logOut = () => {
    Modal.confirm({
      title: 'Bạn chắc chắn đăng xuất ?',
      okText: 'Có',
      cancelText: 'Không',
      onOk: () => {
        localStorage.clear();
        dispatch(reset());
        history.replace('/login')
      },
      onCancel() {
      },
    })
  }

  const onChangeProfile = () => {
    history.replace("./infoUser")
  }

  const onChangePassword = () => {
    setShowchangePass({ show: true });
  }


  return (
    <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#D9E3F0' }}>

      <Row xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} span={6}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger custom-ic",
            onClick: toggle,
          })}
        </Col>

        <Col span={18}>
          <Row span={24}>
            <Col span={20} ></Col>
            <Col span={2}>
            </Col>
            <Col span={2} >
              <div className="hoverUser" style={{ borderRadius: '20px', textAlign: "center", marginLeft: '20%' }}>
                <UserDropdown onClick={onChangeProfile} logOut={logOut} onChangePassword={onChangePassword}>
                  <Avatar
                    src={logo}
                  />
                </UserDropdown>
              </div>
            </Col>
          </Row>

        </Col>
      </Row>

      <ChangePassUserLogin
        show={showchangePass.show}
        handleCancel={onCancelShow}
      />
    </Header >
  )
}
