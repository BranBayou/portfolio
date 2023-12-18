import React from 'react';
import Form from './Contact/Form';
import Invite from './Contact/Invite';

const Contact = () => {
  return (
    <div className="h-screen w-10/12 mx-auto flex items-center justify-center gap-10">
      <Invite />
      <Form />
    </div>
  );
};

export default Contact;
