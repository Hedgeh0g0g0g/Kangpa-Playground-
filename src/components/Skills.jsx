import React from "react";
import { motion } from "framer-motion";
import { 
    CodeBracketIcon, 
    Square3Stack3DIcon, 
    RocketLaunchIcon, 
    SwatchIcon, 
    CommandLineIcon
} from '@heroicons/react/24/outline'; 

// 💡 ข้อมูลทักษะ
const skillsData = [
    { 
        name: "HTML", 
        icon: CodeBracketIcon, 
        description: "รากฐานของการพัฒนาเว็บ: โครงสร้างเนื้อหาและการจัดระเบียบองค์ประกอบต่างๆ บนหน้าเว็บอย่างถูกต้องตามหลัก Semantic." 
    },
    { 
        name: "JavaScript, React.js", 
        icon: Square3Stack3DIcon, 
        description: "การสร้าง User Interfaces ที่ซับซ้อนและมีประสิทธิภาพสูงด้วย React.js รวมถึงการจัดการสถานะและ Hook ที่ทันสมัย" 
    },
    { 
        name: "CSS, Tailwind CSS", 
        icon: SwatchIcon, 
        description: "การจัดรูปแบบที่สวยงามและตอบสนองได้ดี (Responsive Design) โดยเฉพาะการใช้ Tailwind CSS เพื่อความรวดเร็วในการพัฒนา UI." 
    },
    { 
        name: "Python, C, C++", 
        icon: CommandLineIcon, 
        description: "ผมมีความเชี่ยวชาญในภาษาสำหรับการเขียนโปรแกรมระบบ การคำนวณประสิทธิภาพสูง และการพัฒนาซอฟต์แวร์." 
    },
    { 
        name: "Unreal Engine 5", 
        icon: RocketLaunchIcon, 
        description: "การพัฒนาเกมและประสบการณ์อินเทอร์แอคทีฟ 3D ระดับสูง รวมถึงการใช้ Blueprints และ C++ สำหรับสร้างโลกเสมือนจริง." 
    },
];

// ------------------------------------------
// 1. คอมโพเนนต์ย่อย: SkillCard (พร้อม Fade In & Reset)
// ------------------------------------------
const SkillCard = ({ skill, index }) => {
    
    // Variants สำหรับ Fade In On Scroll
    const cardVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: i => ({ 
            opacity: 1, 
            y: 0, 
            transition: { 
                delay: i * 0.1, 
                duration: 0.6, 
                ease: "easeOut"
            }
        })
    };
    
    const IconComponent = skill.icon;

    return (
        <motion.li
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            // 💡 สำคัญ: ตั้งค่า viewport 
            viewport={{ 
                once: false, // <-- ทำให้รีเซ็ตเมื่อเลื่อนออกจากจอ และทำงานซ้ำเมื่อเลื่อนกลับมา
                amount: 0.5 // เริ่มแอนิเมชันเมื่อ Card เข้ามาในจอ 50%
            }} 
            custom={index}
            className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-indigo-500/50"
        >
            <div className="flex items-center mb-3">
                <IconComponent className="w-8 h-8 text-indigo-400 mr-3" />
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
            </div>
            <p className="text-gray-400 text-sm">{skill.description}</p>
        </motion.li>
    );
};

// ------------------------------------------
// 2. คอมโพเนนต์หลัก: Skills
// ------------------------------------------
export default function Skills() {
    return (
        <section id="skills" className="bg-gray-950 py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* ส่วน H2 Header แนะนำให้ใช้ once: true เพื่อให้ Fade In แค่ครั้งเดียว */}
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }} 
                    className="text-4xl font-extrabold text-center mb-16 text-white tracking-tight border-b-4 border-indigo-500/50 pb-2 mx-auto max-w-lg"
                >
                    💡 ทักษะหลักของเรา
                </motion.h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}