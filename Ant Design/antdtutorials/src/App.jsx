import { Space } from 'antd';
import './App.css';
import ButtonndSteps from './components/ButtonndSteps';
import Options from './components/Options';
import FormCheck from './components/FormCheck';
import DynamicForm from './components/DynamicForm';


function App() {


  return (
    <div className="App">
      <Space direction='vertical' size="large" style={{ display: 'flex' }}>

        <ButtonndSteps />
        <Options />
        <FormCheck />
        <DynamicForm/>
      </Space>

    </div>
  );
}

export default App;
