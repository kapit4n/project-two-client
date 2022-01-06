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
            <div style={{ color: "white", display: "flex", marginTop: "4rem" }}>
                <div
                    style={{
                        width: "20%",
                        margin: "1rem 1rem 1rem 0",
                        background: "black",
                        height: "100vh",
                        borderRadius: "10px 10px 10px",
                        border: '1px solid #898a8c',
                    }}>
                    <ProfileInfo />
                    <hr style={{borderColor: '#898a8c'}}/>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 1rem'}}>
                        <span>
                            Who viewed your profile
                        </span>
                        <span>
                            170
                        </span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 1rem'}}>
                        <span>
                            Views of your post
                        </span>
                        <span>
                            216
                        </span>
                    </div>
                    <hr style={{borderColor: '#898a8c'}}/>
                </div>
                <div
                    style={{
                        width: "52%",
                        margin: "1rem",
                        padding: "1rem",
                        background: "black",
                        height: "100vh",
                        borderRadius: "10px 10px 10px",
                        border: '1px solid #898a8c'
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
                        border: '1px solid #898a8c'
                    }}>
                    <AddToFeed />
                </div>
            </div>
        </Container>
    );
};

export default StandardTemplate;
