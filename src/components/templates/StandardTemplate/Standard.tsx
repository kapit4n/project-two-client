import React from "react";
import { Header, ProfileInfo, StartPost, AddToFeed } from "components/organisms";

import { useQuery } from "@apollo/client";
import { getLocalUser } from "apollo/Operations/Client/Queries";
import { AuthService } from "services";
import { Container } from "./styles";

const StandardTemplate: React.FC = (props: any) => {
    const { children } = props;

    const { loading, error, data } = useQuery(getLocalUser);

    const login = async () => {
        try {
            await AuthService.login();
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await AuthService.logout();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container>
            <Header
                Login={login}
                Logout={logout}
                loading={loading}
                error={error}
                data={data}
            />
            <div style={{ color: "white", display: "flex" }}>
                <div
                    style={{
                        width: "20%",
                        margin: "1rem 1rem 1rem 0",
                        background: "black",
                        height: "100vh",
                    }}>
                    <ProfileInfo />
                </div>
                <div
                    style={{
                        width: "52%",
                        margin: "1rem",
                        padding: "1rem",
                        background: "black",
                        height: "100vh",
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
                    }}>
                    <AddToFeed />
                </div>
            </div>
        </Container>
    );
};

export default StandardTemplate;
