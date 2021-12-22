import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
    max-width: 150vh;
`;

export const Body = styled.div`
    background-color: ${props => props.theme.colors.primary};
`;
