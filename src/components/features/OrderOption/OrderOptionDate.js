import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div className={styles.component}>
    <DatePicker
      selected={currentValue}
      onChange={date => setOptionValue(date)}
      minDate={new Date}
      placeholderText="Select a date"
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;