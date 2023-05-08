import React from "react";
import { useTranslation } from "react-i18next";
import { StandardTemplate } from "components/templates";

import PageTitle from "components/atoms/PageTitle";
import { AddToFeed, ProfileInfo, StartPost } from "components/organisms";
import { Container, Anchor } from "./styles";
import { WelcomeProps } from "./Welcome.interface";

const Welcome: React.FC<WelcomeProps.IProps> = () => {
    const { t, ready } = useTranslation();

    return (
        <StandardTemplate>
            <PageTitle Title="Welcome - React Boilerplate HOME" />
            <Container>
                <div
                    style={{
                        width: "20%",
                        margin: "1rem 1rem 1rem 0",
                        background: "black",
                        height: "100vh",
                        borderRadius: "10px 10px 10px",
                        border: "1px solid #898a8c",
                    }}>
                    <ProfileInfo />
                    <hr style={{ borderColor: "#898a8c" }} />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0 1rem",
                        }}>
                        <span>Who viewed your profile</span>
                        <span>170</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0 1rem",
                        }}>
                        <span>Views of your post</span>
                        <span>216</span>
                    </div>
                    <hr style={{ borderColor: "#898a8c" }} />
                </div>
                <div
                    style={{
                        width: "52%",
                        margin: "1rem",
                        padding: "1rem",
                        background: "black",
                        height: "100vh",
                        borderRadius: "10px 10px 10px",
                        border: "1px solid #898a8c",
                    }}>
                    <StartPost />
                </div>
                <div
                    style={{
                        width: "28%",
                        margin: "1rem 0 1rem 1rem",
                        padding: "1rem",
                        background: "black",
                        height: "100vh",
                        borderRadius: "10px 10px 10px",
                        border: "1px solid #898a8c",
                    }}>
                    <AddToFeed />
                </div>
            </Container>
        </StandardTemplate>
    );
};

export default Welcome;
