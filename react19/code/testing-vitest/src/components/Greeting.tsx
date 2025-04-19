const Greeting: React.FC<Readonly<{ name: string }>> = ({ name }) => {
  return <h1>Hello, {name || 'World'}!</h1>;
};

export default Greeting;
