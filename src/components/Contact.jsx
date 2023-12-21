import React from 'react';
import Form from './Contact/Form';
import Invite from './Contact/Invite';

const Contact = () => {
  return (
    <div id="contact" className="w-10/12 h-screen mx-auto flex items-center justify-center gap-10">
      <Invite />
      <Form />
    </div>
  );
};

export default Contact;
