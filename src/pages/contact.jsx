import React, { useEffect, useState } from 'react'
import { Main } from '../layouts/main'
import "./contact.css";

export const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);
  }, [firstName, lastName, email, message])

  return (
    <Main>
      <div id='contact-page'>
        <h1>Contact Us!</h1>
        <form className='shadow rounded-xl p-4'>
          <div className="mb-3">
            <label htmlFor="firstName">First Name</label>
            <input 
              id="firstName"
              type="text" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="rounded border-2 w-full py-1 px-2" 
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input 
              id="lastName"
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="rounded border-2 w-full py-1 px-2" 
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded border-2 w-full py-1 px-2" 
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded border-2 w-full py-1 px-2" 
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="rounded bg-black text-white transition hover:opacity-80 w-full py-1 px-2">Submit</button>
          </div>
        </form>
      </div>
    </Main>
  )
}
