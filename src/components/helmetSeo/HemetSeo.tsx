import { Helmet } from 'react-helmet-async';

interface IHelmet {
	title: string;
	description: string;
}

export default function HelmetSeo({ title, description }: IHelmet) {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="robots" content="noindex, nofollow" />
			<meta name="description" content={description} />
			<meta
				name="keywords"
				content="туры по Якутии, Оймякон, олени, Магадан, Ленские столбы, якутская лошадь"
			/>
			{/* End standard metadata tags */}
			{/* Facebook tags */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{/* End Facebook tags */}
			{/* Twitter tags */}
			<meta name="twitter:creator" content="Kosinova Lidiya" />
			<meta name="twitter:card" content="website" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{/* End Twitter tags */}

			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta
				name="msapplication-TileImage"
				content="static/images/icons/icon-144x144.png"
			/>
			<meta name="theme-color" content="#ffffff" />
		</Helmet>
	);
}
