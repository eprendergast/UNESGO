import React from 'react'
import API from '../API'
import{Form, Button} from 'semantic-ui-react'

class SignUpForm extends React.Component {

    state = {
        email: '',
        first_name: '',
        last_name: '',
        password: '' 
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        API.signup(this.state).then(data => {
            if (data.error) throw Error(data.error)
            this.props.signin(data)
        }).catch(error => console.log(error))
    }

    render(){

        const {email, first_name, last_name, password} = this.state
        const {handleChange, handleSubmit} = this

        return(
            <Form onChange={handleChange} onSubmit={handleSubmit}>
                <Form.Field>
                    <input name="email" placeholder='Email address' value={email}/>
                </Form.Field>
                
                <Form.Field>
                    <input name="first_name" placeholder='First name' value={first_name}/>
                </Form.Field>

                <Form.Field>
                    <input name="last_name" placeholder='Last name' value={last_name}/>
                </Form.Field>

                <Form.Field>
                    <input name="password" type="password" placeholder='Create a Password' value={password}/>
                </Form.Field>
                
                <Button type='submit'>Sign up</Button>
            </Form>
        )
    }

}

export default SignUpForm