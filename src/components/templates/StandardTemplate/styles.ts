import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    //height: 100%;
    background-color: ${props => props.theme.colors.primary};

    & .main-container {
        color: white; 
        display: flex; 
        margin-top: 4rem;
        justify-content: center;
        padding: 1rem;
    }
`;

export const Body = styled.div`
    background-color: ${props => props.theme.colors.primary};
`;
