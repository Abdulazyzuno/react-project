import { PrimaryButton, SuccessButton } from '../styles/button';
import styles from './Button.module.css';

export function Button() {
  return (
    <div>
      <button className={styles.primary}>
        Primary Button
      </button>
      <button className={styles.secondary}>
        Secondary Button
      </button>

      {/* using styled component */}
      <PrimaryButton>Primary</PrimaryButton>
      <SuccessButton>Success</SuccessButton>
    </div>
  );
}