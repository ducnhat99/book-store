import React from 'react';
import ReactDOM from 'react-dom';
import { List, Avatar } from 'antd';
import {
  ShoppingCartOutlined,
  UsergroupAddOutlined,
  EyeOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryPie,
} from 'victory';
const AdminHome = () => {
  const data2012 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  const data2013 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 },
  ];

  const data2014 = [
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 },
  ];

  const data2015 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
  ];

  const data = [
    {
      title: 'Comment 1',
    },
    {
      title: 'Comment 2',
    },
    {
      title: 'Comment 3',
    },
  ];
  return (
    <div className="admin-home-container">
      <div className="admin-home-box">
        <div className="admin-box-1">
          <div className="admin-box-1_left" style={{ backgroundColor: '#f7941e' }}>
            <EyeOutlined style={{ color: 'white', fontSize: '40px' }} />
          </div>
          <div className="admin-box-1_right" style={{ backgroundColor: '#D9D9D9' }}>
            <p>VISITOR</p>
            <h3>1525</h3>
          </div>
        </div>
        <div className="admin-box-1">
          <div className="admin-box-1_left" style={{ backgroundColor: '#f7941e' }}>
            <CommentOutlined style={{ color: 'white', fontSize: '40px' }} />
          </div>
          <div className="admin-box-1_right" style={{ backgroundColor: '#D9D9D9' }}>
            <p>COMMENT</p>
            <h3>565</h3>
          </div>
        </div>
        <div className="admin-box-1">
          <div className="admin-box-1_left" style={{ backgroundColor: '#f7941e' }}>
            <ShoppingCartOutlined style={{ color: 'white', fontSize: '40px' }} />
          </div>
          <div className="admin-box-1_right" style={{ backgroundColor: '#D9D9D9' }}>
            {' '}
            <p>OLDER</p>
            <h3>350</h3>
          </div>
        </div>
        <div className="admin-box-1">
          <div className="admin-box-1_left" style={{ backgroundColor: '#f7941e' }}>
            <UsergroupAddOutlined style={{ color: 'white', fontSize: '40px' }} />
          </div>
          <div className="admin-box-1_right" style={{ backgroundColor: '#D9D9D9' }}>
            {' '}
            <p>USER</p>
            <h3>1000</h3>
          </div>
        </div>
      </div>
      <div className="admin-home-1">
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={['Tháng 9', 'Tháng 8', 'Tháng 7', 'Tháng 6']}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x * 1000}đ`} />
          <VictoryStack colorScale={'warm'}>
            <VictoryBar data={data2012} x="quarter" y="earnings" />
            <VictoryBar data={data2013} x="quarter" y="earnings" />
            <VictoryBar data={data2014} x="quarter" y="earnings" />
            <VictoryBar data={data2015} x="quarter" y="earnings" />
          </VictoryStack>
        </VictoryChart>
      </div>
      <div className="admin-home-1">
        <VictoryPie
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          data={[
            { x: 'Văn học', y: 35 },
            { x: 'Kinh tế', y: 40 },
            { x: 'Giáo dục', y: 55 },
          ]}
        />
      </div>
      <div className="admin-home-2">
        <div className="admin-home-older">
          <div className="admin-home-htext">
            <h2>OLDER</h2>
          </div>
          <div>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
        <div className="admin-home-comment">
          <div className="admin-home-htext">
            <h2>COMMENT</h2>
          </div>
          <div>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
