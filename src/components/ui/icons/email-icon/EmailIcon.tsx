import IIcon from "../types";
import styles from "../Icons.module.css";

export default function EmailIcon({ onClick }: IIcon) {
  return (
    <div className={styles.icon} onClick={onClick}>
      <svg
        className={styles.fill}
        version="1.1"
        baseProfile="tiny"
        id="Layer_1"
        width={32}
        height={32}
        viewBox="0 0 42 42"
      >
        <path
          d="M40.5,31.5v-18c0,0-18.2,12.7-19.97,13.359C18.79,26.23,0.5,13.5,0.5,13.5v18c0,2.5,0.53,3,3,3h34
	C40.029,34.5,40.5,34.061,40.5,31.5z M40.471,9.971c0-1.821-0.531-2.471-2.971-2.471h-34c-2.51,0-3,0.78-3,2.6l0.03,0.28
	c0,0,18.069,12.44,20,13.12C22.57,22.71,40.5,10.1,40.5,10.1L40.471,9.971z"
        />
      </svg>
    </div>
  );
}
