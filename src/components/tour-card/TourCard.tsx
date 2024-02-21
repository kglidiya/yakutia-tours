import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './TourCard.module.css';

export default function TourCard({
	tour,
	index,
}: {
	tour: any;
	index: number;
}) {
	const navigate = useNavigate();
	return (
		<motion.article
			onClick={() => navigate(`/${tour.path}`)}
			className={styles.wrapper}
			style={{ backgroundImage: `url(${tour.image})` }}
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ delay: index * 0.1, duration: 0.2 }}
		>
			<div className={styles.overlay}>
				<p className={styles.title}>{tour.title}</p>
				<div className={styles.details}>
					<p className={styles.details__text}>{tour.duration}</p>
					<p className={styles.details__text}>{tour.price}</p>
				</div>
			</div>
		</motion.article>
	);
}
