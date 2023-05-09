import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const PostListItem = styled.div`
    border-radius: 15px 15px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    & .post-header {
        display: flex;
        gap: 1rem;
    }

    & .post-description {
       
    }
`