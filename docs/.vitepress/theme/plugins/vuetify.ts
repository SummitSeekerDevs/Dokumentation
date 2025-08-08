import "vuetify/styles";

import {createVuetify} from "vuetify";
import {aliases, mdi} from "vuetify/iconsets/mdi-svg";
import {mdiFileDownload} from "@mdi/js";

export default createVuetify({
    icons: {
        defaultSet: "mdi",
        aliases: {
            ...aliases,
            download: mdiFileDownload,
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