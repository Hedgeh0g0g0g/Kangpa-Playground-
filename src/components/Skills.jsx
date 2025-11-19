export default function Skills() {
    return (
        <section id="skills" className="bg-gray-200 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-semibold mb-4">ทักษะของฉัน</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <li className="bg-white shadow p-4 rounded">React</li>
                    <li className="bg-white shadow p-4 rounded">TailwindCSS</li>
                    <li className="bg-white shadow p-4 rounded">JavaScript</li>
                    <li className="bg-white shadow p-4 rounded">Node.js</li>
                    <li className="bg-white shadow p-4 rounded">UI/UX Design</li>
                </ul>
            </div>
        </section>
    );
}
