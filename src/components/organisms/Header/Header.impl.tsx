import React from "react";
import { Loading } from "components/atoms";
import CSS from "csstype";
import {
    HomeFilled,
    ContactsFilled,
    UsergroupAddOutlined,
    MessageFilled,
    BellFilled,
    UserOutlined,
    AppstoreOutlined,
    ProfileFilled,
} from "@ant-design/icons";
import { Alert, Button as AButton } from "antd";
import { LanguageSelector } from "components/molecules";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { HeaderProps } from "./Header.interface";

const buttonCSS: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const Header = (props: HeaderProps.IProps) => {
    const { t } = useTranslation();
    const { Login, loading, error, data, Logout } = props;

    const RenderLoginButton = () => {
        if (loading) {
            return <Loading LoadingText="Loading..." />;
        }

        if (error) {
            return <Alert message={error.message} type="error" showIcon />;
        }

        /* 
        if (data && data.localUser.isLoggedIn) {
            return <LoggedIn Logout={Logout} />;
        }

        return (
            <Button styles={{ alignSelf: "flex-end" }} Text={t("Login")} onClick={Login} />
        ); 
        */

        return (
            <>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        minWidth: "500px",
                    }}>
                    <div style={buttonCSS}>
                        <AButton
                            type="text"
                            style={{ color: "white" }}
                            icon={<HomeFilled />}
                        />
                        <span>Home</span>
                    </div>
                    <div style={buttonCSS}>
                        <AButton
                            type="text"
                            style={{ color: "white" }}
                            icon={<UsergroupAddOutlined />}
                        />
                        <span>My Network</span>
                    </div>
                    <div style={buttonCSS}>
                        <AButton
                            type="text"
                            style={{ color: "white" }}
                            icon={<ProfileFilled />}
                        />
                        <span>Jobs</span>
                    </div>
                    <div style={buttonCSS}>
                        <AButton
                            type="text"
                            style={{ color: "white" }}
                            icon={<MessageFilled />}
                        />
                        <span>Messaging</span>
                    </div>
                    <div style={buttonCSS}>
                        <AButton
                            type="text"
                            style={{ color: "white" }}
                            icon={<BellFilled />}
                        />
                        <span>Notifications</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <AButton
                            type="text"
                            style={{ color: "white" }}
                            shape="circle"
                            icon={<UserOutlined />}
                        />
                        <span>Me</span>
                    </div>

                    <div style={buttonCSS}>
                        <AButton
                            type="text"
                            style={{ color: "white" }}
                            icon={<AppstoreOutlined />}
                        />
                        <span>Work</span>
                    </div>
                </div>
            </>
        );
    };

    return (
        <Container>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
                <LanguageSelector languages={["es", "en"]} />
                <input style={{ width: "370px" }} placeholder="Search" />
                {RenderLoginButton()}
            </div>
        </Container>
    );
};

export default Header;
