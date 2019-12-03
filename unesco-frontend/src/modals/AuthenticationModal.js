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

  // modalToRender = (signup, signin, modalTrigger) => {
  //   if (this.state.status === 'signup') {
  //     return (
  //       // <Modal closeIcon trigger={modalTrigger()}>
  //         <Modal.Header>Welcome to UNESGO</Modal.Header>

  //         <Modal.Content>
  //           <SignUpForm signin={signin} signup={signup} />
  //           <Modal.Description>
  //             <p>
  //               Already have an account?{' '}
  //               <span onClick={this.handleLoginClick}> Login </span>
  //             </p>
  //           </Modal.Description>
  //         </Modal.Content>
  //       // </Modal>
  //     )
  //   } else {
  //     // this.state.status === 'login'
  //     return (
  //       // <Modal closeIcon trigger={modalTrigger()}>
  //         <Modal.Header>Log in to continue</Modal.Header>

  //         <Modal.Content>
  //           <SignInForm signin={signin} />
  //           <Modal.Description>
  //             <p>Don't have an account? Sign up </p>
  //           </Modal.Description>
  //         </Modal.Content>
  //       // </Modal>
  //     )
  //   }
  // }

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
              <p>
                Already have an account?{' '}
                <span onClick={this.handleLoginClick}> Login </span>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <span onClick={this.handleSignupClick}> Sign up </span>{' '}
              </p>
            )}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default AuthenticationModal
