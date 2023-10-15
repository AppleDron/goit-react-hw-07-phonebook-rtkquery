import React, { useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactList,
  Contactitem,
  DeleteButton,
  TitleContacts,
} from './Contacts.styled';
import { deleteContact, getContactsThunk } from 'redux/contacts/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

const Contacts = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <TitleContacts>Contacts</TitleContacts>
      {children}
      {isLoading && !error && <b>In progress...</b>}
      {error && <b>Error!</b>}
      <ContactList>
        {filteredContacts.map(contact => (
          <Contactitem key={contact.id}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <AiFillDelete />
            </DeleteButton>
          </Contactitem>
        ))}
      </ContactList>
    </div>
  );
};

export default Contacts;
