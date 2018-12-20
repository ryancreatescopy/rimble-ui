import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

import {
  space,
  width,
  borders,
  borderColor,
  borderRadius,
  boxShadow
} from 'styled-system'

const validationColor = (validationState) => {
  let color = '';

  switch (validationState) {
    case 'success':
      color = '#28C081'
      break;
    case 'warning':
      color = '#FD9D28'
      break;
    case 'error':
      color = '#DC2C10'
      break;
    default:
      color = ''
  }

  return color;
}

const Input = styled.input`
  appearance: none;
  font-size: 1rem;
  line-height: 1;

  height: 48px;
  padding: 0 1rem;

  border: 1px solid;
  background: #FFFFFF;

  ${space}
  ${width}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}

  ${'' /* border-width: ${props => props.validationState ? '2px' : '1px'} ; */}
  ${'' /* border-color: ${props => validationColor(props.validationState)}; */}

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
    border-color: #5436D6;
  }
  &:active {

  }
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:focus:invalid {
    border-color: ${props => validationColor('error')};
  }
  ${'' /* &:valid {
    border-color: ${props => validationColor('success')};
  } */}
`

Input.defaultProps = {
  theme: theme,
  borders: 0,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1
}

Input.displayName = 'Input'

export default Input
