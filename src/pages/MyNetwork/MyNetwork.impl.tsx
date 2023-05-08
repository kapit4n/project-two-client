import React from "react";
import { useTranslation } from "react-i18next";
import { StandardTemplate } from "components/templates";

import PageTitle from "components/atoms/PageTitle";
import {
    Container,
    LinksList,
    LeftSide,
    SubTitle,
    MainTitle,
    MainContainer,
    PeopleContainer,
    PeopleInfo,
    LinkItem,
} from "./styles";
import { MyNetworkProps } from "./MyNetwork.interface";

const MyNetwork: React.FC<MyNetworkProps.IProps> = () => {
    const { t, ready } = useTranslation();

    const networkUsers = [
        {
            name: "Luis Arce",
        },
        {
            name: "Juan Arce",
        },
        {
            name: "Hansel Arce",
        },
        {
            name: "Julian Claros",
        },
        {
            name: "Maria Claros",
        },
        {
            name: "Silvia Arce",
        },
    ];

    const links = [
        {
            name: "Connections",
            count: 4465,
        },
        {
            name: "Contacts",
            count: 2044,
        },
        {
            name: "People I Follow",
            count: 80,
        },
        {
            name: "Groups",
            count: 16,
        },
    ];

    return (
        <StandardTemplate>
            <PageTitle Title="MyNetwork - React Boilerplate HOME" />
            <Container className="App">
                <LeftSide>
                    <SubTitle>Manage my network</SubTitle>

                    <LinksList>
                        {links.map(link => (
                            <LinkItem>
                                <img
                                    src="https://www.shutterstock.com/image-vector/landscape-photo-image-picture-placeholder-260nw-272872412.jpg"
                                    alt={link.name}
                                />
                                <div className="link-item-count">
                                    <span>{link.name}</span>
                                    <span>{link.count}</span>
                                </div>
                            </LinkItem>
                        ))}
                    </LinksList>
                </LeftSide>
                <MainContainer>
                    <MainTitle>People in human resource industry you may know</MainTitle>
                    <PeopleContainer>
                        {networkUsers.map(networkUser => (
                            <PeopleInfo>
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/003/337/634/small/profile-placeholder-default-avatar-vector.jpg"
                                    alt={networkUser.name}
                                />
                                <h3>{networkUser.name}</h3>
                                <span>Talent consultant Manager</span>
                                <span>Based on your profile</span>
                                <button type="button">Connect</button>
                            </PeopleInfo>
                        ))}
                    </PeopleContainer>
                </MainContainer>
            </Container>
        </StandardTemplate>
    );
};

export default MyNetwork;
