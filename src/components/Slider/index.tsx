import './slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CardSlider {
	id: number;
	image: string;
	title: string;
	description: string;
}

interface Props {
	data: CardSlider[];
}

const SliderImages = ({ data }: Props) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<Slider {...settings}>
			{data.map((item) => (
				<div key={item.id} className="slider-item">
					<img className="slider-image" src={item.image} width={300} loading="lazy" alt="" />
					<h3 className="slider-title font-sans">{item.title}</h3>
					<p className="slider-description font-sans">{item.description}</p>
				</div>
			))}
		</Slider>
	)
}

export default SliderImages