import React from 'react';
import { TextField } from '../TextField/TextField';
import InputMask from 'react-input-mask';
import { OutlinedTextFieldProps } from '@material-ui/core';

interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

export function TextFieldMask({
  mask,
  value,
  onChange,
  ...props
}: TextFieldMaskProps) {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
}
