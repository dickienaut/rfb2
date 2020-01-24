import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem.js'
import ContactContext from '../../context/contact/contactContext.js'

const Contacts = () => {
  const contactContext = useContext(ContactContext)
  const { contacts, filtered } = contactContext


  if(contacts.length === 0) {
    return(<h4>Please add a contact</h4>)
  }


  return (
    <Fragment>
      {filtered ? filtered.map(contact => (<ContactItem key={contact._id} contact={contact}/>)) : contacts.map(contact =>  <ContactItem key={contact._id} contact={contact}/>)}

    </Fragment>
  );
}

export default Contacts;
