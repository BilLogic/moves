import React from 'react';
import './PatientCard.css';
import { Typography, Card } from 'antd';
import { UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
const { Title } = Typography;


function PatientCard(props) {
  return (
      <Card title={props.name} extra={<span class="dot"></span>} style={{width: 350}} className="patient-card">
        <div className='patient-card-content'>
            <div className='patient-card-value'>
                <span className='patient-card-arrow'>{props.arrow}</span>
                <div className='patient-card-percentage'>
                    <Title level={2}>{props.percentage}</Title>
                    <Title level={4}>.{props.decimal}%</Title>
                </div>
            </div>
            <Title style={{color: 'gray', fontWeight: 'normal', }} className="patient-card-metric" level={5}>{props.metric}<span>     <QuestionCircleOutlined /></span></Title>
        </div>
      </Card>
  );
};

export default PatientCard;