import React from 'react'
import { Modal } from 'semantic-ui-react'
import SignInForm from '../components/SignInForm'

const SignInModal = ({ signin, modalTrigger }) => (
  <Modal closeIcon trigger={modalTrigger()}>
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
