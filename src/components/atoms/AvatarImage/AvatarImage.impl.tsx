/* eslint-disable no-unused-vars */
import React from "react";
import { AvatarImageProps } from "./AvatarImage.interface";
import { ImageAvatarStyle } from "./styles";

const AvatarImage = (props: AvatarImageProps.IProps) => {
    const { image, alt, height, width, styles } = props;

    return (
        <ImageAvatarStyle src={image} alt={alt || ""} height={height} width={width} style={styles} />
    );
};

export default AvatarImage;
