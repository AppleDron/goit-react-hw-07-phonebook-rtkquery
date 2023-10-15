import React from 'react';
import { nanoid } from 'nanoid';
import { Forma, Label } from './Form.styled';
import { useSelector } from 'react-redux';
import { useCreateContactMutation } from 'redux/contacts/operationsRTKQuery';
import { selectContacts } from 'redux/selectors';

const Form = () => {
  const contacts = useSelector(selectContacts);
  const [createContact, info] = useCreateContactMutation();
  const nameId = nanoid();
  const numberId = nanoid();

  const addNewContact = ({ name, number }) => {
    const result = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (result) {
      return alert(`${name} in already in contacts`);
    }

    createContact({ name, number });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addNewContact({
      name: e.target.name.value,
      number: e.target.number.value,
    });

    e.target.name.value = '';
    e.target.number.value = '';
  };

  return (
    <div>
      <Forma onSubmit={handleSubmit}>
        <Label htmlFor={nameId}>
          Name
          <input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={numberId}>
          Number
          <input
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <button type="submit">Add contact</button>
      </Forma>
      {info.isLoading && <h1>Creating...</h1>}
    </div>
  );
};

export default Form;
