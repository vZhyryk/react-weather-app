import { Tick } from './CustomizedAxisTick.styled';
import { useTheme } from '../../../../../../../../context/useTheme';

export default function CustomizedAxisTick({ x, y, payload, option }) {
  const theme = useTheme();

  function getTick() {
    return option === 'daily'
      ? payload.value.slice(0, 10)
      : payload.value.slice(10);
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <Tick
        x={0}
        y={0}
        dy={20}
        textAnchor="end"
        fill={theme.mainTextColor}
        transform="rotate(0)"
      >
        {payload.value.length && getTick()}
      </Tick>
    </g>
  );
}
