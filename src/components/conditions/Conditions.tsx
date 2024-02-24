/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';
import { tourConditions } from '../../utils/constants';
import styles from './Conditions.module.css';
import Form from '../form/Form';

export default function Conditions() {
	return (
		<div className={styles.wrapper}>
			<motion.div
				initial={{ x: '-50vw', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className={styles.content}
			>
				<h4 className={styles.title}>В стоимость туров включено:</h4>
				<ul className={styles.list}>
					{tourConditions.included.map((condition, i: number) => {
						return (
							<li key={i} className={styles.list__item}>
								<span className={styles.list__marker_included} />
								<p className={styles.list__text}> {condition}</p>
							</li>
						);
					})}
				</ul>
				<h4 className={styles.title}>Оплачитается отдельно:</h4>
				<ul className={styles.list}>
					{tourConditions.excluded.map((condition, i: number) => {
						return (
							<li key={i} className={styles.list__item}>
								<span className={styles.list__marker_excluded} />
								<p className={styles.list__text}> {condition}</p>
							</li>
						);
					})}
				</ul>
			</motion.div>
			<Form text="Форма обратной связи" />
		</div>
	);
}
