import React from 'react';
import './App.css';

import { Layout, Typography } from 'antd';

import PastTemperaturesByCountry from './views/PastTemperaturesByCountry';

const { Title } = Typography;
const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'relative' }}><Title style={{ color: "white", margin: 0, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>Climate Change</Title></Header>
        <Content className="content">
          <PastTemperaturesByCountry />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
