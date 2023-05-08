import React from "react";
import loadable from "@loadable/component";
import { LoadingContainer } from "./styles";

export const Home = loadable(() => import("pages/Welcome"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});

export const MyNetwork = loadable(() => import("pages/MyNetwork"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});

export const ErrorPage = loadable(() => import("pages/ErrorPage"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});
