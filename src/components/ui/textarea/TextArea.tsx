import { UseFormRegister } from "react-hook-form";
import styles from "./TextArea.module.css";

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
}: ITextArea) => {
  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        {...register(name, {
          required,
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
