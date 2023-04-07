import { PhonebookList } from './ContactList.styled';
import { ListItem } from 'components/ListItem/Listitem';
import PropTypes from 'prop-types';
import { getContacts } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <PhonebookList>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id} id={id} name={name} number={number} />
      ))}
    </PhonebookList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
