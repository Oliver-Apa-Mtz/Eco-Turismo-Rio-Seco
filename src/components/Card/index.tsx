import './card.css';

interface Props {
	index: number;
	title: string;
	colorTitle: string;
	description: string;
	image: string;
}
const Card = ({ index, title, colorTitle, description, image }: Props) => {
	return (
		<div className={`cardImage h-screen bg-cover ${index % 2 === 0 ? 'cardImage--custom' : ''}`} style={{ backgroundImage: `url(${image})` }}>
			<div>
				<h5 className={`cardImage__title font-sans text-${colorTitle} font-bold text-2xl mb-2 text-center`}>{title}</h5>
				<p className="cardImage__text font-serif">{description}</p>
			</div>
		</div>
	)
}

export default Card