/* eslint-disable prettier/prettier */
import { pricePerItem } from '../utils/PriceConstant';

export const calculateTotal = (optionType, optionsCount) => {
    // Get the array of counts for scoops or toppings (for example [1,2]);
    const countArray = Object.values(optionsCount[optionType]);

    const total = countArray.reduce((total, value) => total + value, 0);

    return total * pricePerItem[optionType];
};
