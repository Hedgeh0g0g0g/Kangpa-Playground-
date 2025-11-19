import TextType from './TextType';
import { FaGithub, FaInstagram } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/src/items/2.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">

                {/* TextType หัวข้อหลัก */}
                <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight text-blue-500">
                    <TextType
                        text={[
                            "อาคิรา รวงผึ้งทอง",
                        ]}
                        typingSpeed={200}
                        pauseDuration={4500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </h1>

                {/* Subtext */}
                <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                    สวัสดี, เราแกงป่าเองนะ! มารู้จักเราเพิ่มเติมหรอ?
                </p>

                {/* Buttons */}
                <div className="mt-8 flex justify-center space-x-6">
                    <a
                        href="https://github.com/Hedgeh0g0g0g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-3xl hover:text-gray-300 transition-transform transform hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.instagram.com/akixrrr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-3xl hover:text-pink-400 transition-transform transform hover:scale-110"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </section>
    );
}
