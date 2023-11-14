/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { createContext } from 'react';
import { pricePerItem } from '../../utils/PriceConstant';

export const OrderDetails = createContext();

export const OrderDetailsProvider = ({ children }) => {
    const [optionCounts, setOptionCounts] = useState({
        scoops: {},
        toppings: {},
    });

    const updateItemCount = (itemName, newItemCount, optionType) => {
        const newOptionCounts = { ...optionCounts };

        newOptionCounts[optionType][itemName] = newItemCount;

        console.log(newOptionCounts)

        setOptionCounts(newOptionCounts);
    };

    const resetOrder = () => {
        setOptionCounts({
            scoops: {},
            toppings: {},
        });
    };

    const calculateTotal = (optionType) => {
        const countsArray = Object.values(optionCounts[optionType]);

        const totalCount = countsArray.reduce((total, value) => total + value, 0);

        return totalCount * pricePerItem[optionType];
    };

    const total = {
        scoops: calculateTotal('scoops'),
        toppings: calculateTotal('toppings'),
    };

    return (
        <OrderDetails.Provider
            value={{ optionCounts, updateItemCount, resetOrder, total }}
        >
            {children}
        </OrderDetails.Provider>
    );
};
