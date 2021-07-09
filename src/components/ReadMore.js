import React from 'react'
import { Container, Text, ImageContainer, Image } from './StyledComponents/ReadMore'
import ChevronRight from '../assets/images/chevronRight.png'

const ReadMore = () => {
    return (
        <Container>
            <Text>Read More</Text>
            <ImageContainer>
                <Image src={ChevronRight} alt='chevron right' />
            </ImageContainer>
        </Container>
    )
}

export default ReadMore
