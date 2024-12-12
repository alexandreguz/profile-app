import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="bg-gradient-to-b from-gray-600 to-gray-300">
                <div className="flex content-normal items-center">
                    <div className="text-6xl font-bold w-1/3 ml-40 text-left text-white mt-32">About Me</div>
                    <div className="text-2xl text-left w-2/5 text-white mt-32 ml-16 border-l-4 border-red-600 pl-20">
                        I am Brazilian, with a journey that bridges tradition, learning, and innovation. I had the privilege of studying at the renowned Yeshivat Chevron and was ordained as a Rabbi by the Rabanut Harashit LeIsrael, deepening my understanding of Judaism’s rich heritage. For 15 years, I dedicated myself to teaching and leading in the Jewish community of São Paulo, shaping generations and sharing essential values.
                        Upon returning to Israel, I expanded my professional horizons, working as a Product Manager, Manual QA, and Automation QA. In these roles, I combine analytical expertise and technical skills to deliver high-quality solutions. My mission is to merge tradition with technology, striving for excellence in every project I undertake.
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-32 ml-32 mt-28 w-1/3">
                        <Image
                            src="/eu5.png"
                            width={620}
                            height={7000}
                            alt="me"
                        />
                    </div>
                    <div className="flex-col w-2/5">
                        <div className="text-6xl font-bold text-white mt-16 mb-8">
                            Why Hire Me?
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-white mb-1">Proven Expertise</h3>
                            <p className="text-white text-2xl mb-4">With over 15 years of experience in education, leadership, and technical roles, I bring a unique blend of analytical thinking, problem-solving, and creativity to every challenge.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-white mb-1">Adaptability</h3>
                            <p className="text-white text-2xl mb-4">My journey from the world of Jewish education to product management and quality assurance showcases my ability to adapt and excel in diverse fields.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-white mb-1">Commitment to Excellence</h3>
                            <p className="text-white text-2xl mb-4">Whether delivering innovative tech solutions or imparting deep-rooted knowledge, I strive for perfection and consistently exceed expectations.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-white mb-1">Bridge Builder</h3>
                            <p className="text-white text-2xl mb-4">I excel at connecting tradition with modernity, combining deep understanding with cutting-edge technology to create impactful and meaningful results.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-white mb-1">Collaborative Spirit</h3>
                            <p className="text-white text-2xl mb-4">I thrive in team environments, working closely with colleagues to achieve shared goals while fostering a positive and inclusive workplace culture.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
