import { motion } from 'framer-motion';
import styles from './AnimatedPerson.module.css';
import Shoes from '../icons/shoes/Shoes';

export default function AnimatedPerson() {
	return (
		<motion.div
			initial={{ x: 0, y: 0 }}
			whileInView={{
				x: '50vw',
				y: '10px',
				transition: {
					x: { duration: 6, repeat: 0 },
					y: { duration: 0.2, repeat: 28 },
				},
			}}
			className={styles.image}
		>
			<motion.span
				className={styles.shoeRight}
				whileInView={{
					x: '-20px',
					transition: {
						ease: 'linear',
						duration: 0.5,
						repeat: 10,
						delay: 0,
					},
				}}
				exit={{
					x: 0,
					transition: {
						x: { delay: 0, duration: 0, repeat: 0 },
					},
				}}
			>
				<Shoes />
			</motion.span>
			<motion.span
				className={styles.shoeLeft}
				whileInView={{
					x: '-20px',
					transition: {
						ease: 'linear',
						duration: 0.5,
						repeat: 10,
						delay: 0.2,
					},
				}}
				exit={{
					x: 0,
					transition: {
						x: { delay: 0, duration: 0, repeat: 0 },
					},
				}}
			>
				<Shoes />
			</motion.span>
		</motion.div>
	);
}
