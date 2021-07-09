import { TextField } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiInputBase-notchedOutline {
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
