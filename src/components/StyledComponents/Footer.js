import styled from "styled-components";

export const Container = styled.div`
    
    color: ${props => props.theme.main};

    position: ${props => props.footerBottom && 'absolute'};
    bottom: ${props => props.footerBottom && '0%'};

    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 1%;
    background-color: #DA0037;
`;

export const CopyRight = styled.div`
    color: #fff;
`;