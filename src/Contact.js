import React from 'react';

// this is an example of a stateless functional micro component -
// it could also be housed at the bottom of the contactsList.js file
const Contact = ({contact, item}) =>
    <li>
        {contact.name} {contact.phone} {item}
    </li>

export default Contact;