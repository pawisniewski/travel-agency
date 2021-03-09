import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if(
    options.name !== '' && options.contact !== ''){

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
  else {
    alert('Please enter "Your name" and "Contact info"');
  }
};

const OrderForm = ({tripCost, options, setOrderOption, tripId, tripName, countryCode}) => (

  <Row>
    {pricing.map((option) => (
      <Col md={4} key={option.id}>
        <OrderOption
          currentValue={options[option.id]}
          setOrderOption={setOrderOption}
          {...option}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary
        tripCost={tripCost}
        options={options}
      />
      <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;