import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.css';

interface IInput {
	type: string;
	placeholder?: string;
	name: string;
	register: UseFormRegister<any>;
	required: boolean;
	error?: FieldErrors<any>;
	errorMessage?: string;
}

const Input = ({
	type,
	placeholder,
	name,
	register,
	required,
	error,
	errorMessage,
}: IInput) => {
	return (
		<div className={styles.container}>
			<input
				placeholder={placeholder}
				type={type}
				autoComplete="off"
				{...register(name, {
					required,
				})}
				className={styles.input}
			/>
			{error?.[`${name}`] && (
				<span className={styles.error}>{errorMessage}</span>
			)}
		</div>
	);
};

export default Input;
