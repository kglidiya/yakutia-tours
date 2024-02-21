import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Intro.module.css';
import ButtonScrollBotton from '../ui/button-nav/ButtonNav';

interface IIntroProps {
	images: string[];
	text?: string;
	textLarge?: string;
	onClick: VoidFunction;
}
export default function Intro({
	images,
	text,
	textLarge,
	onClick,
}: IIntroProps) {
	const [image, setImages] = useState(images[0]);

	useEffect(() => {
		const timer = setInterval(() => {
			images.push(images.shift() as string);
			setImages(images[0]);
		}, 5000);
		return () => clearInterval(timer);
	}, [images]);

	useEffect(() => {
		const setViewHeight = () => {
			document.documentElement.style.setProperty(
				'--vh',
				`${window.innerHeight * 0.01}px`
			);
		};
		setViewHeight();
		window.addEventListener('resize', setViewHeight);
		return () => {
			window.removeEventListener('resize', setViewHeight);
		};
	}, []);

	return (
		<section className={styles.wrapper}>
			<motion.img
				key={image}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				src={image}
				alt="Картинки из Якутии"
				className={styles.image}
			/>
			<motion.h1
				initial={{ left: '-50%' }}
				animate={{ left: '50%' }}
				transition={{ duration: 1, delay: 1 }}
				className={styles.title}
			>
				{text} <br /> <span className={styles.title_large}>{textLarge}</span>
			</motion.h1>
			<ButtonScrollBotton
				onClick={onClick}
				borderRadius="10px"
				rotate="0deg"
				opacity={0.6}
			/>
		</section>
	);
}
