import React from 'react';


const ContactItem = ({ contact }) => {
  const { name, email, phone, type, _id} = contact
  return (
    <div className='card bg-light'>
      <h3 className="text-primary text-left">
        {name}
        <span className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
        {type}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-small">Edit</button>
        <button className="btn btn-danger btn-small">Delete</button>
      </p>
    </div>
  );
}



export default ContactItem;
