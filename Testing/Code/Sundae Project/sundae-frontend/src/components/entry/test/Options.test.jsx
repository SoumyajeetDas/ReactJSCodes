import { render, screen } from '../../../../test-utils/testing-utils.jsx';
import Options from '../Options.jsx';
import userEvent from '@testing-library/user-event';

test('displays image for each scoop option from the server', async () => {
  /** Render the options Component and render() is a custom render which wraps any component with OrderDetailsContext **/
  // Custom render is present in /test-utils/testing-utils.jsx
  // Reference --> https://testing-library.com/docs/react-testing-library/setup

  // Passing the prop was necessary othrwise it was throwing error
  render(<Options optionType="scoops" />);

  /** Find images **/

  // Here if you use get it will throw error as the content of the page is loading asyncronously from api call and the getAllByRole is
  // calling before the the full content getting loaded so not finding the img content.

  // const scoopImages = screen.getAllByRole('img', { name: /scoop$/i });

  // So if you have asyncronous DOM update elements we have to use await findAllByRole otherwise the test will not wait for the content
  // to get loaded.
  const scoopImages = await screen.findAllByRole('img', { name: /scoops$/i });
  expect(scoopImages).toHaveLength(2); // Checking the image count in the array is 2 or not. The image count comes from handlers.js

  /**Confirm alt text of images **/
  const altText = scoopImages.map((ele) => ele.alt);

  // Need to use toEqual as toBe works only with primitive data types.
  // toEqual works with arrays, object.
  expect(altText).toEqual(['Mint chip scoops', 'Vanilla scoops']);
});

test('display image for each topping option from the server', async () => {
  /** Render the options Component and render() is a custom render which wraps any component with OrderDetailsContext **/
  // Custom render is present in /test-utils/testing-utils.jsx
  // Reference --> https://testing-library.com/docs/react-testing-library/setup

  // Passing the prop was necessary othrwise it was throwing error
  render(<Options optionType="toppings" />);

  // Bring out all the elements in the document and check whether data came or not
  const toppingImages = await screen.findAllByRole('img', {
    name: /toppings/i,
  });
  expect(toppingImages).toHaveLength(2);

  // Filter out all the alt Text of the images and check with the array of data given within toEqual
  const toppingAlt = toppingImages.map((ele) => ele.alt);
  expect(toppingAlt).toEqual(['M&Ms toppings', 'Hot fudge toppings']);
});

test("don't update total if scoops input is invalid", async () => {
  /** Creating user **/
  const user = userEvent.setup();

  /** Render the Options component **/

  // Passing the prop was necessary othrwise it was throwing error
  render(<Options optionType="scoops" />);

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  const scoopTotal = screen.getByRole('heading', { name: /Scoops total: \$/i });

  /** Invalid Input as the value cannot be negeative and the scoop total will remain 0 **/
  await user.type(vanillaInput, '-1');
  expect(scoopTotal).toHaveTextContent(0.0);

  /** Invalid Input as the value cannot be floating point and the scoop total will remain 0 **/
  await user.type(vanillaInput, '2.5');
  expect(scoopTotal).toHaveTextContent(0.0);

  /** Invalid Input as the value cannot be greater than 10 and the scoop total will remain 0 **/
  await user.type(vanillaInput, '11');
  expect(scoopTotal).toHaveTextContent(0.0);
});
