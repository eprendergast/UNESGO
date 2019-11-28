import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SignInForm from '../components/SignInForm'

const SignInModal = ({ signin }) => (
  <Modal trigger={<button className='navbar-button'>Login</button>}>
    <Modal.Header>Log in to continue</Modal.Header>

    <Modal.Content>
      <SignInForm signin={signin} />
      <Modal.Description>
        <p>Don't have an account? Sign up </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default SignInModal
