import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonContext = styled(Button)`
  ${({ type, backgroundColor, theme }) =>
    type !== 'ghost'
      ? `background-color: ${backgroundColor === 'primary' ? theme.colors.blue[100] : theme.colors.yellow[100]};`
      : 'background-color: transaparent;'}
  ${({ color, theme }) => `color: ${color === 'primary' ? theme.colors.blue[100] : theme.colors.yellow[100]};`}
  ${({ backgroundColor, theme }) =>
    `border: 1px solid ${backgroundColor === 'primary' ? theme.colors.blue[100] : theme.colors.yellow[100]};`}
    border-radius: 6px;
    margin: 0 1rem;

    &:hover, &:active{
        ${({ type, backgroundColor, theme }) =>
          type !== 'ghost'
            ? `background-color: ${backgroundColor === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`
            : 'background-color: transaparent;'}
        ${({ color, theme }) => `color: ${color === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`}
        ${({ backgroundColor, theme }) =>
          `border: 1px solid ${backgroundColor === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`}

    }
`;
