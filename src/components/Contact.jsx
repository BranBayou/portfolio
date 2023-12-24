import React from 'react';
import Form from './Contact/Form';
import Invite from './Contact/Invite';

const Contact = () => {
  return (
    <div id="contact" className="h-full w-10/12 my-12 py-8 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
      <Invite />
      <Form />
    </div>
  );
};

export default Contact;
