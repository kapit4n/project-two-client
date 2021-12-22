import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const StartPostInput = styled.input`
    width: 100%;
    border-radius: 15px 15px;
    margin: 0.4rem;
    height: 3rem;
    padding: 1rem;
    &:hover {
        cursor: pointer;
    }
`;

export const StartPostAvatar = styled.img`
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 0.5rem;
`;
