import React from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.css'; // Ensure this CSS file is in your project

export default function HomeFooter() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    if (email) {
      toast.success('Welcome to Gozoom Newsletters!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });
    }
  };

  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h6>
              To receive regular AI curated updates on LLMs, GPTs, cybersecurity news and more,
              enter your email address.
            </h6>
            <fieldset className="form-control w-full max-w-md">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  name="email"
                  placeholder="username@site.com"
                  className="input input-bordered w-full rounded-none sm:rounded-l-md mb-2 sm:mb-0"
                  required
                />
                <button className="bg-blue-600 w-full sm:w-auto sm:rounded-r-md px-4">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
          <div className="footer-content">
        <p>© 2024 Gozoom Newsletters. All rights reserved.</p>
      </div>
        </div>
      </footer>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </>
  );
}
