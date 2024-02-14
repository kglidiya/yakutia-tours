import { ChangeEventHandler } from "react";
import styles from "./Input.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface IInput {
  type: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  required: boolean;
  error?: FieldErrors<any>;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  type,
  placeholder,
  name,
  register,
  required,
  error,
  errorMessage,
  onChange,
}: IInput) => {
  return (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        {...register(name, {
          onChange,
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
