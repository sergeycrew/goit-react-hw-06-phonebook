import { ContactItem, Button } from './ListItem.styled';
import { FaRegTimesCircle } from 'react-icons/fa';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

export const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      {name} : {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <FaRegTimesCircle size="20px" />
      </Button>
    </ContactItem>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
