import React from 'react'
import ComicProduct from './ComicProduct'
import { Container } from './StyledComponents/Comic'

const Comics = () => {
    return (
        <Container>
            <ComicProduct
                type='Movies'
                name='DJANDO UNCHAINED'
                reviewStar={2}
                minRead={4}
                industry={'C3 Entertainment'}
            />
            <ComicProduct
                type='TV Series'
                name='Harley Queen'
                reviewStar={4}
                minRead={3}
                industry={'C3 Entertainment'}
            />
        </Container>
    )
}

export default Comics
