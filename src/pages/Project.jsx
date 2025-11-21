import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap"; // Import GSAP

const projects = [
    {
        title: "Nova Nebula Nightmare",
        description:
            "ผลงานเกมไซไฟสุดดาร์ก พัฒนาด้วย Unreal Engine 5 เน้นงานภาพและแสงเงาระดับสูง",
        image: "/proj/novalogo.png", // รูปภาพเล็ก
        full_image_bg: "/proj/novabg.png", // รูปภาพพื้นหลัง (ต้องมีรูปนี้ด้วย)
        tech: "Unreal Engine 5",
    },
    {
        title: "BUBLY",
        description:
            "เกมแนวแคชชวลสดใส ตัวละครโดดเด่น ใช้ Unreal Engine 5 ในการสร้างประสบการณ์ที่ลื่นไหล",
        image: "/proj/bblogo.png",
        full_image_bg: "/proj/bbbg.png",
        tech: "Unreal Engine 5",
    },
    {
        title: "Untitled Bloodline Game",
        description:
            "เกม Web-based ใช้ HTML, CSS, JS เน้นระบบตระกูล การเติบโตของตัวละคร และระบบเวลาภายในเกม",
        image: "/proj/ubglogo.png",
        full_image_bg: "/proj/ubgbg.png",
        tech: "HTML • CSS • JavaScript",
    },
    {
        title: "Moodfolio",
        description:
            "เว็บแอพติดตามอารมณ์ เรียบง่าย เน้น UX ใช้ React.js, Vite, TailwindCSS",
        image: "/proj/mflogo.png",
        full_image_bg: "/proj/mfbg.png",
        tech: "React.js • Vite • TailwindCSS",
    },
];

// 🎨 Styles เดิม (ลบ CSS Transition ออกจากส่วนที่ GSAP คุม)
const styles = {
    section: (isEven) => ({
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        color: "white",
        position: "relative",
        overflow: "hidden",
        background: isEven
            ? "linear-gradient(135deg, #0d0d2b 0%, #1e1e4a 100%)"
            : "linear-gradient(135deg, #1e1e4a 0%, #2f1d5e 100%)",
    }),
    fullScreenBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex: 0,
        opacity: 0,
        transform: 'scale(1.1)',
        display: 'none',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
        opacity: 0,
        display: 'none',
    },
    container: (isReversed) => ({
        display: "flex",
        flexDirection: isReversed ? "row-reverse" : "row",
        alignItems: "center",
        gap: "80px",
        maxWidth: "1100px",
        width: "100%",
        zIndex: 2,
    }),
    img: {
        width: "500px",
        height: "300px",
        objectFit: "cover",
        borderRadius: "16px",
        boxShadow: "0 15px 45px rgba(0, 0, 0, 0.4), 0 0 40px rgba(100, 100, 255, 0.1)",
        cursor: "pointer",
        // ลบ Transition: "transform 0.3s ease-in-out, opacity 0.5s ease-in-out" ออก
    },
    content: {
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        zIndex: 2,
    },
    title: {
        marginBottom: "16px",
        fontSize: "2.5rem",
        fontWeight: "800",
        letterSpacing: "0.5px",
        color: "#97a3f4",
    },
    description: {
        marginBottom: "20px",
        fontSize: "1.15rem",
        lineHeight: "1.6",
        color: "rgba(255, 255, 255, 0.9)",
    },
    techTag: {
        fontSize: "1rem",
        fontWeight: "600",
        padding: "6px 14px",
        borderRadius: "20px",
        background: "rgba(151, 163, 244, 0.2)",
        color: "#97a3f4",
        display: "inline-block",
        marginTop: "10px",
        letterSpacing: "0.8px",
    },
};

