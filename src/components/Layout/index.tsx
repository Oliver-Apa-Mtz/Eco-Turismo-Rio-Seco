import Header from '../Header';
import Mapa from '../Mapa';
import Contact from '../Contact';

interface Props {
	children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<div>
			<Header />
			<main>
				{children}
			</main>
			<Mapa />
			<Contact />
		</div>
	)
}

export default Layout