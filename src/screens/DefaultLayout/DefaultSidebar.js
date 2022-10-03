import React, { useState } from 'react'
import { Layout, Menu, Image } from 'antd';
import { Link } from "react-router-dom";
import {
  AndroidOutlined, TeamOutlined, HomeOutlined, UserAddOutlined, FileSearchOutlined,
} from "@ant-design/icons";
import './DefaultLayout.css'
const { Sider } = Layout;



export default function DefaultSidebar({ collapsed }) {

  const getItem = (label, key, icon, children) => {
    return {
      label,
      key,
      icon,
      children,
    };
  }
  const dataMenu = [
    getItem(<Link style={{ color: "#FFFFFF" }} to={"/"}> Nhà cung cấp</Link>, "1", <HomeOutlined className="icon-color" />),
    getItem(<Link style={{ color: "#FFFFFF" }} to={"/"}> Đặt chỗ</Link>, "2", <AndroidOutlined className="icon-color" />),
    getItem(<Link style={{ color: "#FFFFFF" }} to={"/"}> Dịch vụ</Link>, "3", <AndroidOutlined className="icon-color" />),
    getItem(<Link style={{ color: "#FFFFFF" }} to={"/"}> Hóa đơn</Link>, "4", <FileSearchOutlined className="icon-color" />),
    getItem(<Link style={{ color: "#FFFFFF" }} to={"/staff"}> Nhân viên</Link>, "5", <UserAddOutlined className="icon-color" />),
    getItem(<Link style={{ color: "#FFFFFF" }} to={"/customer"}>Khách hàng</Link>, "6", <TeamOutlined className="icon-color" />),
  ]

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        items={dataMenu}
      />

    </Sider>
  )
}
