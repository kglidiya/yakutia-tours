/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './InputSelect.module.css';

interface IInput {
	options: string[];
	type: string;
	placeholder?: string;
	name: string;
	border?: string;
	required: boolean;
	value?: string;
	error?: FieldErrors<any>;
	errorMessage?: string;
	register: UseFormRegister<any>;
	setValue: any;
	values?: { [name: string]: string | number | string[] | null };
	getValues: any;
}
const InputSelect = ({
	options,
	type,
	placeholder,
	name,
	errorMessage,
	border,
	required,
	error,
	setValue,
	register,
	getValues,
}: IInput) => {
	const [isActive, setActive] = useState(false);

	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
		<div className={styles.container}>
			<input
				autoComplete="off"
				type={type}
				className={styles.input}
				placeholder={placeholder}
				{...register(name, {
					required,
					onChange: () => setActive(true),
				})}
				onFocus={() => setActive(true)}
				style={{ border }}
			/>
			{error?.[`${name}`] && !getValues(name) && (
				<span className={styles.error}>{errorMessage}</span>
			)}

			<ul
				className={`${styles.list} ${
					!isActive ? styles.list_default : styles.list_active
				}`}
			>
				{options.map((option) => {
					return (
						<li
							key={option}
							onClick={() => {
								handleToggle();
								setValue(name, option);
							}}
							className={styles.list__item}
						>
							{option}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default InputSelect;
