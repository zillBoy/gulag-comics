import React from 'react'
import { Container, Image, Content, Type, Name, ReviewStarContainer, ReadTime, Industry } from './StyledComponents/ComicProduct'
import ReviewStar from './ReviewStar'
import ReadMore from './ReadMore'

const ComicProduct = ({ type, name, reviewStar, minRead, industry }) => {
    return (
        <Container>
            <Image src='https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='' />
            <Content>
                <Type>{type}</Type>
                <Name>{name}</Name>
                <ReviewStarContainer>
                    <ReviewStar count={reviewStar} />
                </ReviewStarContainer>
                <ReadTime>{minRead} min read</ReadTime>
                <Industry>{industry}</Industry>
                <ReadMore /> 
            </Content>
        </Container>
    )
}

export default ComicProduct
