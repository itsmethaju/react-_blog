import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Footer() {
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a GET request with the email as a query parameter
            const response = await axios.post(`http://127.0.0.1:8000/email/?email=${encodeURIComponent(email)}`);
            console.log('Email sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div className="flex flex-col bg-black">
        <div className="flex flex-col px-12 py-12 mt-32 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col text-5xl font-bold text-white whitespace-nowrap leading-[57.2px]">
            <div>Logo</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11f55e20fc4a8f564e037d36b196625d8c0ecdba12a846fa493541d3dbd9ab79?apiKey=a95e6018b3544819937a202893b7c231&"
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
            <div className="">

  <form onSubmit={handleSubmit} className="flex items-center gap-2 pr-px pl-4 mt-6 rounded-md border-2 border-white border-solid bg-neutral-900 leading-[170%]">
              <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  className="flex-grow rounded-md border-2 border-white border-solid bg-neutral-900 leading-[200%] px-2 py-1"
                  placeholder="Enter your email"
                  required
              />
              <button type="submit" className="shrink-0 border border-white border-solid aspect-[1.04] fill-black stroke-[1px] stroke-white w-[52px]">
                  Sent
              </button>
          </form>

  {/* <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/869c2a8c1253139109b8ca984f8d73d62f4cf093734766f38d386d15e7770344?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/869c2a8c1253139109b8ca984f8d73d62f4cf093734766f38d386d15e7770344?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/869c2a8c1253139109b8ca984f8d73d62f4cf093734766f38d386d15e7770344?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/869c2a8c1253139109b8ca984f8d73d62f4cf093734766f38d386d15e7770344?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/869c2a8c1253139109b8ca984f8d73d62f4cf093734766f38d386d15e7770344?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/869c2a8c1253139109b8ca984f8d73d62f4cf093734766f38d386d15e7770344?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/869c2a8c1253139109b8ca984f8d73d62f4cf093734766f38d386d15e7770344?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/869c2a8c1253139109b8ca984f8d73d62f4cf093734766f38d386d15e7770344?apiKey=a95e6018b3544819937a202893b7c231&"
      className="shrink-0 border border-white border-solid aspect-[1.04] fill-black stroke-[1px] stroke-white w-[52px]"
  /> */}
</div>

            <div className="mt-8 leading-6">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
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
    );
}

export default Footer;