import { useEffect } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';
import './main.css';

import { MdSurfing } from "react-icons/md";
import { GiSeaTurtle, GiHouse, GiHorseHead, GiFishCooked } from "react-icons/gi";

import Layout from '../../components/Layout';
import video from '../../assets/img/reel1.mp4';
import Mapa from '../../assets/img/mapa.png';
import Icon from '../../assets/img/whatsapp.png';
import image1 from '../../assets/img/img-3.jpeg';
import image2 from '../../assets/img/img-1.jpeg';
import image3 from '../../assets/img/img-5.jpeg';
import image4 from '../../assets/img/img-2.jpeg';
import image5 from '../../assets/img/img-4.jpeg';
import image6 from '../../assets/img/act2.jpg';
import image7 from '../../assets/img/rest1.jpg';
import Dinno from '../../assets/img/logo-dinno.png';

const Main = () => {

	useEffect(() => {
		const options = {
			duration: 0,
			smooth: false,
		};
		scroll.scrollToTop(options);
	}, [])

	const openWhatsApp = (phoneNumber: string) => {
		const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&amp;text=Hola, quiero más informes de Río Seco`;
		window.open(whatsappUrl, '_blank');
	}

	return (
		<Layout>
			{
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="main bg-principal" id="home">
						<div className="main__content block lg:flex justify-between items-center gap-10">
							<div className="main__text">
								<h1 className="main__text__title main__text__title--top mb-8 poppins-medium">Bienvenidos a Flor del Pacífico</h1>
								<p className="main__text__info be-vietnam-pro-light">
									Ubicados en la Playa Morro Ayuta del Ejido
									Río Seco, un rincón paradisíaco donde la
									naturaleza se une con la aventura.
									Situada en la costa, Río Seco es un tesoro
									escondido que ofrece un sinfín de experiencias
									para los amantes del mar, la vida silvestre y
									la diversión al aire libre. Descubre por qué
									Río Seco es el destino ideal para tus próximas
									vacaciones. ¡Deja que la magia de estas playas
									te atrape!
								</p>
							</div>
							<div className="main__video">
								<video className="main__video__media" controls poster={image2}>
									<source src={video} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					</div>

					<div className="main" id="about">
						<div className="main__content" style={{ paddingBottom: '0px' }}>
							<div className="text-center mb-20 w-full md:w-3/4 mx-auto">
								<h2 className="main__text__title mb-6 poppins-medium">Ejido Rio Seco</h2>
								<p className="be-vietnam-pro-light text-lg">
									Río Seco es mucho más que una playa; es una comunidad
									dedicada a la protección de las tortugas marinas.
									Durante décadas, hemos trabajado incansablemente
									para preservar estas majestuosas criaturas y su hábitat.
									Cada año, miles de tortugas recién nacidas encuentran
									refugio en nuestras playas, lo que nos llena de gratitud
									y alegría. La belleza de Río Seco no solo radica en su
									paisaje, sino en su compromiso con la vida marina.
								</p>
							</div>
							<div className="md:flex justify-center gap-20">
								<div className="rounded-2xl overflow-hidden h-max w-[250px] md:w-auto mx-auto md:mx-0 mb-10">
									<img src={image2} className="about__image--img" loading="lazy" decoding="async" alt="" />
								</div>
								<div>
									<div className="rounded-2xl overflow-hidden h-max mb-10 w-[250px] md:w-auto mx-auto md:mx-0">
										<img src={image1} className="about__image--img" loading="lazy" decoding="async" alt="" />
									</div>
									<div className="rounded-2xl overflow-hidden h-max w-[250px] lg:w-[300px] mx-auto">
										<img src={image3} className="about__image--img" loading="lazy" decoding="async" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="main" id="activity">
						<div className="main__content">
							<div className="text-center mb-20 lg:w-1/2 mx-auto">
								<h2 className="main__text__title mb-6 poppins-medium">Descubre nuevas aventuras</h2>
								<p className="be-vietnam-pro-light text-lg">Si estás buscando un destino de playa que combine la conservación de la vida marina con la emoción del surfeo, Río Seco es el lugar ideal. </p>
							</div>
							<div className="flex justify-center flex-wrap lg:flex-nowrap gap-6">
								<div className="item-feature p-6 bg-terciario rounded-2xl">
									<div className="text-4xl mb-8">
										<MdSurfing />
									</div>
									<p className="poppins-medium text-xl mb-2">Surfeo</p>
									<p className="be-vietnam-pro-light text-lg">Nuestras olas son famosas entre los amantes del surf.</p>
								</div>
								<div className="item-feature p-6 bg-terciario rounded-2xl">
									<div className="text-4xl mb-8">
										<GiSeaTurtle />
									</div>
									<p className="poppins-medium text-xl mb-2">Rescate de Tortugas</p>
									<p className="be-vietnam-pro-light text-lg">¡Ven y sé testigo de la maravilla de la naturaleza en Río Seco!</p>
								</div>
								<div className="item-feature p-6 bg-terciario rounded-2xl">
									<div className="text-4xl mb-8">
										<GiHouse />
									</div>
									<p className="poppins-medium text-xl mb-2">Cabañas</p>
									<p className="be-vietnam-pro-light text-lg">Relájate en nuestras cómodas cabañas.</p>
								</div>
							</div>
						</div>
					</div>

					<div className="main bg-principal">
						<div className="main__content">
							<div className="main__slider main__slider--ppal p-4 md:p-8 rounded-2xl bg-white md:flex">
								<div className="main__slider__image w-full md:w-1/2 bg-cover bg-center rounded-xl mb-8 md:mb-0" style={{ backgroundImage: `url(${image4})` }}></div>
								<div className="main__slider__text w-2/2 md:w-1/2 px-2 md:px-6 py-4 md:py-0">
									<p className="poppins-medium text-2xl mb-4">¡Descubre nuestro restaurante frente al mar!</p>
									<p className="be-vietnam-pro-light text-lg">
										¿Estás buscando un lugar perfecto para relajarte,
										disfrutar de una deliciosa comida y contemplar una
										vista impresionante del océano? ¡Tu búsqueda ha
										terminado! Te invitamos a vivir una experiencia
										culinaria única en nuestro restaurante frente a la playa.
									</p>
								</div>
							</div>
							<div className="main__slider p-4 md:p-8 rounded-2xl bg-white md:flex">
								<div className="main__slider__text w-2/2 md:w-1/2 px-2 md:px-6 py-4 md:py-0">
									<p className="poppins-medium text-2xl mb-4">¡Protección de Tortugas Recién Nacidas!</p>
									<p className="be-vietnam-pro-light text-lg">
										Nuestras playas de arena dorada son el hogar de tortugas
										marinas en peligro de extinción, y tu visita contribuirá
										a su preservación. Además, ofrecemos una amplia gama de
										actividades para todos los gustos. Descubre la magia de
										Río Seco hoy mismo.
									</p>
								</div>
								<div className="main__slider__image w-full md:w-1/2 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${image5})` }}></div>
							</div>
						</div>
					</div>

					<div className="main">
						<div className="main__content">
							<div className="text-center mb-20 lg:w-2/3 mx-auto">
								<h2 className="main__text__title poppins-medium">Ofrecemos actividades para todos los gustos.</h2>
							</div>
							<div className="flex justify-center gap-2 lg:gap-6 flex-row flex-wrap">
								<div className="item-feature--medium p-2 md:p-6 basis-1/1 md:basis-1/2 lg:basis-1/3 mb-6 text-center">
									<div className="item-feature__icon text-2xl bg-black px-6 h-[50px] w-max mx-auto rounded-3xl text-terciario flex items-center">
										<MdSurfing />
									</div>
									<div className="pl-2 mt-2">
										<p className="poppins-medium text-xl mb-2">Surfeo</p>
										<p className="be-vietnam-pro-light text-lg">Desde principiantes hasta profesionales, todos encontrarán su lugar aquí. ¡Agarra tu tabla y cabalga las olas de Playa Marro Ayuta, Ejido Río Seco!</p>
									</div>
								</div>
								<div className="item-feature--medium p-2 md:p-6 basis-1/1 md:basis-1/2 lg:basis-1/3 mb-6 text-center">
									<div className="item-feature__icon text-2xl bg-black px-6 h-[50px] w-max mx-auto rounded-3xl text-terciario flex items-center">
										<GiSeaTurtle />
									</div>
									<div className="pl-2 mt-2">
										<p className="poppins-medium text-xl mb-2">Rescate de Tortugas</p>
										<p className="be-vietnam-pro-light text-lg">En Flor del Pacifico, del Ejido Río Seco, estamos comprometidos con la conservación de la vida marina, y una de nuestras misiones más apasionantes es la protección de las tortugas marinas recién nacidas.</p>
									</div>
								</div>
								<div className="item-feature--medium p-2 md:p-6 basis-1/1 md:basis-1/2 lg:basis-1/3 mb-6 text-center">
									<div className="item-feature__icon text-2xl bg-black px-6 h-[50px] w-max mx-auto rounded-3xl text-terciario flex items-center">
										<GiFishCooked />
									</div>
									<div className="pl-2 mt-2">
										<p className="poppins-medium text-xl mb-2">Restaurante</p>
										<p className="be-vietnam-pro-light text-lg">Nuestro Restaurante Flor del Pacífico ofrece delicias culinarias con vistas al mar. Disfruta de mariscos frescos y platos locales mientras contemplas la puesta de sol.</p>
									</div>
								</div>
								<div className="item-feature--medium p-2 md:p-6 basis-1/1 md:basis-1/2 lg:basis-1/3 mb-6 text-center">
									<div className="item-feature__icon text-2xl bg-black px-6 h-[50px] w-max mx-auto rounded-3xl text-terciario flex items-center">
										<GiHouse />
									</div>
									<div className="pl-2 mt-2">
										<p className="poppins-medium text-xl mb-2">Cabañas</p>
										<p className="be-vietnam-pro-light text-lg">Sumérgete en la tranquilidad de la naturaleza y relájate en nuestras cómodas cabañas. Despiértate con el sonido de las olas y el canto de las aves.</p>
									</div>
								</div>
								<div className="item-feature--medium p-2 md:p-6 basis-1/1 md:basis-1/2 lg:basis-1/3 mb-6 text-center">
									<div className="item-feature__icon text-2xl bg-black px-6 h-[50px] w-max mx-auto rounded-3xl text-terciario flex items-center">
										<GiHorseHead />
									</div>
									<div className="pl-2 mt-2">
										<p className="poppins-medium text-xl mb-2">Cabalgata</p>
										<p className="be-vietnam-pro-light text-lg">Siente la libertad mientras cabalgas por la playa al atardecer. Nuestras excursiones a caballo son una experiencia única.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="main bg-principal">
						<div className="main__content">
							<div className="text-center mb-20 lg:w-3/4 mx-auto">
								<h2 className="main__text__title mb-6 poppins-medium">¡Tu aventura comienza aquí!</h2>
								<p className="be-vietnam-pro-light text-lg">Únete a nosotros en Río Seco y contribuye a la conservación mientras te sumerges en la belleza y la emoción de la costa.</p>
							</div>
							<div className="md:flex justify-center gap-10 lg:gap-20">
								<div className="rounded-2xl overflow-hidden h-max w-[250px] md:w-auto mx-auto md:mx-0 mb-10">
									<img src={image5} className="about__image--img" loading="lazy" decoding="async" alt="" />
								</div>
								<div>
									<div className="rounded-2xl overflow-hidden w-[250px] md:w-[350px] lg:w-[500px] mb-10 mx-auto md:mx-0">
										<img src={image7} className="about__image--img" loading="lazy" decoding="async" alt="" />
									</div>
									<div className="rounded-2xl overflow-hidden h-max w-[250px] lg:w-[300px] mx-auto">
										<img src={image6} className="about__image--img" loading="lazy" decoding="async" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="main" id="contacto">
						<div className="main__content">
							<div className="main__contact md:flex bg-terciario rounded-2xl overflow-hidden">
								<div className="main__contact__text px-4 md:px-8 py-4 md:py-16 w-5/5 md:w-3/5">
									<p className="main__text__title mb-8 poppins-medium">¡Contactanos!</p>
									<p className="main__text__info be-vietnam-pro-light">
										Ya sea que desees obtener más información sobre nuestras
										actividades, hacer una reserva o simplemente compartir
										tus impresiones, estaremos encantados de escucharte.
									</p>
									<div className='w-[35px] cursor-pointer mt-4'>
										<img onClick={() => openWhatsApp('529951020036')} src={Icon} alt="" />
									</div>
								</div>
								<a className="main__contact__map w-5/5 md:w-2/5 bg-cover bg-center block" href="https://maps.app.goo.gl/DTtyjXCcDnx476Qd6" target="_blank" style={{ backgroundImage: `url(${Mapa})` }}>
								</a>
							</div>
						</div>
					</div>

					<div className="main">
						<div className="main__content main__content--custom">
							<div className="md:flex justify-between items-end">
								<div className="text-center md:text-start mb-6 md:mb-0">
									<p className="text-4xl md:text-8xl mb-8 poppins-bold">Rio Seco</p>
									<div className="cursor-pointer block sm:flex mb-4 justify-center md:justify-start">
										<a className="footer-a hover:text-[#1fb256]" href="tel:+529951020036">995 102 0036</a>
										<span className='footer--efect mx-2'> | </span>
										<a className="footer-a hover:text-[#1fb256]" href="tel:+529581735388">958 173 5388</a>
										<span className='footer--efect mx-2'> | </span>
										<a className="footer-a hover:text-[#1fb256]" href="mailto:tete300139@gmail.com">tete300139@gmail.com</a>
									</div>
									<p className="be-vietnam-pro-light">2024 © Todos los derechos reservados.</p>
								</div>
								<div className="text-center md:text-right flex justify-center md:justify-end flex-wrap">
									<a href="https://www.dinno.com.mx/" target="_blank">
										<img className="w-[100px] mb-2" src={Dinno} alt="Agencia Dinno" />
									</a>
									<p className="be-vietnam-pro-light w-full">Desarrollado por Agencia Dinno</p>
								</div>
							</div>
						</div>
					</div>

				</motion.div>
			}
		</Layout>
	)
}

export default Main;
