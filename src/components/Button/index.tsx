import './button.css';

interface Props {
	text: string;
	type: string;
}

const Button = ({ text, type }: Props) => {
	return (
		<div className={`button-custom button-custom__${type}`}>
			<div>
				<p className="font-sans">{text}</p>
			</div>
		</div>
	)
}

export default Button