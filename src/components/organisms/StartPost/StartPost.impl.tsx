import React from "react";

import { StartPostInput, Container, SendButton } from "./styles";

import AvatarImage from '../../atoms/AvatarImage'

interface IPost {
    text: string;
    image: string;
}

const images = [
    "https://blog.linkedin.com/apps/settings/wcm/designs/linkedin/katy/global/clientlibs/resources/img/default-share.png",
    "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
]

interface StartPostProps {
    onSubmitPost: (post: IPost) => void;
}

const StartPost: React.FC<StartPostProps> = ({ onSubmitPost }) => {

    const [post, setPost] = React.useState("")
    const [counter, setCounter] = React.useState(0)

    const onPost = () => {
        setCounter(counter + 1)
        onSubmitPost({ text: post, image: images[counter % 2] })
        setPost("")
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value)
    }

    return (
        <Container>
            <div className="start-post-text">
                <AvatarImage
                    image="https://pbs.twimg.com/profile_images/1129397696425410560/_ACzzX6p_400x400.jpg"
                    alt="User"
                />
                <StartPostInput rows={1} placeholder="Start a post" value={post} onChange={onChangeInput} />
                <SendButton onClick={onPost}>Post</SendButton>

            </div>
            <div className="start-post-multimedia">
                <div className="post-multimedia-item">
                    <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
                    <span>Photo</span>
                </div>
                <div className="post-multimedia-item">
                    <img src="https://d2uolguxr56s4e.cloudfront.net/img/kartrapages/video_player_placeholder.gif" />
                    <span>Video</span>
                </div>
                <div className="post-multimedia-item">
                    <img src="https://iaia.edu/wp-content/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png" />
                    <span>Event</span>
                </div>
                <div className="post-multimedia-item">
                    <img src="https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder-news.jpg" />
                    <span>Article</span>
                </div>
            </div>
        </Container>
    );
};

export default StartPost;
