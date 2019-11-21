import React from 'react'
import API from '../API'
import{ Form, Button } from 'semantic-ui-react'

class SignInForm extends React.Component {

    state = {
        email: '',
        password: '' 
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        API.signin(this.state.email, this.state.password).then(data => {
            if (data.error) throw Error(data.error)
            this.props.signin(data)

        }).catch(error => console.log(error))
    }

    render(){

        const {email, password} = this.state
        const {handleChange, handleSubmit} = this

        return(
            <Form onChange={handleChange} onSubmit={handleSubmit}>
                <Form.Field>
                    <input name="email" placeholder='Email address' value={email}/>
                </Form.Field>

                <Form.Field>
                    <input name="password" type="password" placeholder='Password' value={password}/>
                </Form.Field>
                
                <Button type='submit'>Log in</Button>
            </Form>
        )
    }

}

export default SignInForm