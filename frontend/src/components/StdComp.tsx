import stdIcon from '../assets/Student default Icon.svg'

interface StdCompProps {
	fName: string;
	lName: string;
	iconUrl?: string;
	height?: number;
	maxWidth?: number;
	style?: {}
}

export default function StdComp({
	fName,
	lName,
	iconUrl = stdIcon,
	height = 119,
	maxWidth = 100,
	style
}: StdCompProps) {
	return (
		<div style={{
			position: 'absolute',
			height: 18.65,
			width: 8.26,
			top: 70,
			right: 11.18,
			bottom: 9.28,
			left: 80.56,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			whiteSpace: 'nowrap'
		}}>
			<div style={{
				width: 100,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 87,
				maxWidth: 100,
				flexShrink: 0.
			}} data-testid="student-Icon-Wrapper">
				<img src={iconUrl} style={{
					height: `${height}px`,
					maxWidth: `${maxWidth}%`,
					alignItems: 'center',
					justifyContent: 'center',
					...style
				}} alt="student-Icon" />
			</div>
			<div style={{ position: 'relative',flexDirection:'row', fontSize: 12 }}>
				{fName}, {lName}
			</div>
		</div >
	);
}