import styled from "styled-components";

export const Container = styled.div`
    background-color: #000;
    height: 92.5vh;
`;

export const ProductPageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10%;

    @media (max-width: 668px) {
        margin-right: 0%;
    }
`;

export const ProductPageImage = styled.img`
    width: 38%;
    object-fit: cover;

    @media (max-width: 668px) {
        width: 64%;
    }
`;

export const ProductContent = styled.div`
    position: absolute;
    top: 20%;
    left: 5%;
    width: 40%;
`;

export const ProductHeader = styled.h1`
    color: #EDEDED;
    font-size: 38px;
`;

export const ProductDescription = styled.p`
    color: #EDEDED;
    font-size: 18px;
`;