import React, { useState } from 'react';
import axios from 'axios';
function Contacts() {

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        query: ''
      });
      const [successMessage, setSuccessMessage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/contacts/', null, {
            params: {
              name: formData.name,
              email: formData.email,
              company: formData.company,
              query: formData.query
            }
          });
          console.log(response.data);
          setSuccessMessage('Send Message successfully! Your contact submitted successfully, we will get back to you soon.');
          // Optionally clear the form
          setFormData({
            name: '',
            email: '',
            company: '',
            query: ''
          });
        } catch (error) {
          console.error(error);
          setSuccessMessage('An error occurred. Please try again.');
        }
      };
  return (
    <div className="flex flex-col bg-black">

      <div className="justify-end self-center mt-12 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col text-6xl font-bold max-md:max-w-full max-md:text-4xl">
                <div className="justify-center px-5 max-md:max-w-full max-md:text-4xl">
                  Stay in Touch
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c57a263ee606799ff90074e9747bc8214919f48407d84e6bea67dd3e1c29bb4?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c57a263ee606799ff90074e9747bc8214919f48407d84e6bea67dd3e1c29bb4?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c57a263ee606799ff90074e9747bc8214919f48407d84e6bea67dd3e1c29bb4?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c57a263ee606799ff90074e9747bc8214919f48407d84e6bea67dd3e1c29bb4?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c57a263ee606799ff90074e9747bc8214919f48407d84e6bea67dd3e1c29bb4?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c57a263ee606799ff90074e9747bc8214919f48407d84e6bea67dd3e1c29bb4?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c57a263ee606799ff90074e9747bc8214919f48407d84e6bea67dd3e1c29bb4?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c57a263ee606799ff90074e9747bc8214919f48407d84e6bea67dd3e1c29bb4?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="mt-12 w-full aspect-[2.5] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-5 max-md:max-w-full">
                  <div className="text-4xl font-bold leading-10 max-md:max-w-full">
                    Drop us a line
                  </div>
                  <div className="mt-2 text-xl leading-8 max-md:max-w-full">
                    info@coral.com
                  </div>
                </div>
                <div className="flex flex-col px-5 mt-6 max-md:max-w-full">
                  <div className="text-4xl font-bold leading-10 max-md:max-w-full">
                    Visit us
                  </div>
                  <div className="mt-2 text-xl leading-8 max-md:max-w-full">
                    4110 Union Street, Seattle, 98121 <br />
                    Washington, WA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-36 max-md:mt-10 max-md:max-w-full">
            <form onSubmit={handleSubmit} className="flex flex-col px-5 mt-6 text-xl font-bold leading-7 max-md:max-w-full">
      <div className="flex flex-col text-white max-md:max-w-full">
        <div className="flex flex-col px-5 max-md:max-w-full">
          <div className="text-4xl font-bold leading-10 max-md:max-w-full">
            We’d love to hear from you.
          </div>
          <div className="mt-2 text-sm leading-6 max-md:max-w-full">
            Whether you want to tell us about a project, join our team,
            or just say hi, write to us! We’d love to hear from you.
          </div>
        </div>

        <div className="flex flex-col px-5 mt-6 text-xl font-bold leading-7 max-md:max-w-full">
          <div className="max-md:max-w-full">Full Name*</div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 p-2 text-black border border-white bg-white rounded-md max-md:max-w-full"
          />
        </div>
        
        <div className="flex flex-col px-5 mt-6 text-xl font-bold leading-7 max-md:max-w-full">
          <div className="max-md:max-w-full">Email Address*</div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 p-2 text-black border border-white bg-white rounded-md max-md:max-w-full"
          />
        </div>
        
        <div className="flex flex-col px-5 mt-6 text-xl font-bold leading-7 max-md:max-w-full">
          <div className="max-md:max-w-full">Company*</div>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="mt-2 p-2 text-black border border-white bg-white rounded-md max-md:max-w-full"
          />
        </div>
        
        <div className="flex flex-col px-5 mt-6 text-xl font-bold leading-7 max-md:max-w-full">
          <div className="max-md:max-w-full">How can we help you?*</div>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            required
            className="mt-2 p-2 text-black border border-white bg-white rounded-md max-md:max-w-full"
          ></textarea>
        </div>
      </div>
      
      <button
        type="submit"
        className="justify-center items-center px-6 py-3 mt-12 text-xl font-medium leading-9 text-center text-black bg-white rounded-[100px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        Send a Message
      </button>

      {successMessage && (
        <div className="mt-6 text-xl text-center text-green-500">
          {successMessage}
        </div>
      )}
    </form>
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col justify-end px-12 w-full text-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="text-6xl font-bold max-md:max-w-full max-md:text-4xl">
              <span className="text-white">FAQ</span>s
            </div>
            <div className="mt-4 text-xl font-medium leading-9 max-md:max-w-full">
              Have questions about our services? Find answers to commonly asked
              questions below.
            </div>
          </div>
          <div className="flex flex-col mt-12 text-xl font-medium leading-9 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <div className="shrink-0 h-px bg-white max-md:max-w-full" />
              <div className="flex gap-0 justify-between py-4 pr-6 mt-2 max-md:flex-wrap max-md:pr-5">
                <div className="max-md:max-w-full">
                  What services do you offer?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81c121495d3285e5f3f41d50a9dc9505f7f90db77f3c07d386b0214747678b5?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="shrink-0 my-auto w-9 aspect-[2] fill-white"
                />
              </div>
              <div className="shrink-0 mt-2 h-px bg-white max-md:max-w-full" />
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className="shrink-0 h-px bg-white max-md:max-w-full" />
              <div className="flex gap-0 justify-between py-4 pr-6 mt-2 max-md:flex-wrap max-md:pr-5">
                <div className="max-md:max-w-full">
                  What industries do you serve?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81c121495d3285e5f3f41d50a9dc9505f7f90db77f3c07d386b0214747678b5?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="shrink-0 my-auto w-9 aspect-[2] fill-white"
                />
              </div>
              <div className="shrink-0 mt-2 h-px bg-white max-md:max-w-full" />
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className="shrink-0 h-px bg-white max-md:max-w-full" />
              <div className="flex gap-0 justify-between py-4 pr-6 mt-2 max-md:flex-wrap max-md:pr-5">
                <div className="max-md:max-w-full">
                  Do you provide ongoing support?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81c121495d3285e5f3f41d50a9dc9505f7f90db77f3c07d386b0214747678b5?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="shrink-0 my-auto w-9 aspect-[2] fill-white"
                />
              </div>
              <div className="shrink-0 mt-2 h-px bg-white max-md:max-w-full" />
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className="shrink-0 h-px bg-white max-md:max-w-full" />
              <div className="flex gap-0 justify-between py-4 pr-6 mt-2 max-md:flex-wrap max-md:pr-5">
                <div className="max-md:max-w-full">
                  Can you integrate with existing systems?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81c121495d3285e5f3f41d50a9dc9505f7f90db77f3c07d386b0214747678b5?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="shrink-0 my-auto w-9 aspect-[2] fill-white"
                />
              </div>
              <div className="shrink-0 mt-2 h-px bg-white max-md:max-w-full" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Contacts;