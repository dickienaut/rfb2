import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts.js'
import ContactForm from '../contacts/ContactForm.js'
import ContactFilter from '../contacts/ContactFilter.js'
import AuthContext from '../../context/auth/authContext.js'

const Home = () => {
  const authContext = useContext(AuthContext)
  const { user, loadUser } = authContext

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
}


export default Home;
