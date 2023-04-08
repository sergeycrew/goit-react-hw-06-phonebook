import { PhonebookList } from './ContactList.styled';
import { ListItem } from 'components/ListItem/Listitem';
import PropTypes from 'prop-types';
import { getContacts } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { Notification } from 'components/Notification/Notification';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  //console.dir(filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter?.toLowerCase();
    return contacts?.filter(({ name }) =>
      name.toLowerCase()?.includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  console.log(visibleContacts);

  return (
    <PhonebookList>
      {visibleContacts.length === 0 && (
        <Notification message="There are no contacts in your phone book. Please add a contact!" />
      )}
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id} id={id} name={name} number={number} />
      ))}
    </PhonebookList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
