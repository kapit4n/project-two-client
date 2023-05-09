import { CSSProperties } from "react";

export namespace AvatarImageProps {
    export interface IProps {
        image: string;
        alt: string;
        height?: string;
        width?: string;
        styles?: CSSProperties;
    }
}
