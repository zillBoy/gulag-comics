import React from 'react'
import { APP_NAME } from '../assets/app/app'
import { Container, CopyRight } from './StyledComponents/Footer'
import { Brand } from './StyledComponents/Header'

const Footer = props => {
    return (
        <Container footerBottom={props.footerBottom}>
            <CopyRight>Copyright &copy; {new Date().getFullYear()}</CopyRight>
            <Brand>{APP_NAME}</Brand>
        </Container>
    )
}

export default Footer
