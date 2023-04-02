import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserDropdown from "../../components/UserDropdown/UserDropdown";
import { reset } from "../../reducers/authReducer"
import ChangePassUserLogin from '../Auth/ChangePassWord/ChangePassUserLogin';
import styled from 'styled-components';
import { Avatar, Col, Layout, Modal, Row } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, AlignCenterOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function DefaultHeader({ toggle, collapsed }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const avatar = 'https://cdn-icons-png.flaticon.com/512/4944/4944197.png'

  const [showchangePass, setShowchangePass] = useState({ show: false })

  const onCancelShow = () => {
    setShowchangePass({ show: false });
  };

  const logOut = () => {
    Modal.confirm({
      title: 'Bạn muốn đăng xuất?',
      okText: 'OK',
      cancelText: 'Cancel',
      onOk: () => {
        localStorage.clear();
        dispatch(reset());
        history.replace('/login')
      },
    })
  }

  const onChangePassword = () => {
    setShowchangePass({ show: true });
  }

  return (
    <HeaderStyle>
      <Row xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} span={6}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger custom-ic",
            onClick: toggle,
          })}
        </Col>

        <Col span={18}>
          <Row span={24}>
            <Col xs={11} sm={13} md={16} lg={17} xl={18} xxl={21} />
            <Col xs={8} sm={7} md={5} lg={4} xl={3} xxl={1}>
              <HoverNoti> </HoverNoti>
            </Col>
            <Col xs={5} sm={4} md={3} lg={3} xl={3} xxl={2} >
              <HoverUser>
                <UserDropdown logOut={logOut} onChangePassword={onChangePassword}>
                  <Avatar src={avatar} />
                </UserDropdown>
              </HoverUser>
            </Col>
          </Row>
        </Col>
      </Row>

      <ChangePassUserLogin
        show={showchangePass.show}
        handleCancel={onCancelShow}
      />
    </HeaderStyle >
  )
}
const HeaderStyle = styled(Header)`
  padding: 0;
  background-color: #FFFFFF;
  border-bottom: 1px solid #D9D9D9;
`;

const HoverUser = styled.div`
  border-radius: 25px;
  text-align: center;
  margin-left: 20%;
`;

const HoverNoti = styled.div`
  cursor: pointer;
  text-align: center;
  width: 25%;
  margin-left: 60%;
  border-radius: 25px;
`;
