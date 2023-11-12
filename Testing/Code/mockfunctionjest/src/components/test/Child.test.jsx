import { render, screen } from '@testing-library/react';
import Child from '../Child.jsx';
import userEvent from '@testing-library/user-event';
// import App, { handleCounter } from '../../App.jsx';

const props = {
  counter: 0,
  handleCounter: jest.fn(), // jest.fn() is basically an empty function and is basically overrdiing the original handleCounter prop.
};

test('testing the increase in counter', async () => {
  const user = userEvent.setup();

  // props can be passed to the Child component but if we want to test the behaviour of the Child Component where a function is passed as
  // prop that is not possible. This is because the handleCounter function is mocked by jest.fn(). jest.fn() is an empty function
  // overriding or mocking the original function.That can only be possible if you render the App component.

  //   render(<App />);

  render(<Child {...props} />);

  // You can use jest.fn() where you have to pass a function as a prop but that function will b eof no use.
  //   render(<Child counter={0} handleCounter={jest.fn()} />);

  const header = screen.getByRole('heading');

  expect(header).toHaveTextContent(0);

  const button = screen.getByRole('button', { name: 'Add' });
  await user.click(button);

  // screen.debug();

  // As handleCounter has been mocked with jest.fn() so we cannot implement he function but we can spy on the function by checking
  // whether the function has been called or not and how many times it's been called.
  expect(props.handleCounter).toHaveBeenCalledTimes(1);
});
