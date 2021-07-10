import React, { useRef, useState } from 'react'
import { Container, Header, Button, ButtonDiv, TextDiv, Text, Link } from './StyledComponents/LoginForm'
import InputContent from './InputContent'
import { Eye, EyeOff } from 'react-feather'

const LoginForm = () => {
    
    const emailRef = useRef()
    const passwordRef = useRef()

    const [showPass, setShowPass] = useState(false)

    const loginHandler = () => {
        console.log('login handler')
    }

    return (
        <Container>
            <Header>Login</Header>

            <InputContent
                id='login_email'
                type='email'
                inputRef={emailRef}
                label='Email'
                placeholder='Enter email'
                autoFocus={true}
            />
            <InputContent
                id='login_password'
                type='password'
                inputRef={passwordRef}
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

            <ButtonDiv>
                <Button onClick={loginHandler}>Login</Button>
            </ButtonDiv>

            <TextDiv>
                <Text>Don't have an account?
                    <Link>Register</Link>
                </Text>
            </TextDiv>

        </Container>
    )
}

export default LoginForm
