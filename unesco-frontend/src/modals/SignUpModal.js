import React from 'react'
import { Modal } from 'semantic-ui-react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'
import SignInModal from './SignInModal'


class AuthenticationModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: this.props.status // can be signup or login
    }
  }

  loginLink = () => {
    return <span>Login</span>
  }

  signupLink = () => {
    return <span>Sign up</span>
  }

  modalToRender = (signup, signin, modalTrigger) => {
    if (this.state.status === 'signup') {
      return (
        <Modal closeIcon trigger={modalTrigger()}>
          <Modal.Header>Welcome to UNESGO</Modal.Header>

          <Modal.Content>
            <SignUpForm signin={signin} signup={signup} />
            <Modal.Description>
              <p>
                Already have an account?{' '}
                <SignInModal signin={signin} modalTrigger={this.loginLink} />{' '}
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      )
    } else {
      // this.state.status === 'login'
      return (
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
    }
  }

  render () {
    const { signup, signin, modalTrigger } = this.props
    const { status } = this.state

    return (
      <div>
         { this.modalToRender(signup, signin, modalTrigger) }
      </div>

    )
  }
}

export default AuthenticationModal
