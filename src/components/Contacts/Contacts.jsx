import React, { useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactList,
  Contactitem,
  DeleteButton,
  TitleContacts,
} from './Contacts.styled';
import { selectFilteredContacts } from 'redux/selectors';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/operationsRTKQuery';
import { setContacts } from 'redux/contacts/contactsSlice';

const Contacts = ({ children }) => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const { isLoading, data, isError } = useGetContactsQuery();
  const [deleteContact, delInfo] = useDeleteContactMutation();

  useEffect(() => {
    if (data) {
      dispatch(setContacts(data));
    }
  }, [data, dispatch]);

  return (
    <div>
      <TitleContacts>Contacts</TitleContacts>
      {children}
      {delInfo.isLoading && <h1>Deleting...</h1>}
      {isLoading && !isError && <b>In progress...</b>}
      {isError && <b>Error!</b>}
      <ContactList>
        {filteredContacts.map(contact => (
          <Contactitem key={contact.id}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <DeleteButton
              type="button"
              onClick={() => deleteContact(contact.id)}
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
