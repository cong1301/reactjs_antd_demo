import React from 'react'
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
export default function CustomSreach({ onClick, onChange, value }) {
    return (
        <>
            <Input
                style={{ border: '1px solid rgb(17, 124, 114)', width: '60%', borderRadius: '5px' }}
                placeholder="Tìm kiếm"
                onChange={onChange}
                value={value}
            />
            <Button
                style={{
                    backgroundColor: 'rgb(17, 124, 114)',
                    borderRadius: 5,
                    border: "rgb(17, 124, 114)",
                    marginLeft: "6px",
                }}
                type="primary"
                onClick={onClick}
            >
                <SearchOutlined />
            </Button>
        </>
    )
}
