// import { render, screen } from '@testing-library/react';
import { render, screen } from '../../../../test-utils/testing-utils.jsx';
import Options from '../Options.jsx';
import userEvent from '@testing-library/user-event';
import OrderEntry from '../OrderEntry.jsx';
// import { OrderDetailsProvider } from '../../context/OrderDetailsContext.jsx';

test('update scoop subtotal when scoop change', async () => {
  /** Creae an user */
  const user = userEvent.setup();

  /** Render the Options Component with scoop **/

  // This wrapper is to wrap the OrderDetailsProvider over the Options Component. The wrapper is dedicated to this particular render.
  // If we want to use a global wrapper we have to use the custom render provided in the testing-utils.jsx under test-utils folder.

  // render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // Using custom render

  // Passing props was required otherwise it would have thrown error.
  render(<Options optionType="scoops" />);
  /** Make sure total starts out at $0.00 **/

  // getByText(
  //     // If you're using `screen`, then skip the container argument:
  //     container: HTMLElement,
  //     text: TextMatch,
  //     options?: {
  //       selector?: string = '*',
  //       exact?: boolean = true,
  //       ignore?: string|boolean = 'script, style',
  //       normalizer?: NormalizerFn,
  //     }): HTMLElement
  // getByText have options as key and inside options we have the key exact which is true. So it means by default it will do an exact
  // match and not a substring match. If we make exact false then it will not go for exact match rather it will go for substring match
  // Here we just wanted to figure out the div which contains the "Scoop total: $" and not wanted to add the number value so that we
  // can use it for other assertions as well when the amout gets changed.
  const scoopSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopSubtotal).toHaveTextContent('0.00');

  /** Update the vanilla scoops to 1 and chck the subtotal **/

  // vanillaInput contains the number input. When input type="number" the role is always spinbutton
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla', // name is coming form label of the number input field
  });

  // It is always to good clear the input field before we type anything
  // clear() is taken from Utility API
  await user.clear(vanillaInput);

  // type() is taken from Utility API which is used for mock typing.
  await user.type(vanillaInput, '1');

  /** Cost of each scoop is 2 so when the calue in the input is 1 the cost should get to 2. **/
  expect(scoopSubtotal).toHaveTextContent('2.00');

  /** Update the mint chip scops to 2 and check the subtotal **/
  const mintInput = await screen.findByRole('spinbutton', {
    name: 'Mint chip',
  });

  /** Clearing the number Input before adding anything **/
  await user.clear(mintInput);

  /** Typing 2 on the choclate input **/

  //   // type() is taken from Utility API which is used for mock typing.
  await user.type(mintInput, '2');

  /** Updating the scoop cost to 6.00 as each scoop cost 2.00 so 4.00 from choclate and 2.00 from Vanila */
  expect(scoopSubtotal).toHaveTextContent('6.00');
});

test('update toppings subtotal when toppings change', async () => {
  /** Create user */
  const user = userEvent.setup();

  /** Render the custom API **/
  // Passing props was required otherwise it would have thrown error.
  render(<Options optionType="toppings" />);

  /** Get the elemnt which will contain the text "Toppings total: $" */

  // exact:false telling we don't want exact match we want pattern matching.
  const toppingSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  });

  /** Check initially if the value is 0.00 */
  expect(toppingSubtotal).toHaveTextContent('0.00');

  /** Get the element checkbox of the option M&M */
  const mandmInput = await screen.findByRole('checkbox', {
    name: 'M&Ms',
  });

  /** Select M&Ms topping **/
  await user.click(mandmInput);

  /** Check the content of subtotal is equal to 1.50 **/
  expect(toppingSubtotal).toHaveTextContent('1.50');

  /** Get the element checkbox of the option Hot Fudge **/
  const hotfudgeInput = await screen.findByRole('checkbox', {
    name: 'Hot fudge',
  });

  /** Check Hot fudge topping **/
  await user.click(hotfudgeInput);

  /** Check the content of subtotal is equal to 3.00 **/
  expect(toppingSubtotal).toHaveTextContent('3.00');

  /** Click on the checkbox again and the checkbox for M&Ms will be unchecked **/
  await user.click(mandmInput);

  /** Check the content of subtotal is equal to 1.50 **/
  expect(toppingSubtotal).toHaveTextContent('1.50');
});

