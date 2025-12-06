import CardNav from './CardNav'
import logo from './repo.svg';

const App = () => {
    const items = [
        {
            label: "Experience",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Project", ariaLabel: "About Company", to: "/activities" },
                { label: "Upcoming", ariaLabel: "About Careers", to: "/activities" },
            ]
        },
        {
            label: "Info",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "About Me", ariaLabel: "Featured Projects", to: "/projects" },
                { label: "Quotes", ariaLabel: "Project Case Studies", to: "/projects" }
            ]
        },
        {
            label: "Galaxy",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Level Designing", ariaLabel: "Email us", to: "/galaxy" },
                { label: "Spotify", ariaLabel: "Email us", to: "/galaxy" },
                { label: "<3", ariaLabel: "Email us", to: "/galaxy" },
            ]
        }
    ];

    return (
        <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
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
        </div>
    );
};
export default App;