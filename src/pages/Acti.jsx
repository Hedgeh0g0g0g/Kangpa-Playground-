import React from "react";
// สมมติว่าไฟล์ Masonry อยู่ในระดับเดียวกับ Acti.jsx
import Masonry from "./Masonry";
import { motion } from "framer-motion";
import { CalendarIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

// ------------------------------------------
// 1. คอมโพเนนต์ย่อย: ActivityCard (พร้อม Fade In On Scroll)
// ------------------------------------------
const ActivityCard = ({ activity, isReversed, index }) => {
    const activityUrl = activity.url || '#';

    // 💡 ปรับลดการขยับ Y จาก 50px เหลือ 10px และคงค่า Opacity
    const cardVariants = {
        hidden: { opacity: 0, y: 10 }, // เริ่มต้น: โปร่งใส (0) และเลื่อนลงมาเพียง 10px (จองพื้นที่หลักไว้)
        visible: i => ({
            opacity: 1,
            y: 0, // สิ้นสุด: ทึบแสง (1) และอยู่ในตำแหน่งเดิม
            transition: {
                delay: i * 0.1,
                duration: 0.7,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.a
            href={activityUrl}
            target="_blank"
            rel="noopener noreferrer"

            // 🎬 Framer Motion Properties (ส่วนนี้คงเดิม)
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: false,
                amount: 0.2
            }}
            custom={index}

            // Tailwind Classes
            className={`
                group flex flex-col md:flex-row items-center gap-6 
                bg-gray-800 border border-gray-700 rounded-xl p-6 mb-10 
                shadow-2xl transition-all duration-300 ease-in-out
                hover:shadow-indigo-500/50 hover:border-indigo-500
                hover:translate-y-[-4px] hover:bg-gray-700/50 
                focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50
                ${isReversed ? 'md:flex-row-reverse' : ''}
            `}
        >
            {/* 🖼️ ส่วนรูปภาพ */}
            <img
                src={activity.image}
                alt={activity.title}
                className="w-full md:w-64 h-40 rounded-lg object-cover shadow-lg md:shrink-0"
            />

            {/* 📝 ส่วนรายละเอียด */}
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-indigo-400">
                    {activity.title}
                </h3>
                <p className="mb-3 text-gray-300 line-clamp-3">
                    {activity.description}
                </p>

                {/* 📅 ข้อมูลวันที่และ Action */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between mt-3">
                    <p className="text-sm text-gray-400 font-medium flex items-center mb-2 sm:mb-0">
                        <CalendarIcon className="w-4 h-4 mr-2 text-red-400" />
                        <span className="italic">{activity.date}</span>
                    </p>

                    {/* ปุ่ม/ลิงก์ดูรายละเอียด (ใช้ group-hover) */}
                    <div className="text-indigo-400 font-semibold text-sm flex items-center hover:text-indigo-300">
                        ดูรายละเอียด
                        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

// ------------------------------------------
// 2. คอมโพเนนต์หลัก: Acti
// ------------------------------------------
const Acti = () => {
    const baseURL = "https://www.instagram.com/akixrrr";

    // ข้อมูลกิจกรรมเพิ่มเติม
    const additionalActivities = [
        {
            id: "a1",
            title: "ITCAMP20",
            description: "ค่ายที่จัดขึ้นโดยพี่ๆคณะเทคโนโลยีสารสนเทศ ซึ่งมี 4 สาขา ตัวผมเองได้เข้าสาขาการสร้างเกม (SpadeGame) โดยเฉพาะ และได้เรียนรู้การใช้ Unreal Engine 5 สร้างเกม 3D เพื่อนำไปใช้ประโยชน์ต่อไป โดยมีหนังสือคู่มือที่มหาลัยจัดเตรียมไว้โดยเฉพาะ",
            date: "13-16 เมษายน 2567",
            image: "src/pages/pic/10.jpg",
            url: "https://example.com/react-workshop-details"
        },
        {
            id: "a2",
            title: "OBEC ESPORTS x NextGen Creator",
            description: "ป็นตัวแทนโรงเรียนเข้าร่วมอบรมการปั้นเด็กสายเกมสู้เส้นทาง E-sport ในนามของทีมงาน E-sports ของโรงเรียน ซึ่งมีวิทยากรและ ผู้ประสบความสำเร็จมาเพื่อให้ความรู้ เทคนิคและเคล็ดลับในสายเส้นทาง รวมถึงการทำโปรเจกต์ถ่ายทอดสดสตรีมให้คณะกรรมการ รับชมเพื่อพิจารณาให้คะแนน",
            date: "9-13 กรกฎาคม 2568",
            image: "src/pages/pic/9.jpg",
            url: "https://example.com/coding-contest-signup"
        },
        {
            id: "a3",
            title: "K-Engineering World Tour and Workshop 2025",
            description: "ผมได้มีโอกาสไป Open House ของคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมไฟฟ้าสื่อสารและเครือข่าย วิศวกรรมโทรคมนาคม ซึ่งมีพี่ๆมาอบรมให้ความรู้เรื่องเครือข่ายสัญญาณ คลื่น การใช้เครื่องมือเกี่ยวกับดาวเทียมโดยตรง กฏหมาย และเรื่องน่ารู้ต่างๆ",
            date: "13 สิงหาคม 2568",
            image: "src/pages/pic/112.webp",
            url: "https://example.com/ai-seminar-details"
        },
        {
            id: "a4",
            title: "AdaBrain@SUT Global Game Jam 2025",
            description: "รกิจกรรมนี้เป็นการ Marathon ออกแบบเกม 1-5 คน โดยใช้ระยะเวลาทั้งหมด 48 ชั่วโมงซึ่งผมได้เข้าร่วมรายการกับเพื่อนๆทีมงาน E-sport ในฐานะ Coding และ Level Designing ด้วยการใช้ Unreal Engine 5 สร้างเกม 2D ด้วยเงื่อนไขและกติกาต่างๆด้วยเวลาที่กำหนดให้เสร็จทันภายในเวลา",
            date: "24-26 มกราคม 2568",
            image: "src/pages/pic/ceme.webp",
            url: "https://example.com/hackathon-info"
        },
    ];

    // ข้อมูล Masonry
    const masonryItems = [
        { id: "1", img: "src/pages/pic/1.jpg", height: 800 },
        { id: "2", img: "src/pages/pic/2.jpg", height: 600 },
        { id: "11", img: "src/pages/pic/stack.png", height: 700 },
        { id: "3", img: "src/pages/pic/3.png", height: 900 },
        { id: "4", img: "src/pages/pic/4.jpg", height: 700 },
        { id: "5", img: "src/pages/pic/5.jpg", height: 700 },
        { id: "6", img: "src/pages/pic/6.jpg", height: 700 },
    ].map(item => ({ ...item, url: baseURL }));


    return (
        <div className="min-h-screen w-full bg-gray-950 text-white p-0 m-0">

            {/* ส่วน Masonry */}
            <Masonry
                items={masonryItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
                fullWidth={true}
            />

            {/* ส่วนกิจกรรมเพิ่มเติม */}
            <section className="max-w-6xl mx-auto mt-20 px-4 pb-20">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-white tracking-tight border-b-4 border-indigo-500/50 pb-2">
                    ✨ กิจกรรมและผลงานเพิ่มเติม
                </h2>

                <div className="space-y-12">
                    {additionalActivities.map((activity, index) => (
                        <ActivityCard
                            key={activity.id}
                            activity={activity}
                            isReversed={index % 2 !== 0}
                            index={index} // ส่ง index สำหรับ Staggered Animation
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Acti;