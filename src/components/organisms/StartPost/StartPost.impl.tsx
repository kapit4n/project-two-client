import React from "react";

import { StartPostInput, StartPostAvatar, Container, SendButton } from "./styles";

interface StartPostProps {
    onSubmitPost: (post: string) => void;
}

const StartPost: React.FC<StartPostProps> = ({ onSubmitPost }) => {

    const [post, setPost] = React.useState("")
    const onPost = () => {
        onSubmitPost(post)
        setPost("")
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value)
    }

    return (
        <Container>
            <StartPostAvatar
                src="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                alt="User"
            />
            <StartPostInput rows={2} placeholder="Start a post" value={post} onChange={onChangeInput} />
            <SendButton onClick={onPost}>Post</SendButton>
        </Container>
    );
};

export default StartPost;
