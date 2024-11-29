import { BASE_PATH, PATH_UNITY } from "./constants"

export default {
    // site-level options
    title: 'SummitSeeker Doku',
    description: 'All you need to know.',
    lang: "de-DE",
    head: [['link', { rel: 'icon', href: BASE_PATH + 'favicon.ico' }]], // favicon logo
    base: BASE_PATH,
    srcDir: 'src', //markdown files are located in that directory

    themeConfig: {
        // Navigation Bar
        nav: [
            {text: 'About', link: '/about/'},
            {text: 'Unity', link: `${PATH_UNITY}tipps/`}
        ],

        outline: {
            label: "Auf dieser Seite"
        },

        // Sidebar
        sidebar: {
            [PATH_UNITY]: [
                {text: 'Tipps & Tricks', link: `${PATH_UNITY}tipps/`},
                {text: 'Automatisierte Tests', link: `${PATH_UNITY}automatisierte_tests/`},
            ]
        },

        // Socials
        socialLinks: [
            {icon: 'github', link: 'https://github.com/SummitSeekerDevs/SummitSeeker/'}
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