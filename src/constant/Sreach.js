import React from 'react'
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
export default function CustomSreach({ onClick, onChange, value }) {
    return (
        <>
            <Input
                style={{ width: '60%' }}
                placeholder="Tìm kiếm"
                onChange={onChange}
                value={value}
            />
            <Button
                style={{ marginLeft: "6px" }}
                type="primary"
                onClick={onClick}
            >
                <SearchOutlined />
            </Button>
        </>
    )
}
