import React from "react";

const StartPost = () => {
    return (
        <div style={{ display: "flex" }}>
            <img
                src="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                style={{ borderRadius: "50%", width: "2.5rem" }}
                alt="User"
            />
            <input
                style={{ width: "100%", borderRadius: "15px 15px", margin: "0.4rem" }}
                placeholder="Start a post"
            />
        </div>
    );
};

export default StartPost;
