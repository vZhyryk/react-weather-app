import { ErrorMessage } from './Error.styled';
export default function Error({ errorMessage }) {
  return (
    <ErrorMessage>
      <h2>{errorMessage}</h2>
    </ErrorMessage>
  );
}
