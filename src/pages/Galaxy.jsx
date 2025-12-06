import React, { useState, useEffect, useRef } from "react";
import { Music, Quote, Images } from "lucide-react";
import ScrollReveal from './ScrollReveal';


// *** Component Wrapper ที่ทำหน้าที่ Fade-In On View (In-House) ***
const FadeInOnView = ({ children, delay = 0, className = "" }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    // Logic ตรวจสอบว่า Element อยู่ใน Viewport หรือไม่
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // ถ้าเข้าสู่ viewport (isIntersecting เป็น true)
                // หรือถ้าออกไปจาก viewport และเราต้องการ reset (ซึ่งเราต้องการให้ reset ได้ตลอด)
                setInView(entry.isIntersecting);
            },
            {
                rootMargin: '0px',
                threshold: 0.1, // Element ต้องมองเห็นอย่างน้อย 10%
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // Cleanup: ยกเลิกการสังเกตเมื่อ Component ถูกถอดออก
                observer.unobserve(ref.current);
            }
        };
    }, []); // Dependency array ว่างเปล่าเพื่อให้ Hook ทำงานเพียงครั้งเดียวเมื่อ Mount

    // คลาส Tailwind สำหรับ Transition และ State การมองเห็น
    const transitionClasses = `
        transition-all 
        duration-1000 
        ease-out 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${delay ? `delay-[${delay}ms]` : ""}
        ${className}
    `;

    return (
        <div ref={ref} className={transitionClasses}>
            {children}
        </div>
    );
};
// *** สิ้นสุด Component Wrapper ***


const CreativeShowcase = () => {
    const galleryImages = [
        "/mcpic/014.png",
        "/mcpic/015.png",
        "/mcpic/pic04.png",
        "/mcpic/pic05.png",
        "/mcpic/03.png",
        "/mcpic/lava.png",
        "/mcpic/ruins.png",
        "/mcpic/lbr.png",
    ];

    const playlists = [
        {
            title: "Chill & Focus: เพลงทำงานยามดึก",
            description: "เพลงแนว Lofi, Ambient, และ Synthwave ที่ใช้สร้างสมาธิและทำให้การโค้ดเป็นไปอย่างราบรื่น",
            src: "https://open.spotify.com/embed/playlist/1FEktutmxCWj8POcz7Lyd3?utm_source=generator",
        },
        {
            title: "Emotional Core: แรงบันดาลใจจากภาพยนตร์",
            description: "เพลงบรรเลงประกอบภาพยนตร์และเกม ที่เป็นแรงผลักดันให้เกิดโปรเจกต์ใหม่ ๆ ที่มีความลึกซึ้ง",
            src: "https://open.spotify.com/embed/playlist/0tw7Q0O2EV9AzpS7LOkbAb?utm_source=generator",
        },
    ];

    return (
        <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-white px-4 md:px-10 py-24">
            <div className="max-w-6xl mx-auto space-y-32">

                {/* ส่วนที่ 1: แกลเลอรี Minecraft */}
                <FadeInOnView> {/* ห่อหุ้มส่วนแรกทั้งหมด */}
                    <div className="pt-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold flex items-center justify-center md:justify-start gap-4 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-500">
                        - Gallery -
                        </h2>
                        <p className="text-slate-300 mb-12 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
                            รูปต่อไปนี้เป็นภาพหน้าจอบางส่วนจากโปรเจกต์ Minecraft ที่เราสร้างขึ้นคร่าวๆ มีหลายสไตล์ หลายไอเดีย สร้างด
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((img, i) => (
                                <FadeInOnView key={i} delay={i * 100} className="h-full">
                                    <div
                                        className="overflow-hidden rounded-xl shadow-xl shadow-black/50 ring-2 ring-indigo-700/50 transform hover:scale-[1.03] transition duration-500 ease-in-out cursor-pointer h-full"
                                    >
                                        <img
                                            src={img}
                                            alt={`ภาพหน้าจอ Minecraft ${i + 1}`}
                                            className="w-full h-56 object-cover aspect-video"
                                            loading="lazy"
                                        />
                                    </div>
                                </FadeInOnView>
                            ))}
                        </div>
                    </div>
                </FadeInOnView>

                {/* ส่วนที่ 2: เพลย์ลิสต์ Spotify */}
                <FadeInOnView> {/* ห่อหุ้มส่วนที่สองทั้งหมด */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold flex items-center justify-center md:justify-start gap-4 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
                            <Music className="w-9 h-9" />
                            เสียงเพลงที่ฉันใช้ชีวิตอยู่
                        </h2>

                        <p className="text-slate-300 mb-12 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
                            การรวมกันของบทเพลงที่ช่วยหล่อหลอมอารมณ์, ความคิดยามค่ำคืน, และแรงบันดาลใจในเกือบทุกโปรเจกต์ของฉัน
                            ลองสำรวจดูสิ — บางทีคุณอาจจะเจอเพลงที่รู้สึกเหมือนเป็นคุณก็ได้
                        </p>

                        <div className="grid md:grid-cols-2 gap-10">
                            {playlists.map((p, i) => (
                                <FadeInOnView key={i} delay={i * 150} className="h-full">
                                    <div className="bg-slate-900/50 rounded-2xl p-4 shadow-2xl shadow-black/50 border border-slate-800 backdrop-blur-sm h-full">
                                        <h3 className="text-2xl font-semibold mb-2 text-green-300">{p.title}</h3>
                                        <p className="text-sm text-slate-400 mb-4">{p.description}</p>
                                        <iframe
                                            src={p.src}
                                            width="100%"
                                            height="352"
                                            frameBorder="0"
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy"
                                            className="rounded-xl"
                                        ></iframe>
                                    </div>
                                </FadeInOnView>
                            ))}
                        </div>
                    </div>
                </FadeInOnView>

                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                >
                    แกทำให้บรรยากาศในบ้านดีขึ้นมากๆเลย ขอบคุณนะ - P' F
                    พอแกงป่าตั้งใจทำงานแล้วมันออกมาดีกว่าที่ซ้อมไว้อีกนะ - I
                    ไว้เจอกันใหม่นะเพื่อน ว่างๆ แวะมาหามั่ง เดี๋ยวเลี้ยงชาบู 55555+ - M  
                    อะไรที่แย่ๆ คนพวกนั้นก็แค่ทางผ่าน อย่าไปสนใจมันมากๆ - F
                    ผมเห็นพี่มีความสามารถเป็นผู้นำสุดๆ พี่แม่งไอดอลผม - NN
                </ScrollReveal>


            </div>
        </section>
    );
};

export default CreativeShowcase;