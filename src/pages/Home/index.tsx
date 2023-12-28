
import { useEffect } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';
import './home.css';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import SliderImages from '../../components/Slider';

import videoSource from '../../assets/img/background.mp4';
import backgroundImage from '../../assets/img/fondo.png';
import image1 from '../../assets/img/fondo-3.jpg';
import image2 from '../../assets/img/act2.jpg';
import image4 from '../../assets/img/img-4.jpeg';

//Sliders Images
import Slider1 from '../../assets/img/slider1.jpg';
import Slider2 from '../../assets/img/slider2.jpg';
import Slider3 from '../../assets/img/slider3.jpg';
import Slider4 from '../../assets/img/fondo-1.jpg';

const data = [
	{
		title: 'Surfeo',
		description: 'Nuestras olas son famosas entre los amantes del surf.',
		colorTitle: 'principal',
		image: image2
	},
	{
		title: 'Rescate de Tortugas',
		description: '¡Ven y sé testigo de la maravilla de la naturaleza en Río Seco!',
		colorTitle: 'black',
		image: image4
	},
	{
		title: 'Cabañas',
		description: 'Relájate en nuestras cómodas cabañas.',
		colorTitle: 'principal',
		image: image1
	}
]
const DataSlider = [
	{
		id: 1,
		image: Slider1,
		title: 'Tranquilidad',
		description: 'Disfruta de nuestras playas y pasa un tiempo increible.'
	},
	{
		id: 2,
		image: image1,
		title: 'Diversión',
		description: 'Disfruta de nuestras playas y pasa un tiempo increible.'
	},
	{
		id: 3,
		image: Slider3,
		title: 'Naturaleza',
		description: 'Disfruta de nuestras playas y pasa un tiempo increible.'
	},
	{
		id: 4,
		image: Slider4,
		title: 'Naturaleza',
		description: 'Disfruta de nuestras playas y pasa un tiempo increible.'
	},
	{
		id: 5,
		image: Slider2,
		title: 'Naturaleza',
		description: 'Disfruta de nuestras playas y pasa un tiempo increible.'
	}
]
const Home = () => {

	useEffect(() => {
		const options = {
			duration: 0,
			smooth: false,
		};
		scroll.scrollToTop(options);
	}, [])

	return (
		<Layout>
			{
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className={`h-screen bg-cover video-bg`}>
						<video className=" w-full h-screen object-cover"
							id="video" autoPlay muted loop poster={backgroundImage}>
							<source src={videoSource} type="video/mp4" />
						</video>
						<div className="text-ppal flex items-center flex-wrap">
							<h1 className="font-sans">
								Rio Seco
								<br />
								<span>EcoTurismo Ejido Rio Seco</span>
							</h1>
						</div>
					</div>

					<div className="text-secondary">
						<h4 className="text-principal font-sans">¿Listo para la aventura?</h4>
						<h2 className="font-serif">
							Descubre la belleza natural y la cultura local.
						</h2>
					</div>

					<div className="cards-content grid gap-10 grid-cols-3">
						{data.map((item, index) => (
							<div key={index}>
								<Card index={index} title={item.title} description={item.description} image={item.image} colorTitle={item.colorTitle}></Card>
							</div>
						))}
					</div>

					<div className="slider-content">
						<h5 className="slider-content__subtitle font-sans text-terciario">¡Conocenos!</h5>
						<h3 className="slider-content__title font-serif text-secundario">Descubre nuevas aventuras</h3>
						<SliderImages data={DataSlider} />
					</div>

					<div className="about grid gap-10 grid-cols-2 bg-secundario">
						<div className="about__text font-sans">
							<h3 className="about__text--subtitle">¡Descubre!</h3>
							<h1 className="about__text--title text-principal">Rio Seco</h1>
							<p className="about__text--info">
								Si estás buscando un destino de playa que combine la
								conservación de la vida marina con la emoción del
								surfeo, Río Seco es el lugar ideal. Nuestras playas
								de arena dorada son el hogar de tortugas marinas en
								peligro de extinción, y tu visita contribuirá a su
								preservación. Además, ofrecemos una amplia gama de
								actividades para todos los gustos. Descubre la
								magia de Río Seco hoy mismo.
							</p>
							<div className="about__text--image">
								<img src={Slider3} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
						</div>
						<div className="about__image--home">
							<div className="flex justify-end">
								<img src={image2} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
						</div>
					</div>
				</motion.div>
			}
		</Layout>
	)
}

export default Home