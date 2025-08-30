import React from 'react';

const ConvertEUR: React.FC<{ rupee: number }> = ({ rupee }) => {
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
      <button onClick={() => setResult(rupee * 0.011)}>Convert to Euro</button>
      <span>Result: {result?.toFixed(2)}</span>
    </div>
  );
};

export default ConvertEUR;
