import React from 'react'
import API from '../API'

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
            this.props.history.push('/profile')

        }).catch(error => console.log(error))
    }

    render(){

        const {email, password} = this.state
        const {handleChange, handleSubmit} = this

        return(
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <input name="email" type="text" placeholder="email" value={email}/>
                <input name="password" type="password" placeholder="password" value={password}/>
                <input type="submit"/> 
            </form>
        )
    }

}

export default SignInForm