import { Container } from 'react-bootstrap';
import './App.css';
import OrderEntry from './components/entry/OrderEntry.jsx';
import { OrderDetailsProvider } from './components/context/OrderDetailsContext.jsx';
import { useState } from 'react';
import OrderSummary from './components/summary/OrderSummary.jsx';
import OrderConfirmation from './components/confirmation/OrderConfirmation.jsx';

function App() {
  const [orderPhase, setOrderPhase] = useState('inProgress');

  let Component = OrderEntry;
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
    default:
  }
  return (
    <div className="App">
      <Container>
        <OrderDetailsProvider>
          <Component setOrderPhase={setOrderPhase} />
        </OrderDetailsProvider>
      </Container>
    </div>
  );
}

export default App;
