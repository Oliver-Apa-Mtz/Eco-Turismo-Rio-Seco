import { motion } from "framer-motion";
import Layout from '../../components/Layout';
import './activities.css';

import image1 from '../../assets/img/fondo-4.jpg';
import image2 from '../../assets/img/act2.jpg';
import image3 from '../../assets/img/act3.jpg';
import image4 from '../../assets/img/act4.jpg';
import image5 from '../../assets/img/fondo-5.jpg';
import image6 from '../../assets/img/slider3.jpg';
import image7 from '../../assets/img/act1.jpg';
import image8 from '../../assets/img/fondo-1.jpg';
import image9 from '../../assets/img/fondo-3.jpg';


const Activities = () => {

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
							<h3 className="about__text--subtitle">Actividades</h3>
							<h1 className="about__text--title text-principal">Rio Seco</h1>
							<p className="about__text--info">
								¡Descubre Río Seco, donde la aventura y la naturaleza
								se fusionan en un paraíso costero! Nuestras playas
								son el hogar de tortugas recién nacidas, y en un
								esfuerzo por preservarlas, ofrecemos emocionantes
								experiencias como el surfeo para todos los niveles.
								Hospédate en nuestras acogedoras cabañas, explora la
								exuberante vegetación en rutas de senderismo,
								cabalgatas al atardecer y disfruta de delicias marinas
								en nuestro restaurante junto al mar. Únete a nosotros
								en Río Seco y contribuye a la conservación mientras te
								sumerges en la belleza y la emoción de la costa. ¡Tu
								aventura comienza aquí!
							</p>
						</div>
						<div className="about__image flex justify-end">
							<img src={image6} className="about__image--img" loading="lazy" decoding="async" alt="" />
						</div>
					</div>

					<div className="text-secondary">
						<h2 className="font-serif text-principal mb-4">Protección de Tortugas Recién Nacidas</h2>
						<h5 className="font-sans font-light text-xl">
							En Río Seco, estamos comprometidos con la conservación de la
							vida marina, y una de nuestras misiones más apasionantes es
							la protección de las tortugas marinas recién nacidas.
							Cada año, miles de estas pequeñas criaturas emprenden
							su viaje desde la arena hacia el vasto océano, enfrentando
							numerosos desafíos en su camino. Nuestra comunidad se une
							para garantizar que estas tortugas tengan las mejores posibilidades
							de supervivencia.
						</h5>
					</div>

					<div className="about--activity--custom grid gap-10 grid-cols-2">
						<div>
							<img src={image4} className="about__image--img" loading="lazy" decoding="async" alt="" />
							<p className="about__text--info pt-24">
								Tu participación en esta actividad no solo te permitirá presenciar el
								milagro de la vida marina, sino que también contribuirás directamente
								a la conservación de estas especies en peligro de extinción. Únete a
								nosotros en esta emocionante tarea y sé parte de la protección de las
								tortugas marinas en Río Seco. Cada paso que damos en la arena es un
								paso hacia un futuro más brillante para estas criaturas majestuosas.
								¡Ven y sé testigo de la maravilla de la naturaleza en Río Seco!
							</p>
						</div>
						<div className="about__text font-sans">
							<div className="about__text--image--custom">
								<img src={image5} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
							<p className="about__text--info">
								Durante la temporada de anidación, nuestros dedicados voluntarios
								patrullan las playas, identificando los nidos y marcándolos para
								su protección. Cuando llega el momento, cuidadosamente desenterramos
								los nidos y liberamos a las tortugas recién nacidas en la seguridad
								del océano. Es un espectáculo conmovedor y una experiencia única
								para nuestros visitantes.
							</p>
							<div className="about__text--image--custom">
								<img src={image6} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
						</div>
					</div>

					<div className="text-secondary text-secondary--activity">
						<h2 className="font-serif text-principal mb-4">Surfeo</h2>
						<h5 className="font-sans font-light text-xl">
							Nuestras olas son famosas entre los amantes del
							surf. Desde principiantes hasta profesionales,
							todos encontrarán su lugar aquí. ¡Agarra tu tabla
							y cabalga las olas de Río Seco!
						</h5>
					</div>

					<div className="about--activity grid gap-10 grid-cols-2">
						<div>
							<img src={image2} className="about__image--img" loading="lazy" decoding="async" alt="" />
						</div>
						<div className="about__text">
							<div className="about__text--image">
								<img src={image6} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
							<div className="about__text--image--custom">
								<img src={image1} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
						</div>
					</div>

					<div className="text-secondary text-secondary--activity">
						<h2 className="font-serif text-principal mb-4">Cabalgata</h2>
						<h5 className="font-sans font-light text-xl">
							Siente la libertad mientras cabalgas por la playa al atardecer.
							Nuestras excursiones a caballo son una experiencia única.
						</h5>
					</div>

					<div className="about--activity grid gap-10 grid-cols-2">
						<div className="about__text">
							<div className="about__text--image">
								<img src={image6} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
							<div className="about__text--image--custom">
								<img src={image1} className="about__image--img" loading="lazy" decoding="async" alt="" />
							</div>
						</div>
						<div>
							<img src={image3} className="about__image--img" loading="lazy" decoding="async" alt="" />
						</div>
					</div>

					<div className="text-secondary text-secondary--activity">
						<h2 className="font-serif text-principal mb-4">Hospedaje en Cabañas</h2>
						<h5 className="font-sans font-light text-xl">
							Sumérgete en la tranquilidad de la naturaleza y relájate en
							nuestras cómodas cabañas. Despiértate con el sonido de las
							olas y el canto de las aves.
						</h5>
					</div>

					<div className="about--activity grid gap-10 grid-cols-2">
						<div>
							<img src={image8} className="about__image--img" loading="lazy" decoding="async" alt="" />
						</div>
						<div>
							<img src={image9} className="about__image--img" loading="lazy" decoding="async" alt="" />
						</div>
					</div>

					<div className="text-secondary text-secondary--activity">
						<h2 className="font-serif text-principal mb-4">Restaurante junto al Mar</h2>
						<h5 className="font-sans font-light text-xl">
							Nuestro restaurante ofrece delicias culinarias con vistas al mar.
							Disfruta de mariscos frescos y platos locales mientras contemplas
							la puesta de sol.
						</h5>
					</div>

				</motion.div>

			}
		</Layout>
	)
}

export default Activities