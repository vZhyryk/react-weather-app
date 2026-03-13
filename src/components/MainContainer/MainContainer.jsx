import { Container } from './MainContainer.styled';
import { useTheme } from '../../context/useTheme';

export default function MainContainer({ children }) {
  const theme = useTheme();
  return <Container theme={theme}>{children}</Container>;
}
