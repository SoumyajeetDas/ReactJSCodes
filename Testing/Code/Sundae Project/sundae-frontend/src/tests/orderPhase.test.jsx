import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from '../App.jsx';
import userEvent from '@testing-library/user-event';
import OrderEntry from '../components/entry/OrderEntry.jsx';
import { OrderDetailsProvider } from '../components/context/OrderDetailsContext.jsx';

test('order Phases for happy path', async () => {
  /** Create a user **/
  const user = userEvent.setup();

  /** Render App **/
  const { unmount } = render(<App />);

  /** Add icecream scoop and toppings in the orderEntry page**/
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });

  user.clear(vanillaInput);
  user.type(vanillaInput, '1');

  const mintchipInput = await screen.findByRole('spinbutton', {
    name: 'Mint chip',
  });

  user.clear(mintchipInput);
  user.type(mintchipInput, '2');

  const mandmInput = await screen.findByRole('checkbox', { name: 'M&Ms' });

  user.click(mandmInput);

  /** Find and check order button in the orderEntry page **/
  const orderButton = screen.getByRole('button', { name: 'Order Sundae' });
  await user.click(orderButton);

  /** Check summary information based on order in OrderSummary Page **/
  const orderHeader = screen.getByRole('heading', { name: 'Order Summary' });
  expect(orderHeader).toBeInTheDocument();

  const scoopHeader = screen.getByRole('heading', { name: 'Scoops: $6.00' });
  expect(scoopHeader).toBeInTheDocument();

  const toppingHeader = screen.getByRole('heading', {
    name: 'Toppings: $1.50',
  });
  expect(toppingHeader).toBeInTheDocument();

  // Access the list of items showing in the Order Summary

  // This can be a way of doing things but I will prefer by getAllByRole.

  //   expect(screen.getByText('1 Vanilla')).toBeInTheDocument();
  //   expect(screen.getByText('2 Mint chip')).toBeInTheDocument();
  //   expect(screen.getByText('M&Ms')).toBeInTheDocument();

  const optionItems = screen.getAllByRole('listitem');
  //   screen.debug(optionItems);

  const optionItemsText = optionItems.map((ele) => ele.textContent);
  expect(optionItemsText).toEqual(['1 Vanilla', '2 Mint chip', 'M&Ms']);

  /** Accept Terms & COnditions and click button to confirm order **/
  //   screen.debug();
  const termsandcondCheckbox = screen.getByRole('checkbox');
  await user.click(termsandcondCheckbox);

  const confirmButton = screen.getByRole('button', { name: 'Confirm Order' });
  await user.click(confirmButton);

  /** Confirm order no. on confirmation page **/

  // check whethere Loading... got removed from the DOM.

  // const loader = screen.getByText(/Loading/i);
  // expect(loader).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));

  const confirmpageHeader = await screen.findByRole('heading', {
    name: 'Thank You',
  });
  expect(confirmpageHeader).toBeInTheDocument();

  const orderNo = await screen.findByText(/order number/i);
  expect(orderNo).toBeInTheDocument();

  const newOrderButton = screen.getByRole('button', {
    name: /Create new order/i,
  });
  user.click(newOrderButton);

  /** Check that scoops and toppings subtotal have been reset on the orderEntryPage **/
  // Back to the orderEntrypage
  const scoopTotal = await screen.findByText('Scoops total: $', {
    exact: false,
  });
  expect(scoopTotal).toHaveTextContent('0.00');

  const toppingTotal = screen.getByText('Toppings total: $', { exact: false });
  expect(toppingTotal).toHaveTextContent('0.00');

  unmount();
});

describe('Toppings header is not on summary page', () => {
  test('Toppings header is not on summary page if no toppings ordered', async () => {
    /** Creating a user **/
    const user = userEvent.setup();

    /** Render the APp Page **/
    render(<App />);

    /** Take 2 scoops of vanilla and click on the Order Sundae button **/
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '2');

    const orderButton = screen.getByRole('button', { name: 'Order Sundae' });
    await user.click(orderButton);

    /** Check for the scoops header and there will be no toppings header in the page **/
    const scoopHeading = screen.getByRole('heading', {
      name: 'Scoops: $4.00',
    });
    expect(scoopHeading).toBeInTheDocument();

    // Used queryByRole as getBy and findBy will fail if the element does not exist.
    const toppingHeading = screen.queryByRole('heading', { name: /topping/i });
    expect(toppingHeading).not.toBeInTheDocument();
  });

  test('Toppings header is not on summary page if toppings are added and then removed', async () => {
    /** Creating a user **/
    const user = userEvent.setup();

    /** Render the APp Page **/
    render(<App />);

    /** Take 2 scoops of vanilla and click on the Order Sundae button **/
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });

    await user.clear(vanillaInput);
    await user.type(vanillaInput, '2');

    /** Checking m&m topping **/
    const mandmInput = screen.getByRole('checkbox', { name: 'M&Ms' });
    await user.click(mandmInput);

    /** Unchecking m&m topping **/
    await user.click(mandmInput);

    const orderButton = screen.getByRole('button', { name: 'Order Sundae' });
    await user.click(orderButton);

    /** Check for the scoops header and there will be no toppings header in the page **/
    const scoopHeading = screen.getByRole('heading', {
      name: 'Scoops: $4.00',
    });
    expect(scoopHeading).toBeInTheDocument();

    // Used queryByRole as getBy and findBy will fail if the element does not exist.
    const toppingHeading = screen.queryByRole('heading', { name: /topping/i });
    expect(toppingHeading).not.toBeInTheDocument();
  });
});

test('disable order button if there are no scoops ordered', async () => {
  /** Creating a user **/
  const user = userEvent.setup();

  render(<OrderEntry setOrderPhase={jest.fn()} />, {
    wrapper: OrderDetailsProvider,
  });

  const orderButton = screen.getByRole('button', { name: 'Order Sundae' });
  await user.click(orderButton);
  expect(orderButton).toBeDisabled();

  // expect button to be enabled after adding scoop
  /** Take 2 scoops of vanilla and click on the Order Sundae button **/
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });

  await user.clear(vanillaInput);
  await user.type(vanillaInput, '2');
  expect(orderButton).toBeEnabled();

  // expect button to be disabled again after removing scoop
  user.clear(vanillaInput);
  user.type(vanillaInput, '0');
  expect(orderButton).toBeDisabled();
});