const Project = () => {
    const fadeRefs = useRef([]);
    const [isFullScreenMode, setIsFullScreenMode] = useState(
        new Array(projects.length).fill(false)
    );

    const imageRefs = useRef([]);
    const fullScreenBgRefs = useRef([]);
    const overlayRefs = useRef([]);
    const contentRefs = useRef([]);
    const sectionBgRefs = useRef([]);

    // ... useEffect สำหรับ Intersection Observer คงเดิม ...
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const element = entry.target;
                    if (entry.isIntersecting) {
                        element.classList.add("fade-visible");
                    } else {
                        element.classList.remove("fade-visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        fadeRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const mergeStyles = (defaultStyle, hoverStyle, isHovered) => ({
        ...defaultStyle,
        ...(isHovered ? hoverStyle : {}),
    });

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const toggleFullScreen = (index) => {
        const currentProject = projects[index];
        const isCurrentlyFullScreen = isFullScreenMode[index];

        // 🎯 Easing: ใช้ Expo.easeInOut หรือ Power4.easeInOut เพื่อความ smooth และ professional
        const tl = gsap.timeline({
            defaults: { duration: 0.8, ease: "power2.inOut" },
            onComplete: () => {
                // อัปเดต State หลังจาก Animation เสร็จสิ้น
                setIsFullScreenMode((prev) => {
                    const newState = [...prev];
                    newState[index] = !isCurrentlyFullScreen;
                    return newState;
                });
            }
        });

        const defaultGradient = projects[index].isEven
            ? "linear-gradient(135deg, #0d0d2b 0%, #1e1e4a 100%)"
            : "linear-gradient(135deg, #1e1e4a 0%, #2f1d5e 100%)";

        // 📌Refs สำหรับองค์ประกอบภายใน Content (เพื่อเปลี่ยนสี)
        const contentDiv = contentRefs.current[index];
        const titleElement = contentDiv.querySelector('h2');

        if (!isCurrentlyFullScreen) {
            // 🚀 ไปยัง Full Screen Mode

            // 1. Fade out/Slide out รูปภาพเล็กและ Gradient พื้นหลัง
            tl.to(imageRefs.current[index], { opacity: 0, scale: 0.9, x: projects[index].isEven ? -30 : 30, duration: 0.6, ease: "power2.in" })
                .to(sectionBgRefs.current[index], { background: 'transparent', duration: 0.8 }, "<")

                // 2. Text/Content: เฟดจางลงและเปลี่ยนสีไปเป็นสีขาว (แต่ตำแหน่งนิ่ง)
                .to(titleElement, { color: 'white', duration: 0.5 }, "<0.2") // เปลี่ยนสี Title ให้ Smooth
                .to(contentDiv, { opacity: 1, x: 0 }, "<") // ทำให้ Opacity ของ Content จางลงเล็กน้อย (ถ้าต้องการเน้น Background)
                .to(contentDiv.querySelector('p:last-child'), { opacity: 1, duration: 0.4 }, "<") // เปลี่ยน Opacity ของป้าย Click to close

                // 3. Setup และ Fade in รูปพื้นหลังเต็มจอและ Overlay
                .set(imageRefs.current[index], { display: 'none' })
                .set(fullScreenBgRefs.current[index], { backgroundImage: `url('${currentProject.full_image_bg}')`, display: 'block' })
                .set(overlayRefs.current[index], { display: 'block' }, "<")

                .to(fullScreenBgRefs.current[index], { opacity: 1, scale: 1, duration: 1.0, ease: "power3.out" }, "<0.1") // Zoom/Fade in
                .to(overlayRefs.current[index], { opacity: 1 }, "<");

        } else {
            // 🔙 กลับไปยัง Small Image Mode

            // 1. Fade out รูปพื้นหลังเต็มจอและ Overlay
            tl.to(fullScreenBgRefs.current[index], { opacity: 0, scale: 1.1, duration: 0.8, ease: "power3.in" })
                .to(overlayRefs.current[index], { opacity: 0 }, "<")

                // 2. Fade in Gradient พื้นหลัง
                .to(sectionBgRefs.current[index], { background: defaultGradient, duration: 0.8 }, "<0.2")

                // 3. Text/Content: เฟดกลับมาและเปลี่ยนสี Title กลับเป็นสีเดิม
                .to(titleElement, { color: '#97a3f4', duration: 0.5 }, "<0.2")
                .to(contentDiv, { opacity: 1, x: 0 }, "<")

                // 4. Setup และ Fade in รูปภาพเล็ก
                .set(fullScreenBgRefs.current[index], { display: 'none' })
                .set(overlayRefs.current[index], { display: 'none' })
                .set(imageRefs.current[index], { display: 'block' }, "<0.2")

                .to(imageRefs.current[index], { opacity: 1, scale: 1, x: 0, duration: 0.6, ease: "back.out(1.7)" }, "<");
        }
    };

    return (
        <div style={{ paddingTop: "0px", overflowX: "hidden" }}>
            {/* ... CSS Style Blocks คงเดิม ... */}
            <style>
                {`
                .fade-item {
                    opacity: 0;
                    transform: translateX(-80px);
                    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                /* ... ส่วน CSS ที่เหลือคงเดิม ... */
                .fade-visible {
                    opacity: 1 !important;
                    transform: translateX(0) !important;
                }
                @media (max-width: 1024px) {
                    /* ... Media Query คงเดิม ... */
                }
                `}
            </style>

            {projects.map((p, i) => {
                const isEven = i % 2 === 0;
                const containerStyle = styles.container(!isEven);
                const fadeClass = isEven ? "fade-item" : "fade-item right-to-left";
                const isCurrentProjectFullScreen = isFullScreenMode[i];

                return (
                    <section
                        key={i}
                        ref={(el) => (sectionBgRefs.current[i] = el)}
                        style={styles.section(isEven)}
                    >
                        {/* Full Screen Background และ Overlay */}
                        <div
                            ref={(el) => (fullScreenBgRefs.current[i] = el)}
                            style={{
                                ...styles.fullScreenBg,
                                // GSAP จะจัดการ display และ opacity
                            }}
                        />
                        <div
                            ref={(el) => (overlayRefs.current[i] = el)}
                            style={{
                                ...styles.overlay,
                                // GSAP จะจัดการ display และ opacity
                            }}
                        />

                        {/* FADE เฉพาะ content นี้ */}
                        <div
                            ref={(el) => (fadeRefs.current[i] = el)}
                            className={`${fadeClass} project-container`}
                            style={containerStyle}
                            onClick={() => isCurrentProjectFullScreen && toggleFullScreen(i)}
                        >
                            {/* รูปภาพเล็ก */}
                            <img
                                ref={(el) => (imageRefs.current[i] = el)}
                                src={p.image}
                                alt={p.title}
                                className="project-image"
                                style={mergeStyles(
                                    styles.img,
                                    styles.img[":hover"],
                                    hoveredIndex === i
                                )}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFullScreen(i);
                                }}
                            />

                            {/* ส่วนเนื้อหา */}
                            <div
                                ref={(el) => (contentRefs.current[i] = el)}
                                className="project-content"
                                style={{ ...styles.content, opacity: isCurrentProjectFullScreen ? 0.8 : 1 }}
                            >
                                {/* ต้องมี Ref หรือใช้ querySelector ใน GSAP เพื่อเปลี่ยนสี title */}
                                <h2 style={styles.title}>{p.title}</h2>
                                <p style={styles.description}>{p.description}</p>
                                <span style={styles.techTag}>{p.tech}</span>
                                {isCurrentProjectFullScreen && (
                                    <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.8, cursor: 'pointer' }}>
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default Project;