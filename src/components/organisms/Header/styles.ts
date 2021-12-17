import styled from "styled-components";
import { Dropdown as drpdwn } from "antd";

export const Container = styled.header`
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: #0b192e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DropDown = styled(drpdwn)`
    max-width: 150px;
    left: 409px;
    top: 1623px;
`;

export const HeaderItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    opacity: 0.5;

    .item {
        color: white;
    }
    @media (max-width: 768px) {
        .item {
            display: none;
        }
    }
    @media (max-width: 1500px) {
        .item {
            font-size: 10px;
        }
    }
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`;

export const SearchInput = styled.input`
    width: 370px;
    @media (max-width: 786px) {
        width: 200px;
    }

    @media (max-width: 500px) {
        width: 50px;
    }

    @media (max-width: 1500px) {
        width: 300px;
    }
`;
