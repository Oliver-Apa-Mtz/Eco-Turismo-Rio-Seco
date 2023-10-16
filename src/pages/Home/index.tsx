import { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import Card from '../../components/Card';

import videoSource from '../../assets/img/background.mp4';
import backgroundImage from '../../assets/img/fondo-5.jpg';
import image1 from '../../assets/img/fondo-3.jpg';
import image2 from '../../assets/img/act2.jpg';
import image4 from '../../assets/img/act4.jpg';

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

import './home.css';
const Home = () => {
	const [videoLoaded, setVideoLoaded] = useState(false);

	useEffect(() => {
		const video = document.getElementById('video');

		video?.addEventListener('loadeddata', () => {
			setVideoLoaded(true);
		});

		return () => {
			video?.removeEventListener('loadeddata', () => {
				setVideoLoaded(true);
			});
		};
	}, []);

	return (
		<Layout>
			{
				<>
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

					<div className="grid gap-10 grid-cols-3">
						{data.map((item, index) => (
							<div key={index}>
								<Card index={index} title={item.title} description={item.description} image={item.image} colorTitle={item.colorTitle}></Card>
							</div>
						))}
					</div>
				</>
			}
		</Layout>
	)
}

export default Home