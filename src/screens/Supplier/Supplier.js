import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, Col, Popconfirm, Popover, Row, Space, Table, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, HomeOutlined } from '@ant-design/icons';
import CustomSreach from '../../constant/Sreach';
import InsSupplier from "./InsSupplier";
import UpdSupplier from "./UpdSupplier";
import './Supplier.css'
const Supplier = () => {

    const [showIns, setShowIns] = useState({ show: false })
    const [showUpd, setShowUpd] = useState({ show: false, id: null })

    const data = [
        {
            key: '1',
            code: 'CPGD22',
            name: 'Nhà cung cấp 1',
            address: 'Cầu Giấy, Hà Nội',
            phone: '0977837222',
            status: 'Hoạt động',
        },
        {
            key: '2',
            code: 'CPGD22',
            name: 'Nhà cung cấp 2',
            address: 'HCM',
            phone: '0977827422',
            status: 'Hoạt động',
        },
        {
            key: '3',
            code: 'CPGD22',
            name: 'Nhà cung cấp 3',
            address: 'Đà Nẵng',
            phone: '0962827422',
            status: 'Tắt',
        },
    ];

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            render: (t, r, i) => i + 1,
            with: '5%'
        },
        {
            title: 'Mã nhà cung cấp',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Tên nhà cung cấp',
            dataIndex: 'name',
            key: 'name',
            with: '10%'
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            width: '20%',
            ellipsis: {
                showTitle: false,
            },
            render: (value) => (
                <Tooltip placement="topLeft" title={value}>
                    {value}
                </Tooltip>
            )
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            with: '10%'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            with: '10%',
            render: (value) => (
                <span
                    style={{
                        background: value === "Hoạt động" ? "#B3E5D1" : "#E5B4B3",
                        borderRadius: 5,
                        fontSize: "14px",
                        color: value === "Hoạt động" ? "#194D3A" : "#863A2D",
                        padding: 4,
                        border: value === "Hoạt động" ? "1px solid #B3E5D1" : "1px solid #E5B4B3",
                    }}
                >
                    {value}
                </span>
            ),
        },
        {
            title: 'Chức năng',
            key: 'action',
            with: '10%',
            render: (record) => (
                <Space>
                    <Popover
                        content={<h4> Sửa thông tin</h4>}
                    >
                        <EditOutlined
                            style={{
                                background: "#117C72",
                                borderRadius: 5,
                                fontSize: "12px",
                                color: "white",
                                padding: 5,
                                border: "1px solid #117C72",
                            }}
                            onClick={() => {
                                setShowUpd({
                                    show: true,
                                    id: record?.id,
                                });
                            }}
                        />
                    </Popover>

                    <Popconfirm title="Bạn có chắc chắn muốn xóa nhà cung cấp?"
                    // onConfirm={() => onDelete(record)}
                    >
                        <Popover content={<h4> Xóa nhà cung cấp</h4>} >
                            <DeleteOutlined
                                style={{
                                    background: "rgb(240, 65, 52)",
                                    borderRadius: 5,
                                    fontSize: "12px",
                                    color: "white",
                                    padding: 5,
                                    border: "1px solid rgb(240, 65, 52)",
                                }}
                            />
                        </Popover>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    useEffect(() => {

    }, []);

    const onShowIns = async () => {
        setShowIns({
            show: true
        });
    };

    const onCancelShowIns = () => {
        setShowIns({
            show: false
        });
    };

    const onCancelShowUpd = () => {
        setShowUpd({
            show: false,
            id: null
        });
    };

    return (
        <>
            <Row span={24}>
                <Col span={24}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">
                            <HomeOutlined />
                        </Breadcrumb.Item>
                        <div style={{ color: 'black' }}>
                            <b>Danh sách nhà cung cấp</b>
                        </div>
                    </Breadcrumb>
                </Col>
            </Row>

            <Row span={24} style={{ paddingTop: '20px' }}>

                <Col xs={24} sm={24} md={24} lg={8} xl={8} >
                    <div className="customer-search">
                        <CustomSreach />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Button
                        style={{ float: 'right' }}
                        type="primary"
                        onClick={onShowIns}
                    >
                        <PlusOutlined />Thêm
                    </Button>
                </Col>

                <Col span={24} style={{ paddingTop: '20px' }}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        size="small"
                        pagination={{
                            // onChange: page => {
                            //     setPage(page - 1)
                            // },
                            // pageSize: size,
                            // total: totalPage,
                            showSizeChanger: true
                        }}
                    />
                </Col>
            </Row>
            <InsSupplier
                show={showIns.show}
                handleCancel={onCancelShowIns}
            />
            <UpdSupplier
                show={showUpd.show}
                id={showUpd.id}
                handleCancel={onCancelShowUpd}
            />
        </>
    )
}

export default Supplier
