import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    margin: 2%;
`;

export const Image = styled.img`
    width: 250px;
    object-fit: cover;
`;

export const Content = styled.div`
    background-color: #fff;
    width: 400px;
    box-shadow: 8px 8px 25px -11px #ccc;
    padding-left: 5%;
`;

export const Type = styled.p`
    color: #848D99;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1.2px;

    position: relative;
    top: 8%;
`;

export const Name = styled.h2`
    color: #000;
    font-weight: bold;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
`;

export const ReviewStarContainer = styled.div`
    position: relative;
    top: -6%;
`;

export const ReadTime = styled.div`
    font-weight: lighter;
    color: #aaa;
    position: relative;
    top: -2%;
`;

export const Industry = styled.div`
    color: #444444;
    position: relative;
    top: 2%;
`;