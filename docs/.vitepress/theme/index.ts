import type {Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";

import vuetify from "./plugins/vuetify";

import GddDownloadBtn from '../components/GddDownloadBtn.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        app.use(vuetify);

        app.component("gddDownloadBtn", GddDownloadBtn);
    },
} satisfies Theme;