import React from 'react'
import Layout from './Layout'
import ProductPage from './ProductPage'
import Comics from './Comics'

const HomePage = () => {
    return (
        <Layout>
            <ProductPage />
            <Comics />
        </Layout>
    )
}

export default HomePage
