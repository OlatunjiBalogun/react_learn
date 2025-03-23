import React, { useState } from "react";
import { useAuth } from '../context/Authcontext'
import { useNavigate } from "react-router-dom"
import { ArrowRight, Loader2 } from "lucide-react";
import signupImg from "/signupimage.png";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  //Get the initial value of the form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //Get the initial value of the form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // navigate hook
  const navigate = useNavigate();
  // Call the auth context functionalites
  const { signup, error, clearError } = useAuth();
      const [isLoading, setIsLoading] = useState(false);
  
  // navigate hook
  const navigate = useNavigate();
  // Call the auth context functionalites
  const { signup, error, clearError } = useAuth();

  // create a function for change
  const handleChange = (e) => {
    clearError();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // create a function for change
  const handleChange = (e) => {
    clearError();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    //basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Password Do Not Match");
      setIsLoading(false);
      return;
    }
    //basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Password Do Not Match");
      return;
    }

    // try catch
    try {
      // remove confirmPassword before sending the formdata payload to the api
      const { confirmPassword, ...signupData } = formData;
      const response = await signup(signupData);
    try {
      // remove confirmPassword before sending the formdata payload to the api
      const { confirmPassword, ...signupData } = formData;
      const response = await signup(signupData);

      // catch response
      if (response.success) {
        navigate("/login");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Signup Error", error.message);
      setIsLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className='bg-white dark:bg-[#020617] min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-[45%,55%] pt-16 sm:pt-16  max-w-screen-2xl md:mx-auto items-center lg:pr-16 bg-white dark:bg-[#020617]/90'>
        <div className='h-[100%] min-h-[700px]  absolute md:static'>
          <img src={signupImg} alt="Signup illustration" className="w-full h-full object-cover" />
        </div>
        <div className='px-4 md:px-8 py-3 w-full md:max-w-[692px] h-full min-h-[750px] md:h-auto bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm md:backdrop-blur-none shadow-xl dark:shadow-purple-900/30 transition-all duration-300'>
          <h1 className="text-2xl md:text-3xl  font-bold text-[#334155]  dark:text-white text-center my-6">Create Your Account</h1>
          <form className="flex flex-col gap-4 w-[90%] md:w-full m-auto" onSubmit={handleSubmit}>
            {/* Full name  */}
            <div>
              <label className='text-black dark:text-white' htmlFor="firstname">Full Name</label>
              <div className="flex w-full flex-col lg:flex-row gap-8 mt-4">
                <input
                  onChange={handleChange}
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                  required
                />
                <input
                  onChange={handleChange}
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                  required
                />
              </div>
            </div>
            {/* Username  */}
            <div>
              <label className='text-black dark:text-white' htmlFor="username">Username</label>
              <input
                onChange={handleChange}
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                required
              />
            </div>
            {/* Email  */}
            <div>
              <label className='text-black dark:text-white' htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                required
              />
            </div>
            {/* Password  */}
            <div className='flex w-full flex-col lg:flex-row gap-4 mb-2'>
              <div>
                <label className='text-black dark:text-white' htmlFor="password">Enter Password</label>
                <input
                  onChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                  required
                />
                {/* Show Password  */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className='cursor-pointer rounded border border-gray-300 focus:ring focus:ring-blue-200'
                  />
                  <label htmlFor="showPassword" className="text-sm text-gray-500 dark:text-gray-400">
                    Show Password
                  </label>
                </div>
              </div>
              {/* Confirm  */}
              <div>
                <label className='text-black dark:text-white' htmlFor="confirmPassword">Confirm Password</label>
                <input
                  onChange={handleChange}
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                  required
                />
                {/* Show Confirm Password  */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="showConfirmPassword"
                    checked={showConfirmPassword}
                    onChange={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='cursor-pointer rounded border border-gray-300 focus:ring focus:ring-blue-200'
                  />
                  <label htmlFor="showConfirmPassword" className="text-sm text-gray-500 dark:text-gray-400">
                    Show Confirm Password
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full lg:w-fit rounded p-2 sm:p-[14px] border border-[#522798] bg-[#000000] font-bold text-white dark:bg-[#522798] justify-center transition-all flex gap-2 duration-300 disabled:opacity-50 disabled:cursor-wait"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>Create Account <ArrowRight /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
      // Check if the response has data (not specifically success property)
      if (response) {
        // Navigate regardless of response structure
        navigate("/login");
      }
    } catch (error) {
      console.log("Signup Error", error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2>Create Account</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          required
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          required
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="border border-slate-400 text-black px-[18px] py-2"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignUp
export default SignUp;
