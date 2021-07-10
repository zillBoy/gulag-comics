import styled from "styled-components";

export const Container = styled.div`
    background-color: #EDEDED;
    width: 500px;
    margin: 100px auto;
    color: #171717;
    border-radius: 8px;
    box-shadow: 0px 0px 4px #ccc;

    @media (max-width: 668px) {
        border-radius: 0px;
        width: 100%;
        box-shadow: none;
        position: absolute;
        top: -6%;
        padding-top: 130px;
        bottom: -6%;
    }
`;

export const Header = styled.h3`
    color: #444444;
    text-transform: uppercase;
    font-size: 24px;
    text-align: center;
    padding-top: 4%;
`;

export const Button = styled.button`
    border: none;
    color: #fff;
    background-color: #171717;
    width: 100px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease;
    border: 2px solid #171717;

    &:hover {
        color: #171717;
        background-color: #fff;
    }

`;

export const ButtonDiv = styled.div`
    text-align: center;
    padding: 5% 0;
`;

export const TextDiv = styled.div`
    padding-bottom: 2%;
`;

export const Text = styled.p`
    text-align: center;
`;

export const Link = styled.a`
    text-decoration: underline;
    margin-left: 1%;
    cursor: pointer;
`;

export const ErrorMessage = styled.p`
    text-align: center;
    color: #fff;
    background-color: rgb(218,0,55, 0.9);
    width: 50%;
    margin: 0 auto;
    padding: 5px 10px;
    border-radius: 4px;
    margin-top: 4%;
`;

// #444444
// #171717