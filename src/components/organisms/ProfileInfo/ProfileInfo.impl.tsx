import React from "react";

const ProfileInfo = () => {
    return (
        <div style={{borderRadius: "10px 10px 10px"}}>
            <div style={{ width: "100%", height: "4rem", overflow: "hidden", borderRadius: "10px 10px 10px", }}>
                <img
                    src="https://m.media-amazon.com/images/I/616H3dU+VKL._AC_SX466_.jpg"
                    width="100%"
                    alt="User Background"
                />
            </div>
            <div
                style={{
                    position: "relative",
                    top: "2rem",
                    marginTop: "-4rem",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    height: "4rem",
                    background: "none",
                    borderRadius: "2px 4px 2px",
                }}>
                <img
                    src="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                    style={{ borderRadius: "50%", width: "4rem" }}
                    alt="User"
                />
            </div>
            <div
                style={{
                    marginTop: "3rem",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    alignContent: "center",
                    flexDirection: "column",
                }}>
                <h2 style={{ color: "white" }}>Luis Arce</h2>
                <p style={{ color: "#d2d7d9" }}>Remote Full Stack Developer</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
