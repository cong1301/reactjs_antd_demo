import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Row } from 'antd'
import { Title } from './styles'
import { HomeOutlined } from "@ant-design/icons";

export default function Statistical() {
  return (
    <>
      <Row span={24}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"} > <HomeOutlined /> </Link>
          </Breadcrumb.Item>
          <Title> <b>Thống kê</b> </Title>
        </Breadcrumb>
      </Row>
    </>
  )
}
