import getWeatherIcon from '../../../../../../../../components/SuccessRenderEl/helpers/getWeatherIcon';
import { Container } from './CustomTooltip.styled';
import { useTheme } from '../../../../../../../../context/useTheme';

const CustomTooltip = ({ active, payload, data, label }) => {
  const theme = useTheme();

  if (active && payload && payload.length) {
    const chosenEl = data.find(el => el.dt_txt === label);
    return (
      <Container theme={theme}>
        <p className="label">{`Temperature : ${payload[0].value}°`}</p>
        {getWeatherIcon(chosenEl.weather[0].main)}
      </Container>
    );
  }
  return null;
};

export default CustomTooltip;
