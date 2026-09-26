import { Link } from "react-router";

interface navBtnProps {
    label: string;
    to: string;
    bg: string;
    height?: number;
    width?: number;
    radius?: number;
    className?: string;
    fontSize?: number;
}

export default function NavBtn({
    label,
    to,
    bg,
    height = 55,
    width = 160,
    radius = 16,
    fontSize = 24,
    className,
}: navBtnProps) {
    return (
        <Link
            to={to}
            style={{
                backgroundColor: bg,
                height: `${height}px`,
                width: `${width}px`,
                fontSize: `${fontSize}px`,
                borderRadius: `${radius}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            className={`${className ?? ''}`}

        >
            {label}
        </Link>
    );
}