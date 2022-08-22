import React from 'react'


function ContactUs() {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Not Connected to the Database')
  }
  return (
    <div className="container contact_us_parent w-50 "  >
      <div className="row text-center" style={{ fontFamily: 'monospace' }}>
        <h3>Contact Us</h3>
      </div>

      
      <div className="m-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3 form-check d-block">
            <label className="form-check-label d-block" for="exampleCheck1">Description</label>
            <textarea rows={'200'} cols={'100'} className="form-check-input" placeholder='Enter the details of what you want to tell us...'/>
          </div>
          <div className="mb-3 d-flex" style={{ justifyContent: 'center'}}>
            <button type="submit" className="btn btn-primary w-50">Submit</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default ContactUs;