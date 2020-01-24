import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext.js'
import contactReducer from './contactReducer.js'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
  } from '../types.js'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
          "type": "personal",
          "_id": "5e29ee363f688962914dba70",
          "name": "Joshua",
          "email": "joshua@gmail.com",
          "phone": "360-595-2635",
          "user": "5e29b396a89a255eda5e95ed",
          "date": "2020-01-23T19:04:22.250Z",
          "__v": 0
      },
      {
          "type": "personal",
          "_id": "5e29ee233f688962914dba6f",
          "name": "Dad",
          "email": "diggergrader@gmail.com",
          "phone": "360-595-2634",
          "user": "5e29b396a89a255eda5e95ed",
          "date": "2020-01-23T19:04:03.840Z",
          "__v": 0
      },
      {
          "type": "professional",
          "_id": "5e2a1a70b0dd59677b4d5bde",
          "name": "Travis",
          "email": "travis@gmail.com",
          "phone": "360-595-2635",
          "user": "5e29b396a89a255eda5e95ed",
          "date": "2020-01-23T22:13:04.059Z",
          "__v": 0
      }
    ]
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add contact

  // Delete Contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear Filter

  return(
    <ContactContext.Provider value={{
      contacts: state.contacts

    }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
