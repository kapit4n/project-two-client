import React from "react";

import { StartPostInput, StartPostAvatar, Container } from "./styles";

const StartPost = () => {
    return (
        <Container>
            <StartPostAvatar
                src="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                alt="User"
            />
            <StartPostInput placeholder="Start a post" />
        </Container>
    );
};

export default StartPost;
