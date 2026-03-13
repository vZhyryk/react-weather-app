import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import CompressRoundedIcon from '@mui/icons-material/CompressRounded';

import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useTheme } from '../../../../context/useTheme';

import {
  getIconStyles,
  getRowStyle,
  getCellStyle,
  Title,
} from './CurrentWeather.styled';

import getWeatherIcon from '../../../../components/SuccessRenderEl/helpers/getWeatherIcon';

export default function CurrentWeather({ data }) {
  const { name, main, wind, weather } = data;
  const theme = useTheme();

  const tableData = [
    {
      name: 'Current Temperature',
      data: `${Math.round(main.temp * 10) / 10}°`,
      icon: (
        <DeviceThermostatRoundedIcon fontSize="medium" sx={getIconStyles(10)} />
      ),
    },
    {
      name: 'Feels Like',
      data: `${Math.round(main.feels_like * 10) / 10}°`,
      icon: (
        <DeviceThermostatRoundedIcon fontSize="medium" sx={getIconStyles(10)} />
      ),
    },
    {
      name: 'Max/Min',
      data: `${Math.round(main.temp_max * 10) / 10}°  /
      ${Math.round(main.temp_min * 10) / 10}°`,
      icon: (
        <DeviceThermostatRoundedIcon fontSize="medium" sx={getIconStyles(10)} />
      ),
    },
    {
      name: 'Wind Speed',
      data: `${wind.speed} m/s`,
      icon: <AirRoundedIcon fontSize="medium" sx={getIconStyles(10)} />,
    },
    {
      name: 'Humidity',
      data: `${main.humidity} %`,
      icon: <OpacityRoundedIcon fontSize="medium" sx={getIconStyles(10)} />,
    },
    {
      name: 'Pressure',
      data: `${main.pressure} mbar`,
      icon: <CompressRoundedIcon fontSize="medium" sx={getIconStyles(10)} />,
    },
  ];

  return (
    <div>
      <Title>
        Weather in {name}
        {getWeatherIcon(weather[0].main)}
      </Title>
      <Table sx={{ maxWidth: '500px', margin: '30px' }}>
        <TableBody>
          {tableData.map(data => (
            <TableRow key={data.name} sx={getRowStyle(theme)}>
              <TableCell sx={getCellStyle(theme)}>{data.name}</TableCell>
              <TableCell sx={getCellStyle(theme)}>
                {data.data}
                {data.icon}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
