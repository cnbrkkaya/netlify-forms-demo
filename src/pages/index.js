import * as React from 'react'

const IndexPage = () => {
  return (
    <>
      <h1>Contact</h1>

      <form
        name='Contact Form'
        method='POST'
        onSubmit='submit'
        data-netlify-honeypot='bot-field'
        data-netlify-recaptcha='true'
        data-netlify='true'>
        <input type='hidden' name='form-name' value='Contact Form' />
        <div hidden>
          <input name='bot-field' />
        </div>

        <div>
          <label htmlFor='email'>Your Email:</label>
          <input id='email' type='email' name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' />
        </div>
        <div data-netlify-recaptcha='true'></div>
        <button type='submit'>Send</button>
        <div data-netlify-recaptcha='true'></div>
      </form>
    </>
  )
}

export default IndexPage
