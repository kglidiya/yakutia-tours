
import styles from './Input.module.css';


interface IInput {
	type?: string;
	placeholder?: string;
	name: string;

	register: any;
	required: boolean;
	maxLength?: number;
	minLength?: number;
	
	error?: any;
	errorMessage?: string;

	setValue?: any;
	// onChange?: ChangeEventHandler<HTMLInputElement>;
	onChange?: any;
}
const Input = ({
	type,
	placeholder,
	name,

	register,
	required,
	maxLength,
	minLength,


	error,
	errorMessage,
	
	onChange,
}: IInput) => {
	// console.log(error)
	return (
		<div className={styles.container}>

		
			<input
				placeholder={placeholder}
				type={type}
				autoComplete="off"
				{...register(name, {
					onChange,
					required,
					maxLength,
					minLength,
					
					
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
