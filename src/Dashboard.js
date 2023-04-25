import React, { useEffect } from "react";
import './App.css';
import 'antd/dist/reset.css';
import { Layout, Card, Typography, Row, Col, Input, Select, Tabs, Table } from 'antd';
import Graph from "./atoms/graph/Graph";
import tableColumns from "./data/table/TableColumns";
import tableData from "./data/table/TableData";
import { stepCountAll, heartRateAll, hrsOfSleepAll} from "./data/graph/Axes";
import { stepCountData, heartRateData, hrsOfSleepData } from "./data/graph/GraphData";
import Watchlist from "./atoms/watchlist/Watchlist";
import Timeline from "./data/timeline/Timeline";
const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;


const onSearch = (value) => console.log(value);
const handleChange = (value) => {
  console.log(`${value}`);
};
const onChange1 = (key) => {
  console.log(key);
};


const onChange2 = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };




const Dashboard = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const metrics = [
        {
          key: '1',
          label: `Step Count`,
          children: <div>
            <Graph options={stepCountAll} series={stepCountData} type="line" />
            <Watchlist metric="Step Count" setIndex={props.setIndex} />
          </div>,
        },
        {
          key: '2',
          label: `Heart Rate`,
          children: <div>
            <Graph options={heartRateAll} series={heartRateData} type="line" />
            <Watchlist metric="Heart Rate" setIndex={props.setIndex} />
          </div>,
        },
        {
          key: '3',
          label: `Hrs of Sleep`,
          children: <div>
            <Graph options={hrsOfSleepAll} series={hrsOfSleepData} type="line" />
            <Watchlist metric="Hrs of Sleep" setIndex={props.setIndex} />
          </div>,
        },
      ];

      const views = [
        {
          key: '1',
          label: `Table View`,
          children: <div>
            <Table columns={tableColumns} dataSource={tableData} onChange={onChange2} setIndex={props.setIndex}/>
          </div>,
        },
        {
          key: '2',
          label: `Timeline View`,
          children: <div>
              <Timeline setIndex={props.setIndex}/>
          </div>,
        },
      ];

    return (

        <Content id="dashboard">
            <Card size="large" className="card">
                <Row className="card-top-row" align="middle">
                <Col span={16}>
                    <Title level={2} className="card-title">Patient Trends</Title>
                </Col>
                <Col className="card-filters">
                    <Search id="search" placeholder="Doe, John" onSearch={onSearch} className="card-filter"/>
                    <Select
                        mode="single"
                        className="filter"
                        placeholder="Filter by Week(s)"
                        onChange={handleChange}
                        optionLabelProp="label"
                    >
                    <Option value="All Weeks" label="All Weeks">
                    </Option>
                    <Option value="Weeks 1-3" label="Weeks 1-3">
                    </Option>
                    <Option value="Weeks 4-6" label="Weeks 4-6">
                    </Option>
                    <Option value="Weeks 7-9" label="Weeks 7-9">
                    </Option>
                    <Option value="Weeks 10-12" label="Weeks 10-12">
                    </Option>
                    </Select>
                </Col>
                </Row>
                <Row>
                <Col span={24}>
                    <Tabs id="metric-tabs" className="tabs" defaultActiveKey="1" items={metrics} onChange={onChange1} />
                </Col>
                </Row>
            </Card>
            <Card size="large" className="card">
                <Row className="card-top-row" align="middle">
                <Col span={24}>
                    <Title level={2} className="card-title">Patient Index</Title>
                </Col>
                </Row>
                <Row>
                <Col span={24}>
                    <Tabs id="view-tabs" className="tabs" defaultActiveKey="1" items={views} onChange={onChange1} />
                </Col>
                </Row>
            </Card>
        </Content>
      
    );
}

export default Dashboard;
