/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import Options from './Options.jsx';
import axios from 'axios';
import ScoopOptions from './ScoopOptions.jsx';
import ToppingOptions from './ToppingOptions.jsx';
import AlertBanner from '../common/AlertBanner.jsx';
import { pricePerItem } from '../../utils/PriceConstant.js';
import { useOrderDetails } from '../../hooks/useOrderDetails.js';

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [showError, setShowError] = useState(false);

  // Get the global data on the order
  let { total } = useOrderDetails();

  useEffect(() => {
    // console.log(optionType);

    let url = '';

    if (optionType === 'scoops') {
      url = `http://localhost:3030/api/v1/flavour/${optionType}`;
    } else {
      url = `http://localhost:3030/api/v1/topping/${optionType}`;
    }

    (async () => {
      // Need to use AbortController to restrict network calls if the component gets unmounted before the network call is finished.
      // Reference --> https://cognizant.udemy.com/course/react-testing-library/learn/lecture/24450886#overview

      const controller = new AbortController();
      try {
        // let res = await axios(url, {
        //   method: 'GET',
        //   headers: {
        //     Accept: 'application/json',
        //   },
        // });

        let res = await axios.get(url, { signal: controller.signal });

        // console.log(res.data.data);

        setItems(res.data.data);
      } catch {
        setShowError(true);
      }

      return () => {
        controller.abort();
      };
    })();
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions;

  return (
    <Container className="mb-3">
      <h1>{optionType[0].toUpperCase() + optionType.slice(1)}</h1>
      <h4>${(pricePerItem[optionType] * 1).toFixed(2)} each</h4>
      <h4>
        {optionType[0].toUpperCase() + optionType.slice(1)} total: $
        {(total[optionType] * 1).toFixed(2)}
      </h4>
      <Row>
        {!showError ? (
          items.map((item) => (
            <ItemComponent
              key={item.name}
              optionType={optionType}
              item={item}
            />
          ))
        ) : (
          <AlertBanner />
        )}
      </Row>
    </Container>
  );
};

export default Options;
