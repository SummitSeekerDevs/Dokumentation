import {
    BASE_PATH,
    PATH_UNITY,
    PATH_DEVELOPERS,
    PATH_PLAYERS,
    PATH_GETTING_STARTED_DEVELOPER,
    PATH_GETTING_STARTED_PLAYER,
    PATH_GAME_RULES,
    PATH_BLENDER,
    PATH_IDE} from "./constants"

export default {
    // site-level options
    title: 'SummitSeeker Doku',
    description: 'All you need to know.',
    lang: "de-DE",
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]], // favicon logo
    base: BASE_PATH,
    srcDir: 'src', //markdown files are located in that directory

    themeConfig: {
        // Navigation Bar
        nav: [
            {text: 'Developers', link: `${PATH_GETTING_STARTED_DEVELOPER}`},
            {text: 'Players', link: `${PATH_GETTING_STARTED_PLAYER}`}
        ],

        // Sidebar
        sidebar: {
            [PATH_DEVELOPERS]: [
                {text: 'Getting Started', link: `${PATH_GETTING_STARTED_DEVELOPER}`},
                {text: 'Blender', link: `${PATH_BLENDER}tipps/`},
                {text: 'IDE', link: `${PATH_IDE}tipps/`},
                {text: 'Unity', link: `${PATH_UNITY}tipps/`, collapsed:true,
                    items: [
                        {text: 'Automatisierte Tests', link: `${PATH_UNITY}automatisierte_tests/`},
                    ]
                }
            ],
            [PATH_PLAYERS]: [
                {text: 'Getting Started', link: `${PATH_GETTING_STARTED_PLAYER}`},
                {text: 'Game Rules', link: `${PATH_GAME_RULES}`},
            ],
        },

        // Socials
        socialLinks: [
            {icon: 'github', link: 'https://github.com/orgs/SummitSeekerDevs/repositories'}
        ],

        // Search
        search: {
            provider: 'local'
        },

        // Footer
        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>. ' +
                     'Icons by <a href="https://icons8.de/">Icons8</a>',
            copyright: 'Copyright © 2024-present <a href="https://github.com/SummitSeekerDevs">SummitSeeker Development Team</a>'
        },
    }
}