import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import { tourGallery } from '../../utils/helpers';
import Tour from '../../pages/tour/Tour';
import AllTours from '../../pages/all-tours/AllTours';

export default function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/tours" element={<AllTours />} />
			{tourGallery.map((tour) => {
				return (
					<Route
						key={tour.path}
						path={tour.path}
						element={<Tour tour={tour} />}
					/>
				);
			})}
		</Routes>
	);
}
