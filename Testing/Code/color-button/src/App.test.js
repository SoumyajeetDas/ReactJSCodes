import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCapitalLetter } from './App';
// import {logRoles} from '@testing-library/dom'


/***Functional Testing***/

// Functional testing checks the app behaviour

test('button has correct initial color and on click changes from blue to red', () => {

  /***logRoles is used to get the roles and name of the elements that can be used in the getByRole.***/
  // const {container} = render(<App/>);
  // logRoles(container);


  /***Render the virtual DOM by RTL***/
  render(<App />)


  /****find an element with role of button and find the innerText within that button is "Change to Blue".***/

  // To learn about getByRole check notes. It's a query from React Library/
  const colorButton = screen.getByRole('button', { name: "Change to Blue" });


  /*** Assertion for background colour to be red.***/

  // toHaveStyle comes usnder jest-dom. Check the github link : https://github.com/testing-library/jest-dom
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });


  /*** click button ***/
  fireEvent.click(colorButton);

  /***Assertion for backgroundcolor changes to blue from red after click***/
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  /***Assertion for changing the text content to 'Change to Red'***/
  expect(colorButton).toHaveTextContent('Change to Red');



  /***Click on the button again***/
  fireEvent.click(colorButton);

  /***Assertion for changing the button color to red after button click again***/
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  /***Assertion for changing the text content to 'Change to Blue'***/
  expect(colorButton).toHaveTextContent('Change to Blue');
});



test('initially checkbox is unchecked and button is enabled', () => {
  /*** Rendering the VDOM ***/
  render(<App />);


  /** Check if the button is enabled ***/
  const colorButton = screen.getByRole('button', { name: /^Change to/ });

  expect(colorButton).toBeEnabled();


  /*** Check if the checkbox is unchecked ***/
  const checkBox = screen.getByRole('checkbox');

  // We can add 'not' if we want to check just the opposite of what the matchers says.
  // Like here the matcher tells to check if the checkbox is checked and on adding not in the front it checks that whether the checkbox
  // is not checked.
  expect(checkBox).not.toBeChecked();

})



test('checkbox disables button on first click making the color grey and enables button on second click making the color red', () => {
  // Rendering the VDOM
  render(<App />)


  // Access the checkbox element of VDOM and click on it
  const checkBox = screen.getByRole('checkbox', { name: "Check it" });
  fireEvent.click(checkBox);


  // Check the button is disabled by access the button from VDOM and the button colour should be grey
  const coloredButton = screen.getByRole('button', { name: /^Change to/ });
  expect(coloredButton).toBeDisabled();
  expect(coloredButton).toHaveStyle({ backgroundColor: 'grey' })


  // Click Again to uncheck the checkbox
  fireEvent.click(checkBox);


  // Check the button is enabled after unchecking the checkBox and the button colour should be red
  expect(coloredButton).toBeEnabled();
  expect(coloredButton).toHaveStyle({ backgroundColor: 'red' })
});


test('button color changes from red to blue checkbox disables button on first click making the color grey and enables button on second click making the color blue', () => {

  // Render the VDOM
  render(<App />);


  // Access the button and chenge it from red to blue check
  const colouredButton = screen.getByRole('button', { name: 'Change to Blue' });
  fireEvent.click(colouredButton);

  // Access the checkbox element of VDOM and click on it
  const checkBox = screen.getByRole('checkbox', { name: "Check it" });
  fireEvent.click(checkBox);


  // Check the button is disabled by access the button from VDOM and the button colour should be grey
  const coloredButton = screen.getByRole('button', { name: /^Change to/ });
  expect(coloredButton).toBeDisabled();
  expect(coloredButton).toHaveStyle({ backgroundColor: 'grey' })


  // Click Again to uncheck the checkbox
  fireEvent.click(checkBox);


  // Check the button is enabled after unchecking the checkBox and the button colour should be blue
  expect(coloredButton).toBeEnabled();
  expect(coloredButton).toHaveStyle({ backgroundColor: 'blue' })

});



/*** describe is used to group together several related test. ***/


// Here describe is used to test the corner cases of the function replaceCapitalLetter.
describe('spaces-between-capital-letters', () => {
  test('Works for no inner capial letters', () => {

    // toBe to compare primitive values or to check referential identity of object instances.
    // It calls Object.is to compare values, which is even better for testing than === strict equality operator.
    // Can't be used with floating points
    expect(replaceCapitalLetter("Red")).toBe("Red")
  });

  test('Works for one inner capial letters', () => {
    expect(replaceCapitalLetter("MidnightBlue")).toBe("Midnight Blue")
  });

  test('Works for multiple inner capial letters', () => {
    expect(replaceCapitalLetter("MediumVioletRed")).toBe("Medium Violet Red")
  });
})