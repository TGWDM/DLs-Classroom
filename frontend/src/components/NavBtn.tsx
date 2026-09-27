import { Link } from "react-router";

interface navBtnProps {
    label: string;
    to: string;
    className?: string;
    bg?:string

}

export default function NavBtn({
    label,
    to,
    className,
    bg
}: navBtnProps) {
    return (
        <Link
            to={to}
            className={`${className ?? ''}`}
            style={{
                backgroundColor:bg
            }}
        >
            {label}
        </Link>
    );
}