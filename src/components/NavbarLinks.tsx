import { link } from "fs"
import Link from "next/link"
import Image from "next/image"

const links = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/practice'},
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' }
]

export default function NavbarLinks() {
    return (
        <>
            <nav className=" bg-[#1a3350]">
                <div className="flex justify-around items-center">
                    <div className=" flex items-center">
                    <Image
                            src="/logo.png" // Substitua com o caminho do seu logo
                            alt="Logo"
                            width={40}
                            height={40}
                            className="mr-2"
                        />
                        <span className="text-white text-xl font-bold">Alexandre Guz</span>
                    </div>
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
                        {/* <button className="bg-slate-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow">
                            <Link 
                            key={"login"}
                            href={'/login'}> 
                            Login</Link>
                        </button> */}
                    </div>
                </div>
            </nav>

        </>
    )
};




// import Image from "next/image";
// import Link from "next/link";

// const links = [
//     { name: 'Home', href: '/home' },
//     { name: 'About', href: '/about' },
//     { name: 'Practice Areas', href: '/practice'},
//     { name: 'Projects', href: '/projects' },
//     { name: 'Resume', href: '/resume' },
//     { name: 'Contact', href: '/contact' }
// ];

// export default function NavbarLinks() {
//     return (
//         <>
//             <nav className="bg-[#1a3350]">
//                 <div className="flex justify-between items-center px-6 py-3">
//                     {/* Logo and Name */}
//                     <div className="flex items-center">
//                         <Image
//                             src="/logo.png" // Substitua com o caminho do seu logo
//                             alt="Logo"
//                             width={40}
//                             height={40}
//                             className="mr-2" // Espaço à direita do logo
//                         />
//                         <span className="text-white text-xl font-bold">Alexandre Guz</span>
//                     </div>
                    
//                     {/* Navigation Links */}
//                     <ul id="nav" className="flex items-center text-base">
//                         {links.map((link) => (
//                             <Link key={link.name} href={link.href}>
//                                 <li className="mr-5 text-white hover:text-gray-300 active:text-gray-500">
//                                     {link.name}
//                                 </li>
//                             </Link>
//                         ))}
//                     </ul>
//                 </div>
//             </nav>
//         </>
//     );
// }
