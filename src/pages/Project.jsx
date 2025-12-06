import React from 'react';
import { Sparkles, Code, Globe, Gamepad2, User, GraduationCap } from 'lucide-react'; // เพิ่ม GraduationCap icon

const AboutMe = () => {
    // กำหนดสีไฮไลท์หลัก
    const primaryColor = 'indigo'; // ใช้ indigo เป็นสีหลัก

    // ข้อมูลการศึกษา (สามารถแก้ไขได้)
    const educationHistory = [
        {
            level: "ประถมศึกษา",
            institution: "โรงเรียนอนุบาลสระบุรี",
            major: "",
            year: "ก่อนพ.ศ. 2562"
        },
        {
            level: "มัธยมต้น",
            institution: "โรงเรียนสระบุรีวิทยาคม",
            major: "แผนการเรียนเทคโนโลยี",
            year: "พ.ศ. 2562 - 2565"
        },
        {
            level: "มัธยมปลาย ",
            institution: "โรงเรียนสระบุรีวิทยาคม",
            major: "แผนการเรียนศิลป์ - คำนวณ",
            year: "พ.ศ. 2565 - 2568"
        }


    ];

    const skillCategories = [
        {
            title: "Programming",
            color: "indigo",
            icon: Code,
            items: [
                { name: "HTML", level: "Expert" },
                { name: "CSS", level: "Expert" },
                { name: "JavaScript (JS)", level: "Intermediate" },
                { name: "Python", level: "Intermediate" },
                { name: "Lua", level: "Intermediate" },
                { name: "C", level: "Basic" },
                { name: "C++", level: "Basic" }
            ]
        },
        {
            title: "Web Development",
            color: "green",
            icon: Globe,
            items: [
                { name: "TailwindCSS", level: "Intermediate" },
                { name: "React.js", level: "Basic" },
                { name: "Node.js", level: "Basic" }
            ]
        },
        {
            title: "Game Development",
            color: "pink",
            icon: Gamepad2,
            items: [
                { name: "Unity", level: "Expert" },
                { name: "Unreal Engine 5", level: "Expert" },
                { name: "Construct", level: "Expert" },
                { name: "RPG Maker VX Ace", level: "Expert" },
                { name: "RPG Maker MV", level: "Expert" }
            ]
        }
    ];
    const skillLevelColors = {
        Expert: "text-yellow-300",
        Advanced: "text-yellow-300",
        Intermediate: "text-blue-300",
        Basic: "text-gray-300",
        Beginner: "text-gray-500",
        Hobbyist: "text-pink-300",
    };


    return (
        <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-slate-950 min-h-screen text-gray-200">
            <div className="max-w-6xl mx-auto">

                {/* === HEADER / INTRO === */}
                <header className="text-center mb-20">
                    <p className={`text-xl text-${primaryColor}-400 font-medium mb-2 flex justify-center items-center`}>
                        <User className="w-5 h-5 mr-2" /> Get to Know Me
                    </p>
                    <h1 className="text-6xl font-extrabold text-white tracking-tight mb-4">About Me</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        ✦ รู้จักผมให้ลึกกว่าที่เคย ✦
                    </p>
                </header>

                {/* --- BIO & CORE INFO SECTION --- */}
                <section className={`bg-slate-900 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-${primaryColor}-900/20 mb-20 border border-slate-800/50 transform transition duration-500 hover:shadow-${primaryColor}-800/30`}>
                    <h2 className={`text-3xl font-bold text-${primaryColor}-400 mb-8 flex items-center`}>
                        <User className="w-6 h-6 mr-3" /> BIO
                    </h2>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-lg">

                        {/* Column 1: Personal Details */}
                        <div className="space-y-4">
                            <p className="border-b border-slate-700 pb-2"><span className={`text-${primaryColor}-300 font-semibold w-24 inline-block`}>ชื่อ:</span> อาคิรา </p>
                            <p className="border-b border-slate-700 pb-2"><span className={`text-${primaryColor}-300 font-semibold w-24 inline-block`}>ชื่อเล่น:</span> แกงป่า</p>
                            <p className="border-b border-slate-700 pb-2"><span className={`text-${primaryColor}-300 font-semibold w-24 inline-block`}>วันเกิด:</span> 02 / 11 / 2550</p>
                            <p className="border-b border-slate-700 pb-2"><span className={`text-${primaryColor}-300 font-semibold w-24 inline-block`}>อายุ:</span> 18 ปี</p>
                        </div>

                        {/* Column 2: Additional Info */}
                        <div className="space-y-4">
                            <p className="border-b border-slate-700 pb-2"><span className={`text-${primaryColor}-300 font-semibold w-24 inline-block`}>นามสกุล:</span> รวงผึ้งทอง</p>
                            <p className="border-b border-slate-700 pb-2"><span className={`text-${primaryColor}-300 font-semibold w-24 inline-block`}>สัญชาติ:</span> ไทย</p>
                            <p className="border-b border-slate-700 pb-2"><span className={`text-${primaryColor}-300 font-semibold w-24 inline-block`}>เชื้อชาติ:</span> ไทย</p>
                            <p className="border-b border-slate-700 pb-2"><span className={`text-${primaryColor}-300 font-semibold w-24 inline-block`}>ศาสนา:</span> พุทธ</p>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-800 my-16" />

                {/* === ADDITIONAL SKILLS LIST === */}
                <section className="mb-20">
                    <h2 className="text-4xl font-extrabold text-white text-center mb-16 flex justify-center items-center">
                        <Sparkles className="w-8 h-8 mr-3 text-yellow-400" /> ทักษะเพิ่มเติม (Skills)
                    </h2>

                    <div className="grid lg:grid-cols-3 gap-10 text-gray-300">

                        {skillCategories.map((cat, i) => {
                            const Icon = cat.icon;
                            return (
                                <div
                                    key={i}
                                    className={`bg-slate-900 p-8 rounded-2xl shadow-xl border-t-4 border-${cat.color}-600
                    transition duration-300 hover:border-${cat.color}-400 hover:shadow-2xl hover:scale-[1.02]`}
                                >
                                    <h3 className={`text-2xl font-bold mb-6 text-${cat.color}-300 flex items-center`}>
                                        <Icon className="w-5 h-5 mr-3" /> {cat.title}
                                    </h3>

                                    <ul className="space-y-4">
                                        {cat.items.map((skill) => (
                                            <li
                                                key={skill.name}
                                                className={`bg-slate-800 p-3 rounded-lg flex justify-between items-center
                                transform transition duration-200 hover:translate-x-1 hover:bg-slate-700/50
                                border-l-4 border-${cat.color}-500`}
                                            >
                                                {skill.name}
                                                <span className={`text-sm ${skillLevelColors[skill.level] ?? "text-white/70"}`}>
                                                    {skill.level}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}

                    </div>
                </section>



                <hr className="border-slate-800 my-16" />

                {/* === EDUCATION SECTION === */}
                <section className="mb-20">
                    <h2 className="text-4xl font-extrabold text-white text-center mb-16 flex justify-center items-center">
                        <GraduationCap className="w-8 h-8 mr-3 text-blue-400" /> ประวัติการศึกษา (Education)
                    </h2>

                    <div className="space-y-8">
                        {educationHistory.map((edu, index) => (
                            <div key={index} className="flex items-start bg-slate-900 p-6 rounded-2xl border border-slate-800/50 shadow-lg transform transition duration-300 hover:border-blue-600/50">

                                {/* Timeline Dot/Year */}
                                <div className="flex flex-col items-center mr-6 mt-1">
                                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-300"></div>
                                    <div className="flex-1 w-px bg-slate-700 mt-2" style={{ height: index < educationHistory.length - 1 ? '100%' : '0' }}></div>
                                </div>

                                {/* Content */}
                                <div className="grow">
                                    <p className="text-sm font-semibold text-blue-400 mb-1">{edu.year}</p>
                                    <h3 className="text-2xl font-bold text-white mb-2">{edu.level}</h3>
                                    <p className="text-lg text-gray-300 font-medium">{edu.institution}</p>
                                    <p className="text-sm text-slate-400">{edu.major}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* END OF EDUCATION SECTION */}


                <hr className="border-slate-800 my-16" />

                {/* === QUOTE SECTION === */}
                <section className="text-center mt-20">
                    <div className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-slate-800 transform transition duration-500 hover:border-indigo-600/50">
                        <p className="text-2xl italic text-gray-300 leading-relaxed">
                            “ทุกปัญหา มีเหตุ มีผล และมีทางออกที่ดีที่สุดเสมอ”
                        </p>
                        <p className={`text-lg font-medium text-${primaryColor}-400 mt-6`}>
                            — แกงป่า
                        </p>
                    </div>
                </section>

            </div>
        </section>
    );
};

export default AboutMe;