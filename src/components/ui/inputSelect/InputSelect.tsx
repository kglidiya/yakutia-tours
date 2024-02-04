import { useState } from "react";
import styles from "./InputSelect.module.css";
import CloseIcon from "../icons/closeIcon/CloseIcon";

interface IInput {
  options: string[];
  type: string;
  placeholder?: string;
  name: string;
  border?: string;
  label?: string;

  required: boolean;
  value?: string;
  error?: any;
  errorMessage?: string;
  onClick?: (e: any) => void;

  register: any;
  setValue: any;
  values?: { [name: string]: string | number | string[] | null };
}
const InputSelect = ({
  options,
  type,
  placeholder,
  name,
  errorMessage,
  border,
  label,

  required,

  error,
  onClick,

  setValue,

  register,
}: IInput) => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.container}>
      {/* {clearButton && (
        <CloseIcon
          onClick={(e) => {
            onClick?.(e);
          }}
        />
      )} */}
      <label className={styles.label}>
        {label}
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
        {error?.[`${name}`] && (
          <span className={styles.error}>{errorMessage}</span>
        )}
      </label>

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
