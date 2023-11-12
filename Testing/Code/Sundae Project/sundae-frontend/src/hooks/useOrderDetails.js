/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { OrderDetails } from '../components/context/OrderDetailsContext.jsx';

// Custom Hook to check whether we are in a provider
export const useOrderDetails = () => {
    const context = useContext(OrderDetails);

    if (!context) {
        throw Error('Component should be wrapped in Provider');
    }

    return context;
};
