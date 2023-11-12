import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import SummaryForm from '../SummaryForm.jsx';
import userEvent from '@testing-library/user-event';

test('initial configuration of checkbox and button', () => {
  /** Render the SummaryForm Component **/

  // Passing props is not required in the Summary Form Component
  render(<SummaryForm />);

  /** Access the button and check whether it is disabled **/
  const orderButton = screen.getByRole('button', { name: 'Confirm Order' });
  expect(orderButton).toBeDisabled();

  /** Access the checkbox and check whether it is disabled **/
  const aggreeCheckBox = screen.getByRole('checkbox', {
    name: 'I agree Terms & Condition',
  });
  expect(aggreeCheckBox).not.toBeChecked();
});

test('checking and unchecking the checkbox enables and disables the button', async () => {
  /** Setting the user by creating the user-event. You can think like an user is created with which we can mock the interaction.**/
  const user = userEvent.setup();

  /** Render the SummaryForm **/
  // Passing props is not required in the Summary Form Component
  render(<SummaryForm />);

  /** Access the checkbox and button **/
  const orderButton = screen.getByRole('button', { name: 'Confirm Order' });
  const aggreeCheckBox = screen.getByRole('checkbox', {
    name: 'I agree Terms & Condition',
  });

  /** Check the checkbox and enable the button **/

  // We will use userEvent and not fireEvent, to understand that check notes
  // fireEvent.click(aggreeCheckBox);

  // click() is Convenience API
  await user.click(aggreeCheckBox);
  expect(orderButton).toBeEnabled();

  /** Check the checkbox and disable the button **/

  // We will use userEvent and not fireEvent, to understand that check notes
  // fireEvent.click(aggreeCheckBox);

  // click() is convenience API
  await user.click(aggreeCheckBox);
  expect(orderButton).toBeDisabled();
});

// Popover Test
test('popover responds to hover', async () => {
  // Setting the instance of the user
  const user = userEvent.setup();

  /**Render the VDOM**/
  // Passing props is not required in the Summary Form Component
  render(<SummaryForm />);

  /**popover is hidden initially**/

  // We used queryByText here as we expect element not to be in DON
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i,
  );
  expect(nullPopover).not.toBeInTheDocument();

  /**popover appears on mousehover of checkbox label**/

  // We cannot use getLabelByText heere and we have to use getByText.
  // The reson is within the <label></label> there is a <span></span> so it is not able to understand.
  // With the help of getByText we can bring any element which is having the text in the innerHTML.

  // const termsandcondition = screen.getByLabelText(/I agree Terms & Condition/i);
  const termsandcondition = screen.getByText(/I agree Terms & Condition/i);

  // hover() comes under convenience API
  await user.hover(termsandcondition);

  // Instead of using a nullpopover we brought a new instance of popover using getByText as we are expecting the popover in the document.
  // expect(nullPopover).toBeInTheDocument();
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  /**popover disappers when we mouseout**/

  // unhover() comes under convenience API
  await user.unhover(termsandcondition);

  // If the popover goes just we unhover then we have to use not.toBeInTheDocument()
  // expect(popover).not.toBeInTheDocument();

  // If the popover stays for a certain amout of time then we can use waitForElementToBeRemoved().
  // To wait for the removal of element(s) from the DOM you can use waitForElementToBeRemoved.
  // The waitForElementToBeRemoved function is a small wrapper around the waitFor utility.
  // Reference --> https://testing-library.com/docs/dom-testing-library/api-async
  await waitForElementToBeRemoved(
    () => screen.queryByText(/no ice cream will actually be delivered/i),
    // { onTimeout: (err) => console.log(err) },
  );
});
