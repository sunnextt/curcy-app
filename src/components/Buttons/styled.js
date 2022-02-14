import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonContext = styled(Button)`
  ${({ type, backgroundcolor, theme }) =>
    type !== 'ghost'
      ? `background-color: ${backgroundcolor === 'primary' ? theme.colors.blue[100] : theme.colors.yellow[100]};`
      : 'background-color: transparent;'}
  ${({ color, theme }) => `color: ${color === 'primary' ? theme.colors.blue[100] : theme.colors.yellow[100]};`}
  ${({ backgroundcolor, theme }) =>
    `border: 1px solid ${backgroundcolor === 'primary' ? theme.colors.blue[100] : theme.colors.yellow[100]};`}
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: row;

    &:hover, &:active, &:focus{
        ${({ type, backgroundcolor, theme }) =>
          type !== 'ghost'
            ? `background-color: ${backgroundcolor === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`
            : 'background-color: transparent;'}
        ${({ color, theme }) => `color: ${color === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`}
        ${({ backgroundcolor, theme }) =>
          `border: 1px solid ${backgroundcolor === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`}

    }
`;
