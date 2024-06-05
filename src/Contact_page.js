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
      <div className="flex flex-col pt-8 w-full text-white whitespace-nowrap backdrop-blur-[10px] max-md:max-w-full">
        <div className="flex gap-5 justify-between self-center px-5 w-full max-w-[1340px] max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto text-4xl font-bold">Coral</div>
          <div className="flex gap-5 justify-between items-center text-xl font-medium leading-9 max-md:flex-wrap">
            <div className="self-stretch my-auto"><a href='/'>Home</a></div>
            <div className="self-stretch my-auto"><a href='/about'>About</a></div>
            <div className="justify-center self-stretch py-2 my-auto leading-[170%]">
            <a href='/blog'>Blog</a>
            </div>
            <div className="justify-center self-stretch px-4 py-1 text-center text-black bg-white rounded-[100px]">
            <a href='/contact'> Contact</a>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border border-solid bg-white bg-opacity-20 border-white border-opacity-20 min-h-[1px] max-md:max-w-full" />
      </div>
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
        <div className="flex flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col px-12 w-full max-md:px-5 max-md:max-w-full">
            <div className="text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
              Let's 👋<span className="text-white"> work together</span>.
            </div>
            <div className="justify-center self-start p-5 mt-6 text-xl font-medium leading-9 text-center text-white border border-white border-solid rounded-[60px]">
              Get a custom proposal
            </div>
          </div>
          <div className="flex flex-col px-12 py-12 mt-32 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col text-5xl font-bold text-white whitespace-nowrap leading-[57.2px]">
                <div>Logo</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/38bd42a16bf0fb75d8d8ce6ec8f5e04685b3a3fce85197cf04364df3be005c8a?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="self-center mt-12 aspect-[3.85] w-[135px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold leading-7 text-white">
                  Product
                </div>
                <div className="flex flex-col mt-4 text-sm leading-6 text-white">
                  <div>Employee database</div>
                  <div className="mt-1">Payroll</div>
                  <div className="mt-1">Absences</div>
                  <div className="mt-1">Time tracking</div>
                  <div className="mt-1">Shift planner</div>
                  <div className="mt-1">Recruiting</div>
                </div>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <div className="text-xl font-bold leading-7 text-white">
                  Information
                </div>
                <div className="flex flex-col mt-4 text-sm leading-6 text-white">
                  <div>FAQ</div>
                  <div className="mt-1">Blog</div>
                  <div className="mt-1">Support</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold leading-7 text-white">
                  Company
                </div>
                <div className="flex flex-col mt-4 text-sm leading-6 text-white">
                  <div>About us</div>
                  <div className="mt-1">Careers</div>
                  <div className="mt-1">Contact us</div>
                  <div className="mt-1 leading-6">Lift Media</div>
                </div>
              </div>
              <div className="flex flex-col justify-center self-stretch py-1.5 text-sm text-white">
                <div className="text-xl font-bold leading-7 text-white">
                  Subscribe
                </div>
                <div className="flex gap-5 justify-between pr-px pl-4 mt-6 rounded-md border-2 border-white border-solid bg-neutral-900 leading-[170%]">
                  <div className="my-auto">Email address</div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8d1fc714ad06a41d3381a8754679714b2c30ac1dc20f6afc141fced8d0e51e3b?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d1fc714ad06a41d3381a8754679714b2c30ac1dc20f6afc141fced8d0e51e3b?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d1fc714ad06a41d3381a8754679714b2c30ac1dc20f6afc141fced8d0e51e3b?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d1fc714ad06a41d3381a8754679714b2c30ac1dc20f6afc141fced8d0e51e3b?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d1fc714ad06a41d3381a8754679714b2c30ac1dc20f6afc141fced8d0e51e3b?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d1fc714ad06a41d3381a8754679714b2c30ac1dc20f6afc141fced8d0e51e3b?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d1fc714ad06a41d3381a8754679714b2c30ac1dc20f6afc141fced8d0e51e3b?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d1fc714ad06a41d3381a8754679714b2c30ac1dc20f6afc141fced8d0e51e3b?apiKey=a95e6018b3544819937a202893b7c231&"
                    className="shrink-0 border border-white border-solid aspect-[1.04] fill-black stroke-[1px] stroke-white w-[52px]"
                  />
                </div>
                <div className="mt-8 leading-6">
                  Hello, we are Lift Media. Our goal is to translate the
                  positive effects from revolutionizing how companies engage
                  with their clients & their team.
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between self-center py-1 mt-6 text-sm text-white whitespace-nowrap">
              <div>Terms</div>
              <div>Privacy</div>
              <div>Cookies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contacts;