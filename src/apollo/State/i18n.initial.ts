import { makeVar } from "@apollo/client";
import { i18nModel } from "apollo/Models";

export const initialI18n = makeVar<i18nModel>({
    lng: "es",
    __typename: "language",
});
