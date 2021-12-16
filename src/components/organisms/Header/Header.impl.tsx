import React from "react";
import { Loading } from "components/atoms";
import {
    HomeFilled,
    ContactsFilled,
    UsergroupAddOutlined,
    MessageFilled,
    BellFilled,
    UserOutlined,
    NotificationFilled,
} from "@ant-design/icons";
import { Alert, Button as AButton } from "antd";
import { LanguageSelector } from "components/molecules";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { HeaderProps } from "./Header.interface";

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
                        minWidth: "400px",
                    }}>
                    <AButton type="text" style={{ color: "white" }} icon={<HomeFilled />} />
                    <AButton
                        type="text"
                        style={{ color: "white" }}
                        icon={<ContactsFilled />}
                    />
                    <AButton
                        type="text"
                        style={{ color: "white" }}
                        icon={<UsergroupAddOutlined />}
                    />
                    <AButton
                        type="text"
                        style={{ color: "white" }}
                        icon={<MessageFilled />}
                    />
                    <AButton type="text" style={{ color: "white" }} icon={<BellFilled />} />
                    <AButton
                        type="text"
                        style={{ color: "white" }}
                        shape="circle"
                        icon={<UserOutlined />}
                    />
                    <AButton
                        type="text"
                        style={{ color: "white" }}
                        icon={<NotificationFilled />}
                    />
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
