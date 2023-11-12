import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../src/components/context/OrderDetailsContext.jsx';

// Reference ==> https://testing-library.com/docs/react-testing-library/setup

const renderWithCOntext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everything
export * from '@testing-library/dom';

// override render method
export { renderWithCOntext as render };
