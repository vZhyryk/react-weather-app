import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.toolTipBgColor};
  padding: 20px;
  display: inline-flex;
  align-items: center;
  border: ${props => `1px solid ${props.theme.mainTextColor}`};
  border-radius: 4px;
`;
