import Link from "next/link"

export default function () {
    return (
        <>
            <nav className=" bg-[#1a3350]  ">
                <div className="flex justify-around items-center">
                    <div className="text-white">TECH LAWER</div>
                    
                    <div className="flex content-center items-center p-3 text-white">
                        <ul id="nav" className="flex items-center text-base  p-3 ">
                            <li className=" mr-5 text-white hover:text-gray-300 active:text-gray-500">
                                <a className="focus:outline-none" href="#home">Home</a>
                            </li>
                            <li className=" mr-5 text-white hover:text-gray-300 active:text-gray-500">
                                <a className="focus:outline-none" href="#about">About</a>
                            </li>
                            <li className=" mr-5 text-white hover:text-gray-300 active:text-gray-500">
                                <a className="focus:outline-none" href="#practice">Practice Areas</a>
                            </li>
                            <li className=" mr-5 text-white hover:text-gray-300 active:text-gray-500">
                                <a className="focus:outline-none" href="#team">Team</a>
                            </li>
                            <li className=" mr-5 text-white hover:text-gray-300 active:text-gray-500">
                                <a className="focus:outline-none" href="#blog">Blog</a>
                            </li>
                            <li className=" mr-5 text-white hover:text-gray-300 active:text-gray-500">
                                <a className="focus:outline-none" href="#contact">Contact</a>
                            </li>
                        </ul>

                        <button className="bg-slate-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            <a href="#contact">Free Consultation</a>
                        </button>
                    </div>
                </div>



            </nav >
        </>




    )
}