import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
