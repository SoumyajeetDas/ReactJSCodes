import { useCounter } from '../../hooks/useCounter';

const Counter = () => {
  const { count, increment } = useCounter();
  return (
    <div>
      <p style={{ textAlign: 'center' }} data-testid="counter-value">
        {count}
      </p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
