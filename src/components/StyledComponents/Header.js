import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #171717;
`;

export const Logo = styled.div`
    margin-left: 1%;
    & > svg {
        width: 30px;
        height: 30px;
    }
`;

export const Brand = styled.p`
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    margin-left: 1%;
`;