import type React from "react";

interface actBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
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
    borderStyle = 'solid',
    style,
    ...rest
}: actBtnProps) {
    return (
        <button
            onClick={onClick}
            {...rest}
            style={{
                height: `${height}px`,
                width: `${width}px`,
                fontSize: `${fontSize}px`,
                borderRadius: `${radius}px`,
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'center',
                borderStyle: `${borderStyle}`,
                ...style
            }}
            className={`${className ?? ''}`}
            disabled={disabled}

        >
            {label}
        </button>
    );
}