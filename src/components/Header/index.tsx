import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="header w-screen">
			<div className="flex items-center font-sans">
				<div className="header__item header__item--divisor"
					onClick={() => {
						navigate('/actividades')
					}}
				>Actividades</div>
				<div className="header__item"
					onClick={() => {
						navigate('/nosotros')
					}}
				>Conocenos</div>
				<div className="header__item header__item--title grow"
					onClick={() => {
						navigate('/')
					}}
				>Rio Seco</div>
				<div className="header__item header__item--divisor">Ubicación</div>
				<div className="header__item">Contacto</div>
			</div>
		</div>
	)
}

export default Header