import React, { useState, useEffect } from 'react'
import { Eye, EyeOff } from 'react-feather'
import { useHistory } from 'react-router-dom'
import { Container, Header, Button, ButtonDiv, TextDiv, Text, Link, ErrorMessage } from './StyledComponents/LoginForm'
import InputContent from './InputContent'
import firebase from '../firebase'

const LoginForm = props => {
    
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [showPass, setShowPass] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        setMessage('')
    }, [email, pass])

    const loginHandler = () => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {

                if (props.userType === 'admin') {
                    localStorage.setItem('admin', JSON.stringify({ name: 'admin' }))
                    history.push('/admin')
                } else if (props.userType === 'user') {
                    localStorage.setItem('comicUser', JSON.stringify({ name: 'comicUser' }))
                    history.push('/user')
                } else {
                    localStorage.setItem('comicUser', JSON.stringify({ name: 'comicUser' }))
                    history.push('/user')
                }
                
            }).catch(err => {
                console.log(err.message)
                setMessage('Invalid email or password!')
        })
    }

    return (
        <Container>
            <Header>Login</Header>

            <InputContent
                id='login_email'
                type='email'
                name={email}
                setName={setEmail}
                label='Email'
                placeholder='Enter email'
                autoFocus={true}
            />
            <InputContent
                id='login_password'
                type='password'
                name={pass}
                setName={setPass}
                label='Password'
                placeholder='Enter password'
                width={'82%'}
                borderTopRight={'0px'}
                borderBottomRight={'0px'}
                showPass={showPass}
                setShowPass={setShowPass}
            >
                {showPass ? <Eye size='16' /> : <EyeOff size='16' /> } 
            </InputContent>

            {message.length !== 0 && <ErrorMessage>{message}</ErrorMessage>}

            <ButtonDiv>
                <Button onClick={loginHandler}>Login</Button>
            </ButtonDiv>

            {props.userType !== 'admin' && <TextDiv>
                <Text>Don't have an account?
                    <Link>Register</Link>
                </Text>
            </TextDiv>}
            
        </Container>
    )
}

export default LoginForm
