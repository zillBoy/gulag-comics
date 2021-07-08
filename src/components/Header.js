import React from 'react'
import { Container, Logo, Brand } from './StyledComponents/Header'
import { ReactComponent as Image } from '../assets/images/brand.svg'
import { APP_NAME } from '../assets/app/app'

const Header = () => {
    return (
        <Container>
            <Logo>
                <Image />
            </Logo>
            <Brand>{APP_NAME}</Brand>
        </Container>
    )
}

export default Header
