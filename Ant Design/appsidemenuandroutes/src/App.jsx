import './App.css';
import SideMenubar from './components/SideMenubar';
import Content from './components/Content';
import { Col, Row } from 'antd';
import CommonComponent from './components/CommonComponent';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <CommonComponent name="Header"/>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={4}><SideMenubar /></Col>
            <Col span={20}><Content /></Col>
          </Row>
        </Col>
        <Col span={24}>
          <CommonComponent name="Footer"/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
