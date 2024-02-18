/* eslint-disable react/no-array-index-key */
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './AllTours.module.css';
import { tourGallery } from '../../utils/helpers';
import ButtonScroll from '../../components/ui/button-nav/ButtonNav';
import Button from '../../components/ui/button/Button';
import MotionFooter from '../../components/motion-footer/MotionFooter';
import TourCard from '../../components/tour-card/TourCard';
import Conditions from '../../components/conditions/Conditions';
import video from '../../assets/video/video1.mp4';

export default function AllTours() {
	const refContent = useRef<HTMLDivElement | null>(null);
	const refMain = useRef<HTMLDivElement | null>(null);
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	const scrollDown = () => {
		window.scrollTo({
			top: refContent.current?.clientHeight,
			left: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		scrollTop();
	}, []);

	useEffect(() => {
		const scrollContainer = refContent.current;
		const onWheel = (e: WheelEvent) => {
			e.preventDefault();
			if (e.deltaY > 0) {
				scrollDown();
			}
			if (e.deltaY < 0) {
				scrollTop();
			}
		};
		if (scrollContainer)
			scrollContainer.addEventListener('wheel', onWheel, { passive: false });

		return () => {
			if (scrollContainer)
				scrollContainer.addEventListener('wheel', onWheel, { passive: false });
		};
	}, []);

	const scrollToForm = () => {
		refMain.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
		});
	};

	return (
		<main style={{ position: 'relative' }} ref={refMain}>
			<div className={styles.container} ref={refContent}>
				<video
					className={styles.intro}
					autoPlay
					loop
					muted
					playsInline
					poster="https://celes.club/uploads/posts/2021-12/1640858891_29-celes-club-p-oimyakon-zima-priroda-krasivo-foto-35.jpg"
				>
					<source src={video} type="video/mp4" />
				</video>
				<motion.div
					initial={{ left: '-50%' }}
					animate={{ left: '50%' }}
					transition={{ duration: 1, delay: 0 }}
					className={styles.caption}
				>
					<h3 className={styles.title}>Наши туры</h3>
					<p className={styles.subtitle}>
						По запросу организовываем любые туры, путешествия и экспедиции по
						Якутии.
					</p>
					<Button
						type="submit"
						text="Задать вопрос"
						fontSize="18px"
						width="200px"
						onClick={scrollToForm}
					/>
				</motion.div>
				<ButtonScroll
					onClick={scrollDown}
					borderRadius="10px"
					rotate="0deg"
					backgroundColor="#d1e8ef"
					opacity={0.6}
				/>
			</div>

			<section className={styles.tours__gallery}>
				{tourGallery.map((tour: any, i: number) => {
					return <TourCard tour={tour} index={i} key={i} />;
				})}
				<motion.p
					className={styles.booking}
					initial={{ x: '-50vw', opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					Для бронирования тура необходимо оплатить 30% его стоимости. Полность
					тур должен быть оплачет за две недели до его начала. Оставьте заявку и
					с Вами свяжется наш менеджер для уточнения деталей.
				</motion.p>
			</section>

			<Conditions />
			<MotionFooter type="option_2" />
		</main>
	);
}
