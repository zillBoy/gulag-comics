import React from 'react'
import { Container, ProductPageImage, ProductPageContainer, ProductContent, ProductHeader, ProductDescription } from './StyledComponents/ProductPage'
import Image from '../assets/images/productPage.png'

const ProductPage = () => {
    return (
        <Container>
            <ProductContent>
                <ProductHeader>Extreme Gulag Comics</ProductHeader>
                <ProductDescription>
                    Only one man can lead Hydra into a new age of dominance and superiority! The Red Skull believes that he is that man! But Captain America thinks otherwise…It's a no-holds-barred final throwdown that you will not believe!
                </ProductDescription>
            </ProductContent>
            <ProductPageContainer>
                <ProductPageImage src={Image} alt='' />
            </ProductPageContainer>
        </Container>
    )
}

export default ProductPage
