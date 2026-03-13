import CurrentWeather from './components/CurrentWeather';
import ChartContainer from './components/ChartContainer';

import { Container } from './SuccessRenderEl.styled';

export default function SuccessRenderEl({ data }) {
  return (
    <Container>
      <CurrentWeather data={data.currentWeather} />
      <ChartContainer data={data.data5Days} />
    </Container>
  );
}
