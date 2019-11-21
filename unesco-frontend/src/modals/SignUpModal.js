import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SignUpForm from '../components/SignUpForm'
import SignInModal from './SignInModal'

const SignUpModal = ({signup}) => (
  <Modal trigger={<Button>Sign up</Button>}>
                
    <Modal.Header>Welcome to UNESGO</Modal.Header>
    
    <Modal.Content>
        <SignUpForm signup={signup}/>
        <Modal.Description>
          <p>Already have an account? <a>Log in</a> </p>
        </Modal.Description>
  </Modal.Content>

  </Modal>
)

export default SignUpModal