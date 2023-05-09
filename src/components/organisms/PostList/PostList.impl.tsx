import React from "react";

import { Container, PostListItem } from "./styles";
import AvatarImage from "components/atoms/AvatarImage";

interface PostListProps {
    posts: IPost[];
}

interface IPost {
    text: string;
    image: string;
}

const PostList: React.FC<PostListProps> = ({ posts }) => {

    return (
        <Container>
            {posts.map(post => (
                <PostListItem>
                    <div className="post-header">
                        <AvatarImage
                            image="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                            alt="User"
                        />
                        <span>
                            LinkedIn Sales Solutions
                        </span>
                    </div>
                    <p className="post-description">
                        {post.text}
                    </p>
                    <img src={post.image} />
                </PostListItem>
            ))}
        </Container>
    );
};

export default PostList;
