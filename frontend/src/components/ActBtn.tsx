interface actBtnProps {
    label: string;
    onClick: () => void;
    bg: string;
    height?: number;
    width?: number;
    radius?: number;
    className?: string;
    fontSize?: number;
}

export default function ActBtn({
    label,
    onClick,
    bg,
    height = 55,
    width = 160,
    radius = 16,
    fontSize = 24,
    className,
}: actBtnProps) {
    return (
        <button
            onClick={onClick}
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
        </button>
    );
}