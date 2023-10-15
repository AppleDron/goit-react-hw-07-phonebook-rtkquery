import React from 'react';
import { nanoid } from 'nanoid';
import { Forma, Label } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/contacts/operations';

const Form = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const addNewContact = data => {
    const result = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (result) {
      return alert(`${data.name} in already in contacts`);
    }

    dispatch(createContact(data));
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
    </div>
  );
};

export default Form;
