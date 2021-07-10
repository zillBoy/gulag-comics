import React from 'react'
import Layout from './Layout'
import LoginForm from './LoginForm'

const Login = props => {

    let userType = ''
    if (props.location.state !== undefined) {
        userType = props.location.state.userType
    }

    return (
        <Layout footerBottom={true}>
            <LoginForm userType={userType} />
        </Layout>
    )
}

export default Login
