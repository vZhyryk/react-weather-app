import { ThreeCircles } from 'react-loader-spinner';

import { PendingContainer } from './Pending.styled';
import { useTheme } from '../../context/useTheme';

export default function Pending() {
  const theme = useTheme();

  return (
    <PendingContainer>
      <ThreeCircles
        ariaLabel="loading-indicator"
        outerCircleColor={theme.appBarColor}
        middleCircleColor={theme.toolTipBgColor}
        innerCircleColor={theme.mainTextColor}
        height={500}
        width={500}
      />
    </PendingContainer>
  );
}
