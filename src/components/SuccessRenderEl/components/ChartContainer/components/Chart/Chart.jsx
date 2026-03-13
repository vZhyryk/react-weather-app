import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import CustomTooltip from './components/CustomTooltip';
import CustomizedAxisTick from './components/CustomizedAxisTick';
import { useTheme } from '../../../../../../context/useTheme';

export default function Chart({ data, option }) {
  const theme = useTheme();

  return (
    <LineChart width={1300} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="dt_txt"
        interval={0}
        height={50}
        tick={<CustomizedAxisTick option={option} />}
        width={10}
      />
      <YAxis
        tick={{ stroke: theme.mainTextColor, strokeWidth: 1, fontSize: '14px' }}
        tickMargin={10}
      />
      <Tooltip content={<CustomTooltip data={data} />} />
      <Legend payload={[{ value: 'Daily Temperature', type: 'line' }]} />
      <Line
        type="monotone"
        dataKey="main.temp"
        stroke={theme.appBarColor}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
