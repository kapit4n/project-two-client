import styled from "styled-components";
import { Dropdown as drpdwn } from "antd";
import { Input as ainput } from "antd";

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
    @media (max-width: 1500px) {
        padding: 0 1rem;
        .item {
            font-size: 10px;
        }
    }
    @media (max-width: 768px) {
        padding: 0 0.2rem;
        .item {
            display: none;
        }
    }
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`;

export const SearchInput = styled(ainput)`
    width: 370px;
    margin-left: 1rem;
    @media (max-width: 1500px) {
        width: 300px;
    }

    @media (max-width: 786px) {
        width: 100%;
    }

    @media (max-width: 500px) {
        width: 5rem;
    }
`;
