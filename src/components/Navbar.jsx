import CardNav from './CardNav'
import logo from './repo.svg';

const App = () => {
    const items = [
        {
            label: "กิจกรรม",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "ITCAMP20", ariaLabel: "About Company" },
                { label: "ToBeIT69", ariaLabel: "About Careers" },
                { label: "CENextGen", ariaLabel: "About Careers" }
            ]
        },
        {
            label: "โปรเจกต์",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "untitled bloodline game", ariaLabel: "Featured Projects" },
                { label: "Moodfolio", ariaLabel: "Project Case Studies" }
            ]
        },
        {
            label: "จักรวาล",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Spotify", ariaLabel: "Email us" },
                { label: "Youtube", ariaLabel: "Twitter" },
                { label: "Roblox", ariaLabel: "LinkedIn" }
            ]
        }
    ];

    return (
        <CardNav
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
        />
    );
};
export default App;
