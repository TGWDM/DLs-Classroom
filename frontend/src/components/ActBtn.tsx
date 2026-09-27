interface actBtnProps {
    label: string;
    onClick: () => void;
    height?: number;
    width?: number;
    radius?: number;
    className?: string;
    fontSize?: number;
    disabled?: boolean;
    borderStyle?: string;
}

export default function ActBtn({
    label,
    onClick,
    height = 55,
    width = 160,
    radius = 16,
    fontSize = 24,
    className,
    disabled = false,
    borderStyle = 'solid'
}: actBtnProps) {
    return (
        <button
            onClick={onClick}
            style={{
                height: `${height}px`,
                width: `${width}px`,
                fontSize: `${fontSize}px`,
                borderRadius: `${radius}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderStyle: `${borderStyle}`
            }}
            className={`${className ?? ''}` } 
            disabled = {disabled}

        >
            {label}
        </button>
    );
}