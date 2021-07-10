import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1%;
    background-color: #171717;
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
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
    width: ${props => props.width && '150px'};
`;

export const Text = styled.p`
    color: #fff;
    cursor: pointer;
`