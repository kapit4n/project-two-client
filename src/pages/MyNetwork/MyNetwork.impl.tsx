import React from "react";
import { useTranslation } from "react-i18next";
import { StandardTemplate } from "components/templates";

// import logo from "assets/app/logo.svg";
// import { Image, Loading } from "components/atoms";
import PageTitle from "components/atoms/PageTitle";
import { Container, Anchor } from "./styles";
import { MyNetworkProps } from "./MyNetwork.interface";

const MyNetwork: React.FC<MyNetworkProps.IProps> = () => {
    const { t, ready } = useTranslation();

    return (
        <StandardTemplate>
            <PageTitle Title="MyNetwork - React Boilerplate HOME" />
            <Container className="App" />
        </StandardTemplate>
    );
};

export default MyNetwork;
