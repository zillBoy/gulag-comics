import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
    return (
        <>
            <Header userType={props.userType} logout={props.logout} />
            {props.children}
            <Footer footerBottom={props.footerBottom} />
        </>
    )
}

export default Layout
