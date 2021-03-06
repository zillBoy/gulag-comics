import React from 'react'
import Layout from './Layout'

const AdminPage = () => {
    return (
        <>
            <Layout userType='admin' logout={true}>
                <p>This is the admin page</p>
                <p>The user is logged in at the moment</p>
            </Layout>
        </>
    )
}

export default AdminPage
