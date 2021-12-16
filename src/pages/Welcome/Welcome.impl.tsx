import React from "react";
import { useTranslation } from "react-i18next";
import { StandardTemplate } from "components/templates";

// import logo from "assets/app/logo.svg";
// import { Image, Loading } from "components/atoms";
import PageTitle from "components/atoms/PageTitle";
import { Container, Anchor } from "./styles";
import { WelcomeProps } from "./Welcome.interface";

const Welcome: React.FC<WelcomeProps.IProps> = () => {
    const { t, ready } = useTranslation();

    return (
        <StandardTemplate>
            <PageTitle Title="Welcome - React Boilerplate HOME" />
            <Container className="App">
                <div>Main page should go here</div>
            </Container>
        </StandardTemplate>
    );
};

export default Welcome;
