import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`

  background: ${props => props.primary ? "var(--primary-pink)" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

  export default Button