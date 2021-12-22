import React from "react";

const StartPost = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ color: "white", marginBottom: "1rem" }}>Add to your feed</h4>
            <div style={{ display: "flex" }}>
                <div style={{ paddingRight: "1rem" }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                        style={{ borderRadius: "50%", width: "2.5rem", height: "2.5rem" }}
                        alt="User"
                    />
                </div>
                <div>
                    <h4 style={{ color: "white" }}>IBM</h4>
                    <p style={{ color: "#d2d7d9" }}>
                        Company Information technology and services
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StartPost;
