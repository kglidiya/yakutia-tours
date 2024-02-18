import { ReactNode, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styles from './OrderForm.module.css';
import Input from '../ui/input/Input';
import Button from '../ui/button/Button';
import TextArea from '../ui/textarea/TextArea';
import AnimatedPerson from '../ui/animated-person/AnimatedPerson';
import Spinner from '../ui/spinner/Spinner';
import InputSelect from '../ui/inputSelect/InputSelect';

export default function OrderForm({
	text,
	dates,
	tour,
}: {
	text: string;
	dates: string[];
	tour: string;
}) {
	const form = useRef<HTMLFormElement | null>(null);
	const [btnText, setBtnText] = useState<string | ReactNode>('Отправить');
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		reset,
		formState: { errors },
	} = useForm<any>({
		values: { tour },
	});
	const onSubmit = () => {
		setBtnText(<Spinner />);

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE as string,
				process.env.REACT_APP_MAILDEV_TEMPLATE as string,
				form.current as HTMLFormElement,
				process.env.REACT_APP_KEY as string
			)
			.then(
				(result: any) => {
					if (result.text === 'OK') {
						setBtnText('Отпралено');
						setTimeout(() => {
							if (form.current) form.current.reset();
							reset();
							setBtnText('Отправить');
						}, 1000);
					} else setBtnText('Ошибка');
				},
				(error: any) => {
					// eslint-disable-next-line no-console
					console.log(error.text);
				}
			);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.wrapper}
			ref={form}
		>
			<h3 className={styles.title}>{text}</h3>
			<AnimatedPerson />
			<div className={styles.inputs}>
				<Input
					type="text"
					name="from_name"
					placeholder="Ваше имя"
					register={register}
					required
					error={errors}
					errorMessage="Заполните это поле"
				/>
				<Input
					type="text"
					name="from_email"
					placeholder="Контакты"
					register={register}
					required
					error={errors}
					errorMessage="Заполните это поле"
				/>
				<div className={styles.flexBox}>
					<InputSelect
						placeholder="Кол-во человек"
						register={register}
						setValue={setValue}
						options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
						type="text"
						name="quantity"
						required
						error={errors}
						errorMessage="?"
						getValues={getValues}
					/>
					<InputSelect
						placeholder="Даты"
						register={register}
						setValue={setValue}
						options={dates}
						type="text"
						name="dates"
						required
						error={errors}
						errorMessage="?"
						getValues={getValues}
					/>
				</div>
				<TextArea
					register={register}
					required={false}
					placeholder="Комментарии"
					name="message"
				/>
				<input
					type="text"
					name="tour"
					value={tour}
					readOnly
					style={{ display: 'none' }}
				/>
				<Button type="submit" text={btnText} fontSize="18px" width="250px" />
			</div>
		</form>
	);
}
