import React from 'react'
import { Row, Col } from 'antd';
import { DatePickerStyle } from './styles';

export default function FilterTime({ valueStart, valueEnd, onChangeTimeStart, onChangeTimeEnd, format }) {
  return (
    <>
      <Row span={24}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <DatePickerStyle
            allowClear={false}
            onChange={onChangeTimeStart}
            placeholder='Từ ngày'
            format={format}
            value={valueStart}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <DatePickerStyle
            allowClear={false}
            onChange={onChangeTimeEnd}
            placeholder='Đến ngày'
            format={format}
            value={valueEnd}
          />
        </Col>
      </Row>
    </>
  )
}
