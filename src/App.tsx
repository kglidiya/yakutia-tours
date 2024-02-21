import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './components/appRouter/AppRouter';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HelmetSeo from './components/helmetSeo/HemetSeo';

function App() {
	return (
		<HelmetProvider>
			<HelmetSeo title="Вечная мерзлота" description="Туры по зимней Якутии" />
			<Router>
				<Header />
				<AppRouter />
			</Router>
			<Footer />
		</HelmetProvider>
	);
}

export default App;