describe('grand total', () => {
  test('grand total starts at $0.00', () => {
    /** Custom Render **/

    // To get rid of Warning: An update to Options inside a test was not wrapped in act(...), need to use unmount.
    // Reference --> https://cognizant.udemy.com/course/react-testing-library/learn/lecture/24450886#overview

    // The reason because the component gets unmounted before the network call because it is not having any asyncronous functionality
    // in this test.

    // Passing props was not required to OrderEntry Component.
    const { unmount } = render(<OrderEntry />);

    /** Get the element with the heading 'Grand Total' */

    // I can use both getByText and getByRole.
    // const grandTotal = screen.getByText('Grand total: $', { exact: false });

    const grandTotal = screen.getByRole('heading', {
      name: /^Grand total: \$/i, // Give slash in front of $ otherwise test will not pass as $ has a meaning in Regex
    });

    /** Check if the total is 0.00 **/
    expect(grandTotal).toHaveTextContent('0.00');

    // Explicit unmout is to prevent the network call to return anything.
    unmount();
  });
  test('grand total updates properly if scoop is added first', async () => {
    /** Create user **/
    const user = userEvent.setup();

    /** Custom Render **/
    // Passing props was not required to OrderEntry Component.
    render(<OrderEntry />);

    /** Access the input for vanilla scoop, clear the input and type 1 on it and check the total result by acessing the heading tag **/

    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });

    await user.clear(vanillaInput);

    await user.type(vanillaInput, '1');

    // I can use both getByText and getByRole.
    // const grandTotal = screen.getByText('Grand total: $', { exact: false });
    const grandTotal = screen.getByRole('heading', {
      name: /^Grand total: \$/i, // Give slash in front of $ otherwise test will not pass as $ has a meaning in Regex
    });

    expect(grandTotal).toHaveTextContent('2.00');

    /** Access the input for M&MS toppings, clear the input and click on it to check on it and check the total result by acessing the heading tag **/
    const mandmInput = await screen.findByRole('checkbox', { name: 'M&Ms' });

    await user.click(mandmInput);

    expect(grandTotal).toHaveTextContent('3.50');
  });
  test('grand total updates properly if toppings is added first', async () => {
    /** Create user **/
    const user = userEvent.setup();

    /** Custom Render **/
    // Passing props was not required to OrderEntry Component.
    render(<OrderEntry />);

    /** Access the input for M&MS toppings, clear the input and click on it to check on it and check the total result by acessing the heading tag **/
    const mandmInput = await screen.findByRole('checkbox', { name: 'M&Ms' });

    await user.click(mandmInput);

    // I can use both getByText and getByRole.
    // const grandTotal = screen.getByText('Grand total: $', { exact: false });
    const grandTotal = screen.getByRole('heading', {
      name: /^Grand total: \$/i, // Give slash in front of $ otherwise test will not pass as $ has a meaning in Regex
    });

    expect(grandTotal).toHaveTextContent('1.50');

    /** Access the input for vanilla scoop, clear the input and type 1 on it and check the total result by acessing the heading tag **/
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });

    await user.clear(vanillaInput);

    await user.type(vanillaInput, '1');

    expect(grandTotal).toHaveTextContent('3.50');
  });
  test('grand total updates properly if item is removed', async () => {
    /** Create user **/
    const user = userEvent.setup();

    /** Custom Render **/
    // Passing props was not required to OrderEntry Component.
    render(<OrderEntry />);

    /** Check the M&Ms checkbox and fill the vanilla Input **/

    const mandmInput = await screen.findByRole('checkbox', { name: 'M&Ms' });

    await user.click(mandmInput);

    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });

    await user.clear(vanillaInput);

    await user.type(vanillaInput, '1');

    // expect(grandTotal).toHaveTextContent('3.50');

    /** Again click on the vanilla checkbox to uncheck it and then check the total **/
    await user.click(mandmInput);

    // I can use both getByText and getByRole.
    // const grandTotal = screen.getByText('Grand total: $', { exact: false });
    const grandTotal = screen.getByRole('heading', {
      name: /^Grand total: \$/i, // Give slash in front of $ otherwise test will not pass as $ has a meaning in Regex
    });
    expect(grandTotal).toHaveTextContent('2.00');
  });
});
