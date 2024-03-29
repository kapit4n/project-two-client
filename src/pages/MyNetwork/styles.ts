import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    color: white;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;
    width: 1400px;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: black;
    border-radius: 10px 10px 10px;
`;

export const LinksList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const LinkItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1rem;
    border-bottom: 1px solid white;

    img {
        width: 20px;
    }

    .link-item-count {
        display: flex;
        justify-content: space-between;
    }
`;

export const SubTitle = styled.h3`
    color: white;
`;

export const MainTitle = styled.h3`
    color: white;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 1rem;
    border-radius: 10px 10px 10px;
`;

export const PeopleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
`;

export const PeopleInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    padding: 1rem 0;
    border: 1px solid white;
    gap: 0.3rem;

    img {
        width: 50%;
        font-weight: bold;
        border-radius: 15px;
    }

    h3 {
        color: white;
    }

    button {
        color: black;
        padding: 0.1rem 0.5rem;
    }
`;
