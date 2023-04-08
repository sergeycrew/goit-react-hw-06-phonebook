// import { useState } from 'react';
import {
  PhonebookForm,
  InputLabel,
  TextInput,
  FormButton,
  StyledErrorMessage,
} from './Form.styled';
import { addContact, getContacts } from 'redux/contactsSlice';
import { Formik } from 'formik';
import { formSchema } from 'components/services/formSchema';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  console.log(typeof contacts);
  console.log(contacts);

  const handleSubmit = (values, { resetForm }) => {
    const normalizedName = values.name.toLowerCase();
    const nameExists = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    const numberExists = contacts.find(
      ({ number }) => number === values.number
    );
    if (nameExists || numberExists) {
      return Notify.info(`${values.name} is already in contacts!`);
    }
    console.log(values);
    dispatch(addContact(values));

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      <PhonebookForm>
        <InputLabel>
          <TextInput placeholder="Full Name" type="text" name="name" />
          <StyledErrorMessage name="name" component="div" />
        </InputLabel>
        <InputLabel>
          <TextInput placeholder="Phone Number" type="tel" name="number" />
          <StyledErrorMessage name="number" component="div" />
        </InputLabel>
        <FormButton type="submit">Add Contact</FormButton>
      </PhonebookForm>
    </Formik>
  );
};
