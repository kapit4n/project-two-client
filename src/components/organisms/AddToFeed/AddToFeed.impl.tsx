import React from "react";

import { Container, InfoContainer } from "./styles";

const AddToFeed = () => {
    return (
        <Container>
            <h4>Add to your feed</h4>
            <InfoContainer>
                <div style={{ paddingRight: "1rem" }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                        alt="User"
                    />
                </div>
                <div>
                    <h4>IBM</h4>
                    <p>Company Information technology and services</p>
                </div>
            </InfoContainer>
        </Container>
    );
};

export default AddToFeed;
