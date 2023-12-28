import './contact.css'

import Icon from '../../assets/img/whatsapp.png';

const Contact = () => {

	const openWhatsApp = (phoneNumber: string) => {
		const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&amp;text=Hola, quiero más informes de Río Seco`;
		window.open(whatsappUrl, '_blank');
	}

	return (
		<div id="contacto" className="contact">
			<div className="contact__contain">
				<p className="contact__title text-terciario font-serif">¿Tienes alguna pregunta o comentario?</p>
				<p className="contact__subtitle text-secundario font-sans">
					Ya sea que desees obtener más información
					sobre nuestras actividades, hacer una
					reserva o simplemente compartir tus
					impresiones, estaremos encantados de
					escucharte.
				</p>
				<div className="contact__form cursor-pointer">
					<img onClick={() => openWhatsApp('529951020036')} src={Icon} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Contact