import styled from "styled-components";
import { Dropdown as drpdwn, Input as ainput } from "antd";
import {
    SearchOutlined
} from "@ant-design/icons";

export const Container = styled.header`
    width: 100%;
    height: 3.5rem;
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

    .ant-btn-icon-only {
        height: 20px;
    }

    .item {
        color: white;
        font-size: 12px;
    }
    @media (max-width: 1500px) {
        padding: 0 1rem;
        .item {
            font-size: 12px;
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

export const SearchInput = styled(ainput.Search)`
    width: 370px;
    margin-left: 1rem;
    @media (max-width: 1500px) {
        width: 300px;
    }

    @media (max-width: 786px) {
        width: 100%;
    }

    @media (max-width: 500px) {
        display: none;
    }
`;

export const SearchIcon = styled(SearchOutlined)`
    font-size: 16px;
    color: #08c;
    margin-left: 1rem;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }

    @media (min-width: 500px) {
        display: none;
    }
`