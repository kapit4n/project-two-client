import React from "react";
import { Loading } from "components/atoms";
import CSS from "csstype";
import {
    HomeFilled,
    UsergroupAddOutlined,
    MessageFilled,
    BellFilled,
    UserOutlined,
    AppstoreOutlined,
    ProfileFilled,
} from "@ant-design/icons";
import { Alert, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Container, HeaderItem, SearchInput } from "./styles";
import { HeaderProps } from "./Header.interface";

const HOME_PAGE = "home";

/* const currentHeaderItem: CSS.Properties = {
    opacity: 1,
    borderBottom: "2px solid white",
    height: "3.8rem",
}; */

const Header = (props: HeaderProps.IProps) => {
    const { t } = useTranslation();
    const { Login, loading, error, data, Logout } = props;

    const [current, setCurrent] = React.useState(HOME_PAGE);

    const RenderLoginButton = () => {
        if (loading) {
            return <Loading LoadingText="Loading..." />;
        }

        if (error) {
            return <Alert message={error.message} type="error" showIcon />;
        }

        return (
            <>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        minWidth: "500px",
                    }}>
                    <HeaderItem
                        style={{ opacity: current === "home" ? "1" : "" }}
                        onClick={() => setCurrent("home")}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<HomeFilled />}
                        />
                        <span className="item">Home</span>
                    </HeaderItem>
                    <HeaderItem
                        style={{ opacity: current === "network" ? "1" : "" }}
                        onClick={() => setCurrent("network")}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<UsergroupAddOutlined />}
                        />
                        <span className="item">My Network</span>
                    </HeaderItem>
                    <HeaderItem
                        style={{ opacity: current === "jobs" ? "1" : "" }}
                        onClick={() => setCurrent("jobs")}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<ProfileFilled />}
                        />
                        <span className="item">Jobs</span>
                    </HeaderItem>
                    <HeaderItem
                        style={{ opacity: current === "messaging" ? "1" : "" }}
                        onClick={() => setCurrent("messaging")}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<MessageFilled />}
                        />
                        <span className="item">Messaging</span>
                    </HeaderItem>
                    <HeaderItem
                        style={{ opacity: current === "notifications" ? "1" : "" }}
                        onClick={() => setCurrent("notifications")}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<BellFilled />}
                        />
                        <span className="item">Notifications</span>
                    </HeaderItem>
                    <HeaderItem
                        style={{ opacity: current === "me" ? "1" : "" }}
                        onClick={() => setCurrent("me")}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            shape="circle"
                            icon={<UserOutlined />}
                        />
                        <span className="item">Me</span>
                    </HeaderItem>
                    <div style={{ border: "1px solid white", margin: "0.5rem" }} />

                    <HeaderItem
                        style={{ opacity: current === "work" ? "1" : "" }}
                        onClick={() => setCurrent("work")}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<AppstoreOutlined />}
                        />
                        <span className="item">Work</span>
                    </HeaderItem>
                </div>
            </>
        );
    };

    return (
        <Container>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
                <div style={{ padding: "0.7rem", display: "flex" }}>
                    <img
                        src="https://www.shareicon.net/data/256x256/2016/08/01/640324_logo_512x512.png"
                        style={{ width: 50 }}
                        alt="Logo"
                    />
                </div>
                <div style={{ padding: "0.7rem", display: "flex" }}>
                    <SearchInput placeholder="Search" />
                </div>
                {RenderLoginButton()}
            </div>
        </Container>
    );
};

export default Header;
