import { useNavigate } from 'react-router-dom';
import './card.css';

import Button from '../Button';

interface Props {
	index: number;
	title: string;
	colorTitle: string;
	description: string;
	image: string;
}
const Card = ({ index, title, colorTitle, description, image }: Props) => {
	const navigate = useNavigate();
	return (
		<div className={`cardImage h-screen bg-cover ${index % 2 === 0 ? 'cardImage--custom' : ''}`} style={{ backgroundImage: `url(${image})` }}>
			<div>
				<h5 className={`cardImage__title font-sans text-${colorTitle} font-bold text-2xl mb-2 text-center`}>{title}</h5>
				<p className="cardImage__text font-serif">{description}</p>
				<div className="cardImage__button">
					<Button text="Ver más" type="primary" onClick={() => navigate('/actividades')} />
				</div>
			</div>
		</div>
	)
}

export default Card