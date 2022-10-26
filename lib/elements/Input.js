import styled from 'styled-components';
import React from 'react';
import dayjs from "dayjs";
import PropTypes from 'prop-types';
import Cleave from 'cleave.js/react';

const DInput = styled(Cleave)`
  width:100%;
  padding: 5px;
  color: black;
  background: white;
  border: ${props => !props.showBorder ? 'none' : '1px solid'};
  border-radius: 3px;
  box-sizing : border-box;
  &:focus {
    outline: none;
  }
`;

const Input = props => {
  const { maxDate, minDate, format, ...propsInput } = props


  let maxDateValue = ''
  let minDateValue = ''
  const maxDateValueBool = dayjs(maxDate, format).isValid();
  const minDateValueBool = dayjs(minDate, format).isValid();

  if(maxDateValueBool) {
    maxDateValue = dayjs(maxDate, format).format('YYYY-MM-DD')
  }

  if(minDateValueBool) {
    minDateValue = dayjs(minDate, format).format('YYYY-MM-DD')
  }

  let options = {
    date: true,
    delimiter: '/',
    datePattern: ['m', 'd', 'Y',]  
  }

  if(maxDateValueBool && minDateValueBool)  {
    options = {
      ...options,
      dateMin: minDateValue,
      dateMax: maxDateValue,  
    }
  }
  
  
  return (
    <DInput
      {...propsInput}
      options={options}
      className={props.className}
      autocomplete="off"
    />
  );
};

Input.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

export default Input;
