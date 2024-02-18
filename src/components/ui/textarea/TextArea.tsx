import { UseFormRegister } from "react-hook-form";
import styles from "./TextArea.module.css";
import { ChangeEventHandler } from "react";

interface ITextArea {
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  required: boolean;
  maxLength?: number;
  minLength?: number;
  error?: any;
  errorMessage?: string;
  setValue?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const TextArea = ({
  placeholder,
  name,
  register,
  required,
  maxLength,
  minLength,
  error,
  errorMessage,
  onChange,
}: ITextArea) => {
  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        {...register(name, {
          required,
          onChange,
          maxLength,
          minLength,
        })}
      />
      {error?.[`${name}`] && (
        <span className={styles.error}>{errorMessage}</span>
      )}
    </div>
  );
};

export default TextArea;
