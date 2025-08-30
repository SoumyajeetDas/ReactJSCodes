import { useState, type JSX } from 'react';

const InputHandler: React.FC<{ render: (rupee: number) => JSX.Element }> = ({
  render,
}) => {
  const [rupee, setRupee] = useState<number>(0);
  return (
    <div>
      <input
        type="number"
        placeholder="Type Indian Rupees..."
        onChange={(e) => setRupee(Number(e.target.value))}
      />
      {render(rupee)}
    </div>
  );
};

export default InputHandler;
