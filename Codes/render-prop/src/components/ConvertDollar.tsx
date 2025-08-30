import React from 'react';

const ConvertDollar: React.FC<{ rupee: number }> = ({ rupee }) => {
  const [result, setResult] = React.useState<number>(0);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <button onClick={() => setResult(rupee * 0.012)}>
        Convert to Dollar
      </button>
      <span>Result: {result?.toFixed(2)}</span>
    </div>
  );
};

export default ConvertDollar;
