import './mapa.css';
import mapa from '../../assets/img/mapa.png';

const Mapa = () => {
	return (
		<div id="mapa" className="h-screen bg-cover mapa" style={{ backgroundImage: `url(${mapa})` }}></div>
	)
}

export default Mapa