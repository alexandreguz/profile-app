export default function({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body>
            {children}
        </body>
    )
}