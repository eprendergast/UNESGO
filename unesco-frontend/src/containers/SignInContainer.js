import React from 'react'
import SignInForm from '../components/SignInForm'

const SignInContainer = (props) => {
    return (
        <div>
            < SignInForm signin={props.signin} />
        </div>
    )
}

export default SignInContainer

