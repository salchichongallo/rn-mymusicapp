import React from 'react';
import {useFormikContext} from 'formik';
import Button from './Button';

function SubmitButton(props) {
  const {submitForm} = useFormikContext();
  return <Button {...props} onPress={submitForm} />;
}

export default SubmitButton;
