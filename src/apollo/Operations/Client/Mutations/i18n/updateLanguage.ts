import { ApolloError } from "@apollo/client/errors";
import { getApolloClient } from "apollo";
import { Language } from "apollo/Models";
import { getLanguage } from "apollo/Operations/Client/Queries";

export const updateLanguage = async (language: Language) => {
    try {
        const client = await getApolloClient();
        const current = client.readQuery({ query: getLanguage });

        const updatedLanguage = { ...current.i18n, lng: language };

        client.writeQuery({
            query: getLanguage,
            data: {
                i18n: updatedLanguage,
            },
        });
    } catch (error) {
        // TODO review how to fix error throwing
        if (error instanceof ApolloError) {
            throw new Error(error.message);
        } else {
            // ignore console error
            console.error(error);
        }
    }
};
