import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SignUpForm from '../components/SignUpForm'

const SignUpModal = ({signup, signin}) => (
  <Modal trigger={<Button>Sign up</Button>}>
                
    <Modal.Header>Welcome to UNESGO</Modal.Header>
    
    <Modal.Content>
        <SignUpForm signin={signin} signup={signup}/>
        <Modal.Description>
          <p>Already have an account? Log in </p>
        </Modal.Description>
  </Modal.Content>

  </Modal>
)

export default SignUpModal