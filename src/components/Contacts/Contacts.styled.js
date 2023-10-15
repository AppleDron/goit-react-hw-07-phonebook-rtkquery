import styled from 'styled-components';

export const TitleContacts = styled.h2`
  text-align: center;
`;

export const ContactList = styled.ul`
  margin: 0 auto;
  list-style: none;
`;

export const Contactitem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  border: 1px solid rgb(231, 50, 50);
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 0 10px #333;
  transition: 0.3s;
  color: #333;

  &:hover {
    background-color: rgb(245, 207, 207);
    transform: scale(1.1);
    box-shadow: 0 0 4px #111;
    transition: 0.3s;
  }
`;
