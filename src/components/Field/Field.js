import React from 'react';
import {Label, StyledView, ErrorMessage} from './Field.styles';

function Field({label, error, children, style}) {
  return (
    <StyledView style={style}>
      <Label>{label}</Label>
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledView>
  );
}

export default Field;
