import React from 'react'
import { Menu, Dropdown } from 'antd'
import { LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

const UserDropdown = (
    {
        onClick,
        logOut,
        onChangePassword,
        children,
    }
) => {
    const menu = (
        <Menu>
            <Menu.Item key="profile" onClick={onClick}>
                <UserOutlined /> Thông tin
            </Menu.Item>
            <Menu.Item key="change-pass" onClick={onChangePassword} >
                <LockOutlined /> Đổi mật khẩu
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout" onClick={logOut}>
                <LogoutOutlined /> Đăng xuất
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown trigger={['click']} overlay={menu} >
            <div
                style={{
                    width: '85%',
                    display: 'inline-block',
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderRadius: '30px',
                }}
            >
                {children}
            </div>
        </Dropdown>
    )
}

export default UserDropdown
