import React, { useState } from 'react'
import { Layout } from 'antd';
import './DefaultLayout.css'

const { Footer } = Layout;

export default function DefaultFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}></Footer>
  )
}
