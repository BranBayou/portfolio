/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import mail from '../../Assets/mail.svg';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <div className="w-full md:w-1/2 relative">
      <form id="form" action="https://formspree.io/f/xyyawdea" method="POST" className="flex flex-col">
        <div className="">
          <div className="mb-4">
            <label htmlFor="name" className="">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full rounded-2xl bg-darkt p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-2xl bg-darkt p-2"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full rounded-2xl bg-darkt p-2"
            required
          />
        </div>
        <button type="submit" className="w-40 self-center md:self-start bg-aquab p-2 rounded-3xl hover:bg-darkt hover:border-solid hover:border hover:border-lightw">
          Send message
        </button>
      </form>
      <img className="absolute right-20" src={mail} alt="mailImg" />
    </div>
  );
};

export default Form;
