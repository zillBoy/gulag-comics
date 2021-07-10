import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, LogoDiv, Logo, Brand, Text } from './StyledComponents/Header'
import { ReactComponent as Image } from '../assets/images/brand.svg'
import { APP_NAME } from '../assets/app/app'

const Header = props => {
    
    const history = useHistory()

    const logoutHandler = () => {
        if (props.userType === 'admin') {
            localStorage.removeItem('admin')
            history.replace('/')
        } else if (props.userType === 'user') {
            localStorage.removeItem('comicUser')
            history.replace('/')
        }
    }
    
    return (
        <Container>
            <LogoDiv>
                <Logo>
                    <Image />
                </Logo>
                <Brand width={'150px'}>{APP_NAME}</Brand>
            </LogoDiv>
            {props.logout ? <Text onClick={logoutHandler}>Logout</Text> : <p></p>}
        </Container>
    )
}

export default Header
