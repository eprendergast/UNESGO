import React from 'react'
import API from '../API'
import { Form, Button } from 'semantic-ui-react'

class SignUpForm extends React.Component {
  state = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    formErrors: {
      email: '',
      first_name: '',
      last_name: '',
      password: ''
    }
  }

  emailRegex = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )

  handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    let formErrors = this.state.formErrors

    console.log("Name: ", name)
    console.log("Value: ", value)

    switch (name) {
      case 'first_name':
        formErrors.first_name =
          value.length < 3 
            ? 'minimum 3 characters required'
            : ''
        break
      case 'last_name':
        formErrors.last_name =
          value.length < 3 
            ? 'minimum 3 characters required'
            : ''
        break
      case 'email':
        formErrors.email =
          this.emailRegex.test(value) 
            ? ''
            : 'invalid email address'
        break
      case 'password':
        formErrors.password =
          value.length < 6 
            ? 'minimum 6 characters required'
            : ''
        break
        default:
        break
    }

    this.setState({
        formErrors, [name]: value
    }, () => console.log(this.state))

    // this.setState({
    //   [event.target.name]: event.target.value
    // })
  }

  formValid = formErrors => {
    let valid = true

    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false)
    })

    return valid
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.formValid(this.state.formErrors)) {
      console.log(this.state)
    } else {
      console.error('FORM INVALID')
    }
    // API.signup(this.state)
    //   .then(data => {
    //     if (data.error) throw Error(data.error)
    //     this.props.signin(data)
    //   })
    //   .catch(error => console.log(error))
  }

  render () {
    const { email, first_name, last_name, password, formErrors } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        <Form.Field >
          <input name='email' placeholder='Email address' value={email}  error='Please enter your last name' />
          <div className="form-error-message">{formErrors.email}</div>
        </Form.Field>


        <Form.Field>
          <input
            name='first_name'
            placeholder='First name'
            value={first_name}
          />
          <div className="form-error-message">{formErrors.first_name}</div>
        </Form.Field>

        <Form.Field>
          <input name='last_name' placeholder='Last name' value={last_name} />
          <div className="form-error-message">{formErrors.last_name}</div>
        </Form.Field>

        <Form.Field>
          <input
            name='password'
            type='password'
            placeholder='Create a Password'
            value={password}
          />
          <div className="form-error-message">{formErrors.password}</div>
        </Form.Field>

        <Button type='submit'>Sign up</Button>
      </Form>
    )
  }
}

export default SignUpForm
