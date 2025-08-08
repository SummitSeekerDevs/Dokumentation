import "vuetify/styles";

import {createVuetify} from "vuetify";
import {aliases, mdi} from "vuetify/iconsets/mdi-svg";

export default createVuetify({
    icons: {
        defaultSet: "mdi",
        aliases: {
            ...aliases,
        },
        sets: {
            mdi,
        },
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: "#546e7a",
                },
            },
        },
    },
    defaults: {},
});