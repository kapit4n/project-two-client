import React from "react";
import { useTranslation } from "react-i18next";
import { StandardTemplate } from "components/templates";

import PageTitle from "components/atoms/PageTitle";
import { AddToFeed, ProfileInfo, StartPost, PostList } from "components/organisms";
import { Container, LeftSidebar, MainSidebar, RightSidebar } from "./styles";
import { HomeProps } from "./Home.interface";

const images = [
    "https://blog.linkedin.com/apps/settings/wcm/designs/linkedin/katy/global/clientlibs/resources/img/default-share.png",
    "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
]

interface IPost {
    text: string;
    image: string;
}

const Home: React.FC<HomeProps.IProps> = () => {
    // eslint-disable-next-line
    const { t, ready } = useTranslation();
    const [posts, setPosts] = React.useState<IPost[]>([
        {
            text: `What are the differences between C++ and Java? ...
        List the features of the Java Programming language? ...
        What do you get in the Java download file? ...
        What is a ClassLoader? ...
        What are the Memory Allocations available in JavaJava? ...
        What are the differences between Heap and Stack Memory in Java?`,
            image: "https://dev.java/assets/images/java-logo-vector.png"
        },
        {
            text: `
            📣 OPEN POSITION | Senior Clinical Data Manager

We are looking for an experienced Data Manager who will work primarily in quality control of the study setup. This role would serve as a clinical data SME for the implementation team, providing expertise to business analysts, solution architects, and support resources.

🏡 100% remote and full-time
🗽 Salary in USD

✅ Requirements:
- Advanced or fluent English.
- More than 7/10 years of experience as a Clinical Data Manager

🎓Education and experience required:
- A bachelor's degree in a scientific, medical, or technological discipline is required;
- Experience in clinical data management or clinical trials.
            `,
            image: "https://imageio.forbes.com/specials-images/imageserve/63c077d70c2cc1a53653f99f/we-are-hiring--join-our-team--flat-vector-poster-or-banner-illustration-on-black/960x0.jpg?format=jpg&width=960"
        },

    ])

    const onSubmitPost = (post: IPost) => {
        setPosts([post, ...posts])
    }

    return (
        <StandardTemplate>
            <PageTitle Title="Home - React Boilerplate HOME" />
            <Container>
                <LeftSidebar>
                    <ProfileInfo />
                    <hr />
                    <div className="views-on-profile" >
                        <span>Who viewed your profile</span>
                        <span>170</span>
                    </div>
                    <div className="views-on-posts">
                        <span>Views of your post</span>
                        <span>216</span>
                    </div>
                    <hr />
                </LeftSidebar>
                <MainSidebar>
                    <StartPost onSubmitPost={onSubmitPost} />
                    <PostList posts={posts} />
                </MainSidebar>
                <RightSidebar>
                    <AddToFeed />
                </RightSidebar>
            </Container>
        </StandardTemplate>
    );
};

export default Home;
