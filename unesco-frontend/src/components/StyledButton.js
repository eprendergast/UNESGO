import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`

  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  onClick: ${props => props.primary && alert("Clicked!") };

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// render(
//     <div>
//       <Button>Normal</Button>
//       <Button primary>Primary</Button>
//   </div>);

  export default StyledButton