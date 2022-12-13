import React, { useState } from 'react'
import { Layout, Menu, Image } from 'antd';
import { Link } from "react-router-dom";
import { AndroidOutlined, TeamOutlined, HomeOutlined, UserAddOutlined, FileSearchOutlined } from "@ant-design/icons";
import './DefaultLayout.css'
const { Sider } = Layout;

export default function DefaultSidebar({ collapsed }) {

  const getItem = (label, key, icon, children) => {
    return { label, key, icon, children };
  }

  const dataMenu = [
    getItem(<Link style={{ color: "black" }} to={"/"}> Nhà cung cấp</Link>, "1", <HomeOutlined className="icon-color" />),
    getItem(<Link style={{ color: "black" }} to={"/staff"}> Nhân viên</Link>, "2", <UserAddOutlined className="icon-color" />),
    getItem(<Link style={{ color: "black" }} to={"/customer"}>Khách hàng</Link>, "3", <TeamOutlined className="icon-color" />),
  ]

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        mode="inline"
        items={dataMenu}
      />

    </Sider>
  )
}
