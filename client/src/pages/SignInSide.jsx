import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="py-16 bg-white min-h-screen">
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
          <div className="bg-white rounded-lg shadow-md p-8 mb-4 lg:mb-0">
       
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
                  className="text-xs text-blue-500 hover:text-blue-800 text-center"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
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
     
      {/* ToastContainer with modified CSS */}
      <ToastContainer
        style={{ zIndex: 999999, position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}
        closeButton={false}
        hideProgressBar={false}
        autoClose={3000}
        position="top-center"
        draggable
        pauseOnHover
      />
    </div>
  );
}
