import CardNav from './CardNav'
import logo from './repo.svg';

const App = () => {
    const items = [
        {
            label: "กิจกรรม",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "ITCAMP20", ariaLabel: "About Company", to: "/activities" },
                { label: "ToBeIT69", ariaLabel: "About Careers", to: "/activities" },
                { label: "CENextGen", ariaLabel: "About Careers", to: "/activities" }
            ]
        },
        {
            label: "โปรเจกต์",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "untitled bloodline game", ariaLabel: "Featured Projects", to: "/projects" },
                { label: "Moodfolio", ariaLabel: "Project Case Studies", to: "/projects" }
            ]
        },
        {
            label: "จักรวาล",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                // *** ส่วนที่ถูกแก้ไข: เพิ่ม 'to' prop พร้อม URL ภายนอก ***
                { label: "Spotify", ariaLabel: "Email us", to: "https://open.spotify.com/user/31s64aengpceud2xlz2zf5cfllzi" },
                { label: "Youtube", ariaLabel: "Twitter", to: "https://www.youtube.com/@15-14" },
                { label: "Roblox", ariaLabel: "LinkedIn", to: "https://www.roblox.com/users/2568930277/profile" }
                // ******************************************************
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