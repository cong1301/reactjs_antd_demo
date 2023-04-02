import React from 'react'
import { FilterOutlined } from "@ant-design/icons";
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';

export default function Filter({ onClickFilter }) {
  return (
    <RowStyle span={24}>
      <Col span={24} >
        <Button
          type="primary"
          onClick={onClickFilter}
        >
          <FilterOutlined />Bộ lọc
        </Button>
      </Col>
    </RowStyle>
  )
}

const RowStyle = styled(Row)`
  padding-bottom: 10px;
`
