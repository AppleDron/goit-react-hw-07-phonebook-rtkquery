import { Container, Title } from './App.styled';
import Contacts from './Contacts/Contacts';
import ContactForm from './Form/Form';
import React from 'react';
import SearchQuery from './SearchQuery/SearchQuery';

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Contacts>
        <SearchQuery />
      </Contacts>
    </Container>
  );
};

export default App;
