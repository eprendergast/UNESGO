import React from 'react'
import { Modal } from 'semantic-ui-react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'

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

  handleLoginClick = () => {
    this.setState({
      status: 'login'
    })
  }

  handleSignupClick = () => {
    this.setState({
      status: 'signup'
    })
  }

  render () {
    const { signup, signin, modalTrigger } = this.props
    const { status } = this.state

    // return <div>{this.modalToRender(signup, signin, modalTrigger)}</div>
    return (
      <Modal closeIcon trigger={modalTrigger()}>
        <Modal.Header>
          {status === 'signup' ? 'Welcome to UNESGO' : 'Login to continue'}
        </Modal.Header>
        <Modal.Content>
          {status === 'signup' ? (
            <SignUpForm signin={signin} signup={signup} />
          ) : (
            <SignInForm signin={signin} />
          )}
          <Modal.Description>
            {status === 'signup' ? (
              <p className="modal-text">
                Already have an UNESGO account?{' '}
                <span className="modal-link" onClick={this.handleLoginClick}> Login </span>
              </p>
            ) : (
              <p className="modal-text">
                Don't have an account?{' '}
                <span className="modal-link" onClick={this.handleSignupClick}> Sign up </span>{' '}
              </p>
            )}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default AuthenticationModal
