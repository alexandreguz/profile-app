import Sidebar from "@/components/Sidebar";
export default function WebNav({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body>
            <Sidebar />
            {children}
        </body>
    )
}