import styled from "styled-components";

export const Container = styled.div`
    margin-left: 10%;
    padding-top: 2%;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5vh;
    font-weight: 600;
`;

export const Input = styled.input`
    width: ${props => props.width ? props.width : '88%'};
    border: none;
    padding: 1vh 0px;
    border-radius: 4px;
    border-top-right-radius: ${props => props.borderTopRight ? props.borderTopRight : '4px'};
    border-bottom-right-radius: ${props => props.borderBottomRight ? props.borderBottomRight : '4px'};
    padding-left: 2%;
    color: #444444;
`;

export const Icon = styled.div`
    display: inline;
    background-color: #171717;
    color: #EDEDED;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 6px;
    position: relative;
    top: 2px;

    & > svg {
        position: relative;
        top: 2px;
    }

`;