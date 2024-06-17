import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './header.css';
import Button from '../Button';
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {
	const [menuMovil, setMenuMovil] = useState(false);

	const handleResize = () => {
		const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
		if (isLargeScreen) {
			setMenuMovil(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={`header w-screen ${menuMovil ? 'header--active' : ''}`}>
			<div className="header__content">
				<div className='header__logo poppins-bold'>
					<Link
						to="home"
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						className='cursor-pointer'>
						Rio Seco
					</Link>
				</div>
				<div className='header__nav'>
					<Link
						to="about"
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						className="header__nav__item text-black be-vietnam-pro-light">
						Conócenos
					</Link>
					<Link
						to="activity"
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						className="header__nav__item text-black be-vietnam-pro-light">
						Actividades
					</Link>
					<Link
						to="contacto"
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						className="header__nav__item text-black be-vietnam-pro-light">
						Ubicación
					</Link>
				</div>
				<div className='header__buttons'>
					<Button text={'Contactanos'} />
				</div>
				<div className='header__menu text-4xl'>
					<RiMenu4Fill className='cursor-pointer text-black' onClick={() => setMenuMovil(!menuMovil)} />
				</div>
			</div>
			{menuMovil && (
				<div className='header__nav__movil bg-white'>
					<Link
						to="about"
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						onClick={() => setMenuMovil(false)}
						className="header__nav__item__movil text-black text-xl be-vietnam-pro-light">
						Conócenos
					</Link>
					<Link
						to="activity"
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						onClick={() => setMenuMovil(false)}
						className="header__nav__item__movil text-black text-xl be-vietnam-pro-light">
						Actividades
					</Link>
					<Link
						to="contacto"
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						onClick={() => setMenuMovil(false)}
						className="header__nav__item__movil text-black text-xl be-vietnam-pro-light">
						Ubicación
					</Link>
				</div>
			)}
		</div>
	)
}

export default Header