import './button.css';

interface Props {
	text: string;
	type: string;
	onClick?: () => void;
}

const Button = ({ text, type, onClick }: Props) => {
	return (
		<div className={`button-custom button-custom__${type}`} onClick={onClick}>
			<div>
				<p className="font-sans">{text}</p>
			</div>
		</div>
	)
}

export default Button