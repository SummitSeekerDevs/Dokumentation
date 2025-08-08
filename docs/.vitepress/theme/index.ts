import type {Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";

import vuetify from "./plugins/vuetify";
import "vuetify/styles";

import GddDownloadBtn from '../components/GddDownloadBtn.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        const vuetifyInstance = vuetify;
        app.use(vuetifyInstance);

        app.component("gddDownloadBtn", GddDownloadBtn);
    },
} satisfies Theme;