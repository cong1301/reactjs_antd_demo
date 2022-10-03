import React, { useState } from 'react'
import { Avatar, Col, Layout, Modal, Row } from 'antd';
import './DefaultLayout.css'
import UserDropdown from "../../components/UserDropdown";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../reducers/authReducer"
import ChangePassUserLogin from '../User/ChangePassUserLogin';
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
    <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#117C72' }}>

      <Row xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
        <Col xs={12} sm={12} md={12} lg={8} xl={8} span={8}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger custom-ic",
            onClick: toggle,
          })}
        </Col>
        <Col xs={0} sm={0} md={0} lg={8} xl={8} span={8}></Col>
        <Col xs={0} sm={0} md={0} lg={2} xl={2} span={2} ></Col>
        <Col xs={0} sm={0} md={0} lg={3} xl={3} span={3} >
          {/* <div className="hoverNoti" style={{ cursor: 'pointer', textAlign: "center", paddingTop: "10px", marginTop: '2px', width: '25%', marginLeft: '60%', border: '1px solid #FFFFFF', borderRadius: '25px' }}>
            <BadgeNote />
          </div> */}
        </Col>
        <Col xs={12} sm={12} md={12} lg={3} xl={3} span={3} >
          <div className="hoverUser" style={{ height: '100%', borderRadius: '25px' }}>
            <UserDropdown onClick={onChangeProfile} logOut={logOut} onChangePassword={onChangePassword}>
              <Avatar
                src={'https://www.w3schools.com/howto/img_avatar.png'}
              />
              <a style={{ paddingLeft: "15px", color: 'white' }}><b>Admin</b></a>
            </UserDropdown>

          </div>
        </Col>
      </Row>

      <ChangePassUserLogin
        show={showchangePass.show}
        handleCancel={onCancelShow}
      />
    </Header >

  )
}
