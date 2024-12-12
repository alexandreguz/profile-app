// components/Resume.tsx
import React from 'react';

const Resume: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-lg mt-10 mb-10">
            <header className="flex items-center justify-between mb-6">
                <h1 className="text-5xl font-bold text-blue-600">Alexandre Guz</h1>
                <div className="text-right">
                    <p className="text-xl font-semibold">Automation QA Engineer</p>
                    <p className="text-gray-600">Contact: 058-4668982</p>
                    <p className="text-gray-600">Email: <a href="mailto:guzalexandre@gmail.com" className="text-blue-600">guzalexandre@gmail.com</a></p>
                    <p className="text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/alexandre-guz-25803218a/" target="_blank" rel="noopener noreferrer" className="text-blue-600">linkedin.com/in/alexandre-guz-25803218a</a></p>
                </div>
            </header>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Experience</h2>
                <div className="mb-4 p-4 border-l-4 border-blue-600 bg-gray-100">
                    <h3 className="text-xl font-semibold">QA Automation Engineer / BS2 Bank Brasil</h3>
                    <p className="text-gray-500">JAN 2022 - PRESENT, Jerusalem</p>
                    <ul className="list-disc ml-5 mt-2">
                        <li>Developed and executed manual and automated test cases for web applications.</li>
                        <li>Collaborated with developers to troubleshoot and resolve issues.</li>
                        <li>Conducted regression testing to ensure software quality and prevent defects.</li>
                        <li>Validated data integrity and calculations in databases.</li>
                        <li>Tested integrations with 3rd party systems.</li>
                        <li>Checked cron schedulers and message-broker queues.</li>
                    </ul>
                </div>
                <div className="mb-4 p-4 border-l-4 border-blue-600 bg-gray-100">
                    <h3 className="text-xl font-semibold">QA Automation Engineer / Weel</h3>
                    <p className="text-gray-500">2020 - 2021, Ramat Gan / Jerusalem</p>
                </div>
                <div className="mb-4 p-4 border-l-4 border-blue-600 bg-gray-100">
                    <h3 className="text-xl font-semibold">Product Manager / Weel</h3>
                    <p className="text-gray-500">2017 - 2020, Ramat Gan</p>
                    <ul className="list-disc ml-5 mt-2">
                        <li>Analyzed market trends and customer feedback to inform product roadmap decisions.</li>
                        <li>Led cross-functional teams to successfully launch new products and features.</li>
                        <li>Collaborated with stakeholders to prioritize features and enhancements based on business goals.</li>
                        <li>Managed and wrote BRD/PRD.</li>
                        <li>Responsibility for CS interactions.</li>
                    </ul>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Skills and Technologies</h2>
                <ul className="list-disc ml-5">
                    <li>QA Automation Development in Elixir/Wallaby</li>
                    <li>Cypress (course completed)</li>
                    <li>SQL</li>
                    <li>React/Next.js</li>
                    <li>Angular/Material</li>
                    <li>Gitlab/Github</li>
                    <li>Product Management and Analysis</li>
                    <li>Customer Service Team Management</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Languages</h2>
                <ul className="list-disc ml-5">
                    <li>Hebrew - Fluent</li>
                    <li>English - Full professional proficiency</li>
                    <li>Portuguese - Mother tongue</li>
                    <li>Spanish - Full professional proficiency</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;
