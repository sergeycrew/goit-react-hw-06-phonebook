import * as Yup from 'yup';

export const formSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        'Invalid name. Name may contain only letters, apostrophe, dash and spaces.',
    })
    .required('Name is a required field'),

  number: Yup.string()
    .matches(/^\+?(\d{1,2})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, {
      message:
        'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890, +91 (123) 456-7890',
    })
    .required('Number is a required field'),
});
