import SpotlightCard from './SpotlightCard';

export default function About() {
    return (
        <section className="relative w-full h-[800px]">

            {/* 🔥 Background Video */}
            <video
                src="/match-cut.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 🔥 Overlay มืดบางๆ เพื่อให้การ์ดอ่านง่ายขึ้น */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* 🔥 Content */}
            <div className="relative max-w-6xl mx-auto px-20 py-90 ">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <SpotlightCard
                        className="
              custom-spotlight-card 
              flex flex-col items-center justify-center text-center p-6
              bg-white/40 backdrop-blur-md border border-white/20 rounded-xl
            "
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <img src="/earphone-svgrepo-com.svg" className="w-16 h-16 mb-4" />
                        <h2 className="font-semibold text-lg mb-1">Web Developer</h2>
                        <p className="text-sm opacity-80">เราชอบทดลองอะไรใหม่ๆ เลยอยากใช้พื้นที่ตรงนี้เป็นพื้นที่ทดลองสิ่งใหม่ๆ</p>
                    </SpotlightCard>

                    {/* Card 2 */}
                    <SpotlightCard
                        className="
              custom-spotlight-card 
              flex flex-col items-center justify-center text-center p-6
              bg-white/40 backdrop-blur-md border border-white/20 rounded-xl
            "
                        spotlightColor="rgba(255, 170, 0, 0.2)"
                    >
                        <img src="/laptop-svgrepo-com.svg" className="w-16 h-16 mb-4" />
                        <h2 className="font-semibold text-lg mb-1">E-Sport Staff</h2>
                        <p className="text-sm opacity-80">ในฐานะจิปาถะ, พิธีกร และรับผิดชอบเรื่องการจัดการเว็บ E-Sport โรงเรียน</p>
                    </SpotlightCard>

                    {/* Card 3 */}
                    <SpotlightCard
                        className="
              custom-spotlight-card 
              flex flex-col items-center justify-center text-center p-6
              bg-white/40 backdrop-blur-md border border-white/20 rounded-xl
            "
                        spotlightColor="rgba(255, 0, 140, 0.2)"
                    >
                        <img src="/monitor-svgrepo-com.svg" className="w-16 h-16 mb-4" />
                        <h2 className="font-semibold text-lg mb-1">Game Developer</h2>
                        <p className="text-sm opacity-80">เรามีความฝันอยากที่จะเป็นนักพัฒนาเกม ซึ่งเรียนรู้และปรับตัวทำงานได้หลายอย่าง</p>
                    </SpotlightCard>

                </div>

            </div>
        </section>
    );
}
