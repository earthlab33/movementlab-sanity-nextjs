import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold text-black">
                Contact MovementLab
                </h1>
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                <form
  className="form-horizontal"
  action="https://api.web3forms.com/submit"
  method="POST"
>
  <input
    name="access_key"
    type="hidden"
    value="928f1951-306c-481b-bc0e-7b2be1ad28a9"
  />
  <input name="from_name" type="hidden" value="MovementLab Contact Form" />
  <input
    name="subject"
    type="hidden"
    value="New Submission from Contact Form on the ML site"
  />
  <input
    name="redirect"
    type="hidden"
    value="https://movementlab.dance/thanks-for-contacting-movementlab/"
  />
  <fieldset>
    <div className="form-group max-w-6xl pt-10 mx-auto">
      <label className="col-md-4 control-label hidden" for="lastname">Last Name</label>
      <div className="col-md-5">
        <input
          id="lastname"
          className="form-control input-md form-input px-4 py-3 w-80 mb-4"
          name="lastname"
          required=""
          type="text"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label hidden" for="textinput">First Name</label>
      <div className="col-md-5">
        <input
          id="textinput"
          className="form-control input-md form-input px-4 py-3 w-80 mb-4"
          name="textinput"
          required=""
          type="text"
          placeholder="First Name"
        />
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label hidden" for="email">Email</label>
      <div className="col-md-5">
        <input
          id="email"
          className="form-control input-md form-input px-4 py-3 w-80 mb-4"
          name="email"
          required=""
          type="text"
          placeholder="Email"
        />
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label hidden" for="phone"
        >CellPhone (If you want to receive text updates)</label
      >
      <div className="col-md-5">
        <input
          id="phone"
          className="form-control input-md form-input px-4 py-3 w-80 mb-4"
          name="phone"
          required=""
          type="text"
          placeholder="CellPhone (for text updates)"
        />
      </div>
    </div>
    <div className="form-group">
      <label className="col-md-4 control-label hidden" for="message">Your Message</label>
      <div className="col-md-4">
        <textarea id="message" className="form-control form-textarea px-4 py-3 w-80 mb-4" name="message">
Enter your message
</textarea>
      </div>
    </div>
    <div className="form-group">
      &nbsp;
      <div className="col-md-4">
        <button
          id="submit"
          className="btn btn-ras px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          name="submit"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </div>
    </div>
  </fieldset>
</form>
</div>
</main>
</div>
</div>
)}