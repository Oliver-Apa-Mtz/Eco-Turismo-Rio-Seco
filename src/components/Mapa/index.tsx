import './mapa.css';
import mapa from '../../assets/img/mapa.png';

const Mapa = () => {
	return (
		<a href="https://maps.app.goo.gl/DTtyjXCcDnx476Qd6" target="_blank">
			<div id="mapa" className="h-screen bg-cover mapa" style={{ backgroundImage: `url(${mapa})` }}></div>
		</a>
	)
}

export default Mapa