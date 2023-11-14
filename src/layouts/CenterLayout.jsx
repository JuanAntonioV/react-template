export default function CenterLayout({ children, className = '', ...props }) {
    return (
        <main
            className={`w-screen h-screen flexCenterCol gap-6 ${className}`}
            {...props}
        >
            {children}
        </main>
    );
}
