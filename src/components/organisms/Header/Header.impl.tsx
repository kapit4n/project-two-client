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

import './styles.css'

const HOME_PAGE = "home";
const NOTIFICATION_PAGE = "notifications";
const JOBS_PAGE = "jobs";
const MESSAGING_PAGE = "messaging";
const NETWORK_PAGE = "network";
const ME_PAGE = "me";
const WORK_PAGE = "work";

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
                    }}>
                    <HeaderItem
                        onClick={() => setCurrent(HOME_PAGE)}
                        className={current === HOME_PAGE ? 'active' : ''}
                    >
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<HomeFilled />}
                        />
                        <span className="item">Home</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === NETWORK_PAGE ? 'active' : ''}
                        onClick={() => setCurrent(NETWORK_PAGE)}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<UsergroupAddOutlined />}
                        />
                        <span className="item">My Network</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === JOBS_PAGE ? 'active' : ''}
                        onClick={() => setCurrent(JOBS_PAGE)}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<ProfileFilled />}
                        />
                        <span className="item">Jobs</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === MESSAGING_PAGE ? 'active' : ''}
                        onClick={() => setCurrent(MESSAGING_PAGE)}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<MessageFilled />}
                        />
                        <span className="item">Messaging</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === NOTIFICATION_PAGE ? 'active' : ''}
                        onClick={() => setCurrent(NOTIFICATION_PAGE)}>
                        <Button
                            type="text"
                            style={{ color: "white" }}
                            icon={<BellFilled />}
                        />
                        <span className="item">Notifications</span>
                    </HeaderItem>
                    <HeaderItem
                        className={current === ME_PAGE ? 'active' : ''}
                        onClick={() => setCurrent(ME_PAGE)}>
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
                        className={current === WORK_PAGE ? 'active' : ''}
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
        <Container>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
                <div style={{ padding: "0.7rem", display: "flex" }}>
                    <img
                        src="https://www.shareicon.net/data/256x256/2016/08/01/640324_logo_512x512.png"
                        style={{ width: 35 }}
                        alt="Logo"
                    />
                    <SearchInput placeholder="Search" />
                </div>
                {RenderLoginButton()}
            </div>
        </Container>
    );
};

export default Header;
