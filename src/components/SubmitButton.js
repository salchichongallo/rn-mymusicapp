import React from 'react';
import {useFormikContext} from 'formik';
import Button from './Button';

function SubmitButton(props) {
  const {submitForm, isSubmitting} = useFormikContext();
  return <Button {...props} disabled={isSubmitting} onPress={submitForm} />;
}

export default SubmitButton;
