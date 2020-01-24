import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem.js'
import ContactContext from '../../context/contact/contactContext.js'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts } = contactContext
  console.log(contacts)
  return (
    <Fragment>
      {contacts.map(contact =>  <ContactItem key={contact._id} contact={contact}/>)}
    </Fragment>
  );
}

export default Contacts;
