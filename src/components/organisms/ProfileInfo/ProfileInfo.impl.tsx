import React from "react";

import { Container, ImgContainer, AvatarContainer, Avatar, InfoContainer } from "./styles";

const ProfileInfo = () => {
    return (
        <Container>
            <ImgContainer>
                <img
                    src="https://m.media-amazon.com/images/I/616H3dU+VKL._AC_SX466_.jpg"
                    width="100%"
                    alt="User Background"
                />
            </ImgContainer>
            <AvatarContainer>
                <Avatar
                    src="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                    alt="User"
                />
            </AvatarContainer>
            <InfoContainer>
                <h2>Luis Arce</h2>
                <p>Remote Full Stack Developer</p>
            </InfoContainer>
        </Container>
    );
};

export default ProfileInfo;
