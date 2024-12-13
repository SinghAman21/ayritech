import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../Firebase/FirebaseConfig';
const SignUp = () => {
  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Log in</h2>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4" onClick={handleGoogle}>Continue with Google</button>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter email or username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="remember"
              />
              <label className="text-sm text-gray-700" htmlFor="remember">
                Remember me
              </label>
            </div>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot your password?
            </a>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
            type="button"
          >
            Log in
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don&apos;t have an account?{' '}
            <a
              className="font-bold text-blue-500 hover:text-blue-800"
              href="#"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;