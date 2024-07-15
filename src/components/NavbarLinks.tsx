import { link } from "fs"
import Link from "next/link"

const links = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/practice' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
]

export default function NavbarLinks() {
    return (
        <>
            <nav className=" bg-[#1a3350]">
                <div className="flex justify-around items-center">

                    <div className="text-white">TECH LAWER</div>
                    <div className="flex content-center items-center p-3 text-white">

                        <ul id="nav" className="flex items-center text-base  p-3 ">

                            {links.map((link) => {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                    >
                                        <li className=" mr-5 text-white hover:text-gray-300 active:text-gray-500">{link.name}</li>
                                    </Link>
                                );
                            })}
                        </ul>
                        <button className="bg-slate-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow">
                            <a href="#contact">Login</a>
                        </button>
                    </div>
                </div>
            </nav>

        </>
    )
};




