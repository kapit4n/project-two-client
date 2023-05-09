import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "apollo";
import PostList from "../PostList.impl";

afterEach(cleanup);

describe("PostList component", () => {
    // When data is available
    it(" should render with mocked data", async () => {
        const client = await getApolloClient();

        const { debug } = render(
            <ApolloProvider client={client}>
                <PostList />
            </ApolloProvider>,
        );
        debug();
    });
    // When data is not yet there but its loading...
    it(" should render in loading state", async () => {
        const client = await getApolloClient();
        const { debug } = render(
            <ApolloProvider client={client}>
                <PostList />
            </ApolloProvider>,
        );
        debug();
    });

    // When there is an error while fetching the data
    it(" should render with mocked error data", async () => {
        const client = await getApolloClient();

        const { debug } = render(
            <ApolloProvider client={client}>
                <PostList />
            </ApolloProvider>,
        );
        debug();
    });
});
