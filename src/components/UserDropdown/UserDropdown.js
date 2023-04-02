import React from 'react'
import { Dropdown } from 'antd'
import { LockOutlined, LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const UserDropdown = (
    {
        onClick,
        logOut,
        onChangePassword,
        children,
    }
) => {
    const items = [
        {
            label: <TitleAdmin onClick={onClick}><b>Admin</b></TitleAdmin>,
            key: '0',
        },
        {
            label: <Title onClick={onChangePassword} > <LockOutlined /> Đổi mật khẩu</Title>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <Title onClick={logOut} > <LogoutOutlined /> Đăng xuất</Title>,
            key: '2',
        },
    ];

    return (
        <Dropdown trigger={['click']} menu={{ items }}>
            <MenuDown> {children} </MenuDown>
        </Dropdown>
    )
}

const TitleAdmin = styled.div`
    cursor: pointer;
    margin-left: 16px;
    color: #333333;
`;

const Title = styled.div`
    color: #333333;
`;

const MenuDown = styled.div`
    width: 85%;
    display: inline-block;
    text-align: left;
    cursor: pointer;
`;

export default UserDropdown
