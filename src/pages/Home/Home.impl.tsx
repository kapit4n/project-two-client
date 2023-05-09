import React from "react";
import { useTranslation } from "react-i18next";
import { StandardTemplate } from "components/templates";

import PageTitle from "components/atoms/PageTitle";
import { AddToFeed, ProfileInfo, StartPost, PostList } from "components/organisms";
import { Container, LeftSidebar, MainSidebar, RightSidebar } from "./styles";
import { HomeProps } from "./Home.interface";

const Home: React.FC<HomeProps.IProps> = () => {
    // eslint-disable-next-line
    const { t, ready } = useTranslation();
    const [posts, setPosts] = React.useState<string[]>(["Hello its me"])

    const onSubmitPost = (post: string) => {
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
