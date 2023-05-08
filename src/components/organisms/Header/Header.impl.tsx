import React from "react";
import { Loading } from "components/atoms";
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
import { useLocation, useHistory } from "react-router-dom";
import { HeaderItem, SearchIcon, SearchInput } from "./styles";
import { HeaderProps } from "./Header.interface";

import "./styles.css";

const HOME_PAGE = "home";
const NOTIFICATION_PAGE = "notifications";
const JOBS_PAGE = "jobs";
const MESSAGING_PAGE = "messaging";
const NETWORK_PAGE = "mynetwork";
const ME_PAGE = "me";
const WORK_PAGE = "work";

const Header = (props: HeaderProps.IProps) => {
    const { t } = useTranslation();
    const { Login, loading, error, data, Logout } = props;
    const history = useHistory();
    const location = useLocation();

    React.useEffect(() => {
        setCurrent(location?.pathname.replace("/", ""));
    }, [location]);

    const [current, setCurrent] = React.useState(HOME_PAGE);

    const redirectTo = (path: string) => {
        history.push(`/${path}`);
    };

    const RenderRightLinks = () => {
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
                    }}>
                    <HeaderItem
                        onClick={() => redirectTo(HOME_PAGE)}
                        className={current === HOME_PAGE ? "active" : "not-active"}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<HomeFilled />}
                        />
                        <span className="item">Home</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === NETWORK_PAGE ? "active" : "not-active"}
                        onClick={() => redirectTo(NETWORK_PAGE)}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<UsergroupAddOutlined />}
                        />
                        <span className="item">My Network</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === JOBS_PAGE ? "active" : "not-active"}
                        onClick={() => redirectTo(JOBS_PAGE)}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<ProfileFilled />}
                        />
                        <span className="item">Jobs</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === MESSAGING_PAGE ? "active" : "not-active"}
                        onClick={() => redirectTo(MESSAGING_PAGE)}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<MessageFilled />}
                        />
                        <span className="item">Messaging</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === NOTIFICATION_PAGE ? "active" : "not-active"}
                        onClick={() => redirectTo(NOTIFICATION_PAGE)}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<BellFilled />}
                        />
                        <span className="item">Notifications</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === ME_PAGE ? "active" : "not-active"}
                        onClick={() => redirectTo(ME_PAGE)}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            shape="circle"
                            icon={<UserOutlined />}
                        />
                        <span className="item">Me</span>
                    </HeaderItem>
                    <div
                        style={{
                            border: "1px solid white",
                            margin: "0.5rem",
                            height: "3rem",
                        }}
                    />

                    <HeaderItem
                        className={current === WORK_PAGE ? "active" : "not-active"}
                        onClick={() => setCurrent(WORK_PAGE)}>
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
        <div
            style={{
                width: "100%",
                position: "fixed",
                background: "black",
                display: "flex",
                top: 0,
                left: 0,
                zIndex: 999,
            }}>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                    }}>
                    <img
                        src="https://www.shareicon.net/data/256x256/2016/08/01/640324_logo_512x512.png"
                        style={{ width: "2rem", height: "2rem" }}
                        alt="Logo"
                    />
                    <SearchInput placeholder="Search" />
                    <SearchIcon />
                </div>
                {RenderRightLinks()}
            </div>
        </div>
    );
};

export default Header;
