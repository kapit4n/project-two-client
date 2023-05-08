import { onError } from "@apollo/client/link/error";

export const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, extensions }) => {
            // ignore errors
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${extensions?.code}`,
            );
            return null;
        });
    }
    if (networkError) {
        // ignore network error
        console.error(`[Network error]: ${networkError}`);
    }
});
