import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Col, Row, Space, Table, Tooltip } from 'antd'
import { HomeOutlined, SearchOutlined, ReloadOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ColFilter, RowFilter, RowStyle, Title } from './styles'
import Filter from '../../components/Filter/Filter';
import FilterTime from '../../components/Filter/FilterTime';
import CustomSreach from '../../components/Sreach/Sreach';
import dayjs from 'dayjs';
import moment from "moment";
import { ButtonRollBack, ButtonSreach } from '../../Styles/ButtonStyles';
import { PopoverDelete, PopoverEdit } from '../../Styles/PopoverStyles';
import { dataTable } from '../../constant/DataFake';
export default function Package() {

  const dateFormat = "DD-MM-YYYY";
  const today = new Date();
  const todayDate = new Date().toLocaleDateString("sv-SE");
  today.setDate(today.getDate() - 30);
  const date = new Date(today).toLocaleDateString("sv-SE");

  const [showFilter, setShowFilter] = useState(false);
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [query, setQuery] = useState('')
  const [renderSreach, setRenderSreach] = useState(false);

  const onClickFilter = () => {
    setShowFilter(!showFilter)
  }

  useEffect(() => {
    setStartDate(moment(date).format("DD-MM-YYYY"))
    setEndDate(moment(todayDate).format("DD-MM-YYYY"))
  }, []);

  const onChangeTimeStart = (e, date) => {
    if (date !== '') {
      setStartDate(date + " " + '00:00:00')
    } else {
      setStartDate(moment(date).format("DD-MM-YYYY") + " " + '00:00:00')
    }
  }

  const onChangeTimeEnd = (e, date) => {
    if (date !== '') {
      setEndDate(date + " " + '23:59:59')
    } else {
      setEndDate(moment(todayDate).format("DD-MM-YYYY") + " " + '23:59:59')
    }
  }

  const onSearch = () => {
    if (query !== "") {
      if (startDate !== '' && endDate !== '') {
      }
    } else {
      setRenderSreach(!renderSreach)
    }
  }

  const onReloadSearch = () => {
    setQuery('')
    setStartDate(moment(date).format("DD-MM-YYYY"))
    setEndDate(moment(todayDate).format("DD-MM-YYYY"))
    setRenderSreach(!renderSreach)
  }

  const onChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (t, r, i) => i + 1,
      width: "5%",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Name ",
      dataIndex: "name",
      key: "name",
      ellipsis: {
        showTitle: false,
      },
      render: (value) => (
        <Tooltip placement="topLeft" title={value}>
          {value}
        </Tooltip>
      ),
    },
    {
      title: "Chinese ",
      dataIndex: "chinese",
      key: "chinese",
      ellipsis: {
        showTitle: false,
      },
      render: (value) => (
        <Tooltip placement="topLeft" title={value}>
          {value}
        </Tooltip>
      ),
    },
    {
      title: "Math",
      dataIndex: "math",
      key: "math",
      ellipsis: {
        showTitle: false,
      },
      render: (value) => (
        <Tooltip placement="topLeft" title={value}>
          {value}
        </Tooltip>
      ),
    },
    {
      title: "English ",
      dataIndex: "english",
      key: "english",
      ellipsis: {
        showTitle: false,
      },
      render: (value) => (
        <Tooltip placement="topLeft" title={value}>
          {value}
        </Tooltip>
      ),
    },
    {
      title: "Chinese ",
      dataIndex: "chinese",
      key: "chinese",
      ellipsis: {
        showTitle: false,
      },
      render: (value) => (
        <Tooltip placement="topLeft" title={value}>
          {value}
        </Tooltip>
      ),
    },
    {
      title: "Chức năng",
      key: "action",
      fixed: 'right',
      render: (record) => (
        <Space>
          <PopoverEdit content={<h4>Sửa thông tin</h4>}>
            <EditOutlined onClick={OnEdit} />
          </PopoverEdit>
          <PopoverDelete content={<h4>Xóa thông tin</h4>}>
            <DeleteOutlined onClick={OnEdit} />
          </PopoverDelete>
        </Space>
      ),
    },
  ];

  const OnEdit = () => {

  }

  return (
    <>
      <Row span={24}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"} > <HomeOutlined /> </Link>
          </Breadcrumb.Item>
          <Title> <b>Danh sách gói</b> </Title>
        </Breadcrumb>
      </Row>

      <RowStyle span={24} >
        <ColFilter span={24}>
          <Row span={24}>
            <Col span={12}>
              <Filter onClickFilter={onClickFilter} />
            </Col>
            <Col span={12}></Col>
          </Row>
        </ColFilter>

        <ColFilter span={24}>
          {showFilter === true
            ?
            <RowFilter >
              <Col xs={2} sm={3} md={3} lg={6} xl={6} xxl={7} />
              <Col xs={22} sm={20} md={20} lg={12} xl={13} xxl={12} >
                <Row>
                  <Col span={24}><FilterTime valueStart={dayjs(startDate, dateFormat)} valueEnd={dayjs(endDate, dateFormat)} format={dateFormat} onChangeTimeStart={onChangeTimeStart} onChangeTimeEnd={onChangeTimeEnd} /></Col>
                  <Col span={24}><CustomSreach value={query} placeholder='Tìm kiếm' onChange={onChangeQuery} /></Col>
                </Row>
                <Row span={24}>
                  <ButtonSreach type="primary" onClick={onSearch} >
                    <SearchOutlined /> Tìm kiếm
                  </ButtonSreach>
                  <ButtonRollBack type="primary" danger onClick={onReloadSearch} >
                    <ReloadOutlined /> Tải lại
                  </ButtonRollBack>
                </Row>
              </Col>
              <Col xs={0} sm={1} md={1} lg={6} xl={5} xxl={5} />
            </RowFilter>
            : null}
        </ColFilter>
      </RowStyle>

      <RowStyle span={24} >
        <Col span={24} >
          <Table
            columns={columns}
            dataSource={dataTable}
            size="small"
            scroll={{ x: 'calc(350px + 50%)' }}
          />
        </Col>
      </RowStyle>
    </>
  )
}
