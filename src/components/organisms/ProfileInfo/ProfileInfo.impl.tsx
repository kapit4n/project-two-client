import React from "react";

const ProfileInfo = () => {
    return (
        <div>
            <div style={{ width: "100%", height: "4rem", overflow: "hidden" }}>
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
                    height: "3rem",
                    background: "none",
                    borderRadius: "2px 4px 2px",
                }}>
                <img
                    src="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                    style={{ borderRadius: "50%", width: "3rem" }}
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
                <div>Remote Full Stack Developer</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
