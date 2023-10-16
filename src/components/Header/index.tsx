import './header.css';

const Header = () => {
	return (
		<div className="header w-screen">
			<div className="flex items-center font-sans">
				<div className="header__item header__item--divisor">Actividades</div>
				<div className="header__item">Conocenos</div>
				<div className="header__item header__item--title grow">Rio Seco</div>
				<div className="header__item header__item--divisor">Ubicación</div>
				<div className="header__item">Contacto</div>
			</div>
		</div>
	)
}

export default Header