import React from 'react'
import Styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

// const PrimaryButton = ({ children, ...props }) => (
//   <button
//     style={{
//       background: '#ff6070',
//       borderRadius: '10px',
//       textAlign: 'center',
//       fontSize: '1.2rem',
//       ...props.style
//     }}
//     {...props}
//   >
//     {children}
//   </button>
// )

const PrimaryButton = Styled.button`
    background: #ff6070;
    border-radius: 10px;
    text-align: center;
    font-size: ${props => (props.big ? '3rem' : '1.2rem')};
    padding: 10px;
    transition: 500ms;

    &:hover {
        background: #ffaaaa;
        animation: ${spin} 1s infinite alternate;
    }
`

export default PrimaryButton
