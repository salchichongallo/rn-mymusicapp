import React, {cloneElement, Children} from 'react';
import {useField} from 'formik';
import {Label, StyledView, ErrorMessage} from './Field.styles';

function Field({label, children, style, ...restProps}) {
  const {name} = restProps;
  const [field, meta] = useField(restProps);
  return (
    <StyledView style={style}>
      <Label>{label}</Label>
      {cloneElement(Children.only(children), {
        onChangeText: field.onChange(name),
        onBlur: field.onBlur(name),
        value: field.value,
      })}
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </StyledView>
  );
}

export default Field;
