import { motion } from "framer-motion";
import Layout from '../../components/Layout';
import SliderImages from '../../components/Slider';
import './about.css';

import image1 from '../../assets/img/fondo-3.jpg';
import image2 from '../../assets/img/act2.jpg';
import image3 from '../../assets/img/act3.jpg';

//Sliders Images
import Slider1 from '../../assets/img/slider1.jpg';
import Slider2 from '../../assets/img/slider2.jpg';
import Slider3 from '../../assets/img/slider3.jpg';
import Slider4 from '../../assets/img/fondo-1.jpg';

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
const About = () => {

	return (
		<Layout>
			{
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="about grid gap-10 grid-cols-2 bg-secundario">
						<div className="about__text font-sans">
							<h3 className="about__text--subtitle">Nosotros</h3>
							<h1 className="about__text--title text-principal">Rio Seco</h1>
							<p className="about__text--info">
								Bienvenidos a Río Seco, un rincón paradisíaco
								donde la naturaleza se une con la aventura.
								Situada en la costa, Río Seco es un tesoro
								escondido que ofrece un sinfín de experiencias
								para los amantes del mar, la vida silvestre y
								la diversión al aire libre. Descubre por qué
								Río Seco es el destino ideal para tus próximas
								vacaciones. ¡Deja que la magia de estas playas
								te atrape!
							</p>
						</div>
						<div className="about__image flex justify-end">
							<img src={image2} className="about__image--img" loading="lazy" decoding="async" alt="" />
						</div>
					</div>

					<div className="slider-content">
						<h5 className="slider-content__subtitle font-sans">¡Conocenos!</h5>
						<h3 className="slider-content__title font-serif">Descubre nuevas aventuras</h3>
						<SliderImages data={DataSlider} />
					</div>

					<div className="about--custom grid gap-10 grid-cols-2 bg-secundario">
						<div>
							<img src={image3} className="about__image--img" loading="lazy" decoding="async" alt="" />
							<div className="about__image--custom">
								<img src={image1} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
						</div>
						<div className="about__text font-sans">
							<h4 className="about__text--subtitle">Nuestra historia</h4>
							<h2 className="about__text--title text-principal">Ejido <br />Rio Seco</h2>
							<p className="about__text--info">Río Seco es mucho más que una playa; es una comunidad
								dedicada a la protección de las tortugas marinas.
								Durante décadas, hemos trabajado incansablemente
								para preservar estas majestuosas criaturas y su
								hábitat. Cada año, miles de tortugas recién nacidas
								encuentran refugio en nuestras playas, lo que nos
								llena de gratitud y alegría. La belleza de Río Seco
								no solo radica en su paisaje, sino en su compromiso
								con la vida marina.</p>
							<div className="about__text--image">
								<img src={Slider3} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
						</div>
					</div>
				</motion.div>

			}
		</Layout>
	)
}

export default About