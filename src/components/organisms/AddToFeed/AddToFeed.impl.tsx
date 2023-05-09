import React from "react";

import { Container, InfoContainer } from "./styles";

const AddToFeed = () => {

    const companies = [
        {
        name: "IBM",
        icon: "https://cdn-icons-png.flaticon.com/512/5969/5969083.png",
        description: "Company Information technology and services"
    },
    
        {
        name: "Google",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
        description: "Company • Computer Software"

    },
        {
        name: "Facebook",
        icon: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png",
        description: "Social Network"
    },

]

    return (
        <Container>
            <h3>Add to your feed</h3>
            {companies.map(c => (
                <InfoContainer>
                    <div className="icon-container">
                        <img
                            src={c.icon}
                            alt="Company"
                        />
                    </div>
                    <div className="company-info">
                        <h4>{c.name}</h4>
                        <p>{c.description}</p>
                        <button>Follow</button>
                    </div>
                </InfoContainer>

            ))}
        </Container>
    );
};

export default AddToFeed;
