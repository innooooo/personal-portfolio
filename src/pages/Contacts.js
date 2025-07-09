import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [message, setMessage] = useState("")

  const formRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    emailjs.sendForm(
      'service_0vsm4xm',        // service ID
      'template_oge4jaz',       // template ID
      formRef.current,          // form reference
      'K14qUFCZr59uaesid'       // public key
    )
    .then((result) => {
      console.log(result.text)
      alert("Thanks for reaching out! Your message has been sent.")
      setName("")
      setEmail("")
      setCompany("")
      setCompanyWebsite("")
      setMessage("")
    }, (error) => {
      console.error(error.text)
      alert("Oops! Something went wrong. Please try again later.")
    })
  }

  return (
    <div className='contacts'>
      <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Name:
          <input
            style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
            type='text'
            name='name'
            placeholder='John Doe'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
            type='email'
            name='email'
            placeholder='johndoe@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Company:
          <input
            style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
            type='text'
            name='company'
            placeholder='iRob Technologies'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <label>
          Company website:
          <input
            style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
            type='text'
            name='companyWebsite'
            placeholder='https://yoursite.co.ke'
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
          />
        </label>
        <label>
          Leave a Message:
          <textarea
            style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
            name='message'
            placeholder="I'd like to collaborate on a project with you"
            value={message}
            rows={9}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <input className='btn secondary-btn' type='submit' value='Send Message' />
      </form>

      <div style={{display:'flex'}}>
        <a href="https://github.com/innooooo" target="_blank" rel="noopener noreferrer">
          <img
            className="animated-icon"
            style={{
              margin: '9px',
              cursor: 'pointer',
              filter: 'brightness(0) saturate(100%) invert(100%)',
            }}
            src="/icons/github.svg"
            alt="My GitHub"
          />
        </a>

        <a href="https://www.linkedin.com/theinnocent001" target="_blank" rel="noopener noreferrer">
          <img
            className="animated-icon"
            style={{
              margin: '9px',
              cursor: 'pointer',
              filter: 'brightness(0) saturate(100%) invert(100%)',
            }}
            src="/icons/linkedin.svg"
            alt="My LinkedIn"
          />
        </a>

        <a href="https://x.com/theinnocent001" target="_blank" rel="noopener noreferrer">
          <img
            className="animated-icon"
            style={{
              margin: '9px',
              cursor: 'pointer',
              filter: 'brightness(0) saturate(100%) invert(100%)',
            }}
            src="/icons/twitter.svg"
            alt="My Twitter"
          />
        </a>

        <a href="https://instagram.com/i.nn.oo" target="_blank" rel="noopener noreferrer">
          <img
            className="animated-icon"
            style={{
              margin: '9px',
              cursor: 'pointer',
              filter: 'brightness(0) saturate(100%) invert(100%)',
            }}
            src="/icons/instagram.svg"
            alt="My Instagram"
          />
        </a>

      </div>
    </div>
  )
}

export default Contacts
