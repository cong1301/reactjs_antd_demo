import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { BarChartOutlined, TeamOutlined, DesktopOutlined, HomeOutlined, SolutionOutlined, WalletOutlined, GiftOutlined } from "@ant-design/icons";
import './DefaultLayout.css'
const { Sider } = Layout;

export default function DefaultSidebar({ collapsed }) {

  const getItem = (label, key, icon, children) => {
    return { label, key, icon, children };
  }
  const items = [
    getItem(<Link to={"/"}>Thông tin liên hệ</Link>, "1", <HomeOutlined className="icon-color" />),
    getItem(<Link to={"/customer"}>Khách hàng</Link>, "2", <TeamOutlined className="icon-color" />),
    getItem(<Link to={"/package"}>Gói</Link>, "3", <GiftOutlined className="icon-color" />),
    getItem(<div> Sản phẩm</div>, "4", <DesktopOutlined className="icon-color" />,
      [
        getItem(<Link to={"/productWeb"}>Sản phẩm Web</Link>, "4-1"),
        getItem(<Link to={"/productOrder"}>Sản phẩm Order</Link>, "4-2"),
      ]
    ),
    getItem(<Link to={"/bill"}>Hóa đơn</Link>, "5", <SolutionOutlined className="icon-color" />),
    getItem(<Link to={"/wallet"}>Thanh toán</Link>, "6", <WalletOutlined className="icon-color" />),
    getItem(<Link to={"/statistical"}>Thống kê</Link>, "7", <BarChartOutlined className="icon-color" />),
  ]

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        mode="inline"
        theme="dark"
        items={items}
      />

    </Sider>
  )
}
