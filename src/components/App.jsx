import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  // const getFilter = event => {
  //   return setFilter(event.target.value);
  // };
  // const getFilteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <>
          <Filter />
          <ContactList />
          {/* <Filter value={filter} onChange={getFilter} />
          <ContactList contacts={getFilteredContacts()} /> */}
        </>
      </Section>
    </>
  );
};
