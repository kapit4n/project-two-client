import styled from "styled-components";

export const Container = styled.div`
    border-radius: "10px 10px 10px";
`;

export const ImgContainer = styled.div`
    width: 100%;
    height: 4rem;
    overflow: hidden;
    border-radius: 10px 10px 10px;
`;

export const AvatarContainer = styled.div`
    position: relative;
    top: 2rem;
    margin-top: -4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 4rem;
    background: none;
    border-radius: 2px 4px 2px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 4rem;
`;

export const InfoContainer = styled.div`
    margin-top: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    flex-direction: column;
    h2 {
        color: white;
    }
    p {
        color: #d2d7d9;
    }
`;
