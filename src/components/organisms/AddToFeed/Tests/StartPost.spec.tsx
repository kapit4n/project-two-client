import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "apollo";
import AddToFeed from "../AddToFeed.impl";

afterEach(cleanup);

describe("AddToFeed component", () => {
    // When data is available
    it(" should render with mocked data", async () => {
        const client = await getApolloClient();

        const { debug } = render(
            <ApolloProvider client={client}>
                <AddToFeed />
            </ApolloProvider>,
        );
        debug();
    });
    // When data is not yet there but its loading...
    it(" should render in loading state", async () => {
        const client = await getApolloClient();
        const { debug } = render(
            <ApolloProvider client={client}>
                <AddToFeed />
            </ApolloProvider>,
        );
        debug();
    });

    // When there is an error while fetching the data
    it(" should render with mocked error data", async () => {
        const client = await getApolloClient();

        const { debug } = render(
            <ApolloProvider client={client}>
                <AddToFeed />
            </ApolloProvider>,
        );
        debug();
    });
});
