import styled from "styled-components";

export const Container = styled.div`
    color: white;
    gap: 1rem;
    display: flex;
    height: 100%;
    width: 1400px;
`;

export const LeftSidebar = styled.div`
    background: black;
    border-radius: 10px 10px 10px;
    border: 1px solid #898a8c;
    height: 100vh;
    width: 20%;

    & hr {
        border-color: #898a8c;
    }

    & .views-on-profile {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }

    & .views-on-posts {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }
`;

export const MainSidebar = styled.div`
    padding: 1rem;
    background: black;
    border-radius: 10px 10px 10px;
    border: 1px solid #898a8c;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: max-content;
    width: 52%;
    
`;

export const RightSidebar = styled.div`
    background: black;
    border-radius: 10px 10px 10px;
    border: 1px solid #898a8c;
    height: 100vh;
    padding: 1rem;
    width: 28%;
`;