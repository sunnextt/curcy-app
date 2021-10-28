import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonContext = styled(Button)`
  ${({ type, _backgroundColor, theme }) =>
    type !== 'ghost'
      ? `background-color: ${_backgroundColor === 'primary' ? theme.colors.blue[100] : theme.colors.yellow[100]};`
      : 'background-color: transparent;'}
  ${({ color, theme }) => `color: ${color === 'primary' ? theme.colors.blue[100] : theme.colors.yellow[100]};`}
  ${({ _backgroundColor, theme }) =>
    `border: 1px solid ${_backgroundColor === 'primary' ? theme.colors.blue[100] : theme.colors.yellow[100]};`}
    border-radius: 6px;

    &:hover, &:active, &:focus{
        ${({ type, _backgroundColor, theme }) =>
          type !== 'ghost'
            ? `background-color: ${_backgroundColor === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`
            : 'background-color: transparent;'}
        ${({ color, theme }) => `color: ${color === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`}
        ${({ _backgroundColor, theme }) =>
          `border: 1px solid ${_backgroundColor === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`}

    }
`;
