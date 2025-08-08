import type {Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";

import vuetify from "./plugins/vuetify";
import "vuetify/styles";

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        const vuetifyInstance = vuetify;
        app.use(vuetifyInstance);

    },
} satisfies Theme;