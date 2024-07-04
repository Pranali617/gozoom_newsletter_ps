import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './ForgotPassword';

export default function SignInSide() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    // Constant credentials
    const validEmail = 'thavaldar@mailshell.com';
    const validPassword = '123';

    if (email === validEmail && password === validPassword) {
      toast.success('Sign in successful!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Navigate to the dashboard after a short delay to allow the toast to be seen
      setTimeout(() => navigate('/dashboard'), 3100);
    } else {
      toast.error('Invalid email or password. Please try again.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="py-16 bg-white">
      <div className="flex flex-col lg:flex-row mx-auto max-w-5xl">
        <div className="lg:w-2/3 pr-8">
          <div className="p-8">
            <h1 className="text-4xl font-bold">Welcome to Gozoom News Alerts</h1>
            <p className="mt-4 text-xl">
              Gozoom RSS News Alerts is your <span className="text-blue-500 font-bold">FREE</span> daily news feed for up-to-date information from the CyberSecurity and AI World.
            </p>
            <ul className="mt-4 list-none space-y-2">
              <li>📈 Get the latest updates on AI productivity tools</li>
              <li>🔒 Stay aware of the latest CyberSecurity threats</li>
              <li>💡 Learn to use tools like ChatGPT, Google Gemini, and more</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-8">
            <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-200">
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                  <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                  <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
            </a>
            <div className="mt-8">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Email Address</label>
                  <input name="email" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" required />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Password</label>
                  </div>
                  <input name="password" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" required />
                </div>
                <button
                  type="button"
                  className="text-xs text-blue-500 hover:text-blue-800"
                  onClick={handleForgotPassword}
                >
                  Forget Password?
                </button>
                <div className="mt-8">
                  <button className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-700" type="submit">Login</button>
                </div>
              </form>
              <div className="mt-4 flex items-center justify-center">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <RouterLink to="/signup" className="text-xs text-blue-500 uppercase hover:text-blue-800">or sign up</RouterLink>
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
