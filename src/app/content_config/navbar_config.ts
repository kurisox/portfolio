const home_url = process.env.NEXT_PUBLIC_HOME_URL;

const navbar_content = [
    {
        title: "LEBENSLAUF",
        url: String(home_url)
    },
    {
        title: "PROJEKTE",
        url: "projects"
    },
];

export function getNavbarContent() {
    return navbar_content;
}
