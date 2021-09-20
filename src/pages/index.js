import * as React from 'react'

const IndexPage = () => {
  return (
    <>
      <h1>Contact</h1>

      <form name='Contact Form' method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='Contact Form' />
        <div>
          <label htmlFor='email'>Your Email:</label>
          <input type='email' name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' />
        </div>
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default IndexPage
