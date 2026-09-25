import { Link } from "react-router";

interface ButtonProps {
    label: string;
    to: string;
    bg: string;
    height?: number;
    width?: number;
    radius?: number;
    className?: string;
    fontSize?: number; 
}

export default function Button({ 
        label, 
        to, 
        bg, 
        height=55, 
        width =160, 
        radius= 16, 
        fontSize = 24,
        className, 
    }: ButtonProps) {
    return (
        <Link
            to={to}            
            style={{ 
                backgroundColor: bg, 
                height: `${height}px`, 
                width:  `${width}px`,
                fontSize:`${fontSize}px`,
                borderRadius: `${radius}px`,
            }}
            className={`${className ?? ''}`}

        >
            {label}
        </Link>
    );
}