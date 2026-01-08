import { PrimaryButton, SuccessButton } from '../styles/button';

export function Button() {
  return (
    <div>
      {/* using styled component */}
      <PrimaryButton>Primary</PrimaryButton>
      <SuccessButton>Success</SuccessButton>
    </div>
  );
}