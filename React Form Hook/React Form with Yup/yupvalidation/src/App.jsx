import './App.css';
import { Container } from '@mui/material';
import FormValid from './components/FormValid.jsx';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <FormValid />
      </Container>
    </div>
  );
}

export default App;
