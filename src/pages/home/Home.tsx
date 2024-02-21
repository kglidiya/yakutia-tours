import { motion } from 'framer-motion';
import { images, tourGallery, factsGallery } from '../../utils/constants';
import MotionCover from '../../components/motion-cover/MotionCover';
import styles from './Home.module.css';
import TourCard from '../../components/tour-card/TourCard';
import Intro from '../../components/intro/Intro';
import MotionFooter from '../../components/motion-footer/MotionFooter';
import Conditions from '../../components/conditions/Conditions';
import img from '../../assets/images/logo.png';

export default function Home() {
	const scrollDown = () => {
		window.scrollBy({
			top: 500,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<main className={styles.main}>
			<MotionCover image={img} />
			<Intro
				images={images}
				text="Туры по зимней"
				textLarge="Якутии"
				onClick={scrollDown}
			/>
			<motion.p
				className={styles.facts}
				initial={{ x: '-50vw', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Знаете ли Вы, что можно запускать салюты из кипятка? Что бананами можно
				забивать гвозди? Что человек-невидимка существует? В Якутии Вас ждут эти
				и многие другие увлекательные открытия и эксперименты!
			</motion.p>
			<section className={styles.facts__gallery}>
				{factsGallery.map((image, i: number) => {
					return (
						<motion.img
							src={image}
							alt="Картинки из Якутии"
							key={image}
							className={styles.facts__image}
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: i * 0.2, duration: 0.3 }}
						/>
					);
				})}
			</section>
			<motion.h3
				className={styles.tours}
				initial={{ x: '-50vw', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Наши туры
			</motion.h3>
			<section className={styles.tours__gallery}>
				{tourGallery.map((tour: any, i: number) => {
					// eslint-disable-next-line react/no-array-index-key
					return <TourCard tour={tour} index={i} key={i} />;
				})}
			</section>
			<Conditions />

			<MotionFooter type="option_1" />
		</main>
	);
}
