import './button.css';

interface Props {
	text: string;
	onClick?: () => void;
}

const Button = ({ text, onClick }: Props) => {
	return (
		<div className={`button-custom`} onClick={onClick}>
			<div>
				<p className="font-sans">{text}</p>
			</div>
		</div>
	)
}

export default Button