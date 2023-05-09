import React from "react";

import { Container, PostListItem } from "./styles";

interface PostListProps {
    posts: string[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {

    return (
        <Container>
            {posts.map(post => (
                <PostListItem>
                    {post}
                </PostListItem>
            ))}
        </Container>
    );
};

export default PostList;
