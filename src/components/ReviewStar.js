import React from 'react'
import { Container, FillStar, OutlineStar } from './StyledComponents/ReviewStar'
import FStar from '../assets/images/fillstar.png'
import OStar from '../assets/images/outlinestar.png'

const ReviewStar = ({count}) => {
    const leftCount = 5 - count

    return (
        <>
            {count >= 0 && count <= 5 && <Container>
                {[...Array(count)].map((e, i) => <FillStar key={i} src={FStar} alt='' />)}
                {[...Array(leftCount)].map((e, i) => <OutlineStar key={i} src={OStar} alt='' />)}
            </Container>}
        </>
    )
}

export default ReviewStar
