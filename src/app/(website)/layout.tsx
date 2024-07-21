import Navbar from "@/components/NavbarLinks";
export default function WebNav({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body>
            <Navbar />
            {children}
        </body>
    )
}