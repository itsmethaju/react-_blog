import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [works, setWorks] = useState([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        async function fetchWorks() {
            try {
                const response = await fetch('http://127.0.0.1:8000/works/');
                if (!response.ok) {
                    throw new Error('Failed to fetch works');
                }
                const data = await response.json();
                setWorks(data);
            } catch (error) {
                console.error('Error fetching Works:', error);
            }
        }
        fetchWorks();
    }, []);

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

        <div className="flex flex-col self-center mt-24 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center font-bold text-white max-md:mt-10 max-md:max-w-full">
                  <div className="justify-center px-3 py-11 whitespace-nowrap text-[192px] max-md:pr-5 max-md:max-w-full max-md:text-4xl">
                    Think
                  </div>
                  <div className="justify-center px-5 mt-12 text-4xl leading-10 max-md:mt-10 max-md:max-w-full">
                    Welcome to Coral: Pioneering Web Design Excellence
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac73f2e4e15c1bc6a1d3ab1b4b7fded069fdfda456b4d22d14c85d350527552b?apiKey=a95e6018b3544819937a202893b7c231&"
                    className="mt-12 max-w-full aspect-square w-[100px] max-md:mt-10"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/face0b195433d10819a81b31fb03929f842d4e4e0b44bca1dcafb2acd5975afb?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/face0b195433d10819a81b31fb03929f842d4e4e0b44bca1dcafb2acd5975afb?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/face0b195433d10819a81b31fb03929f842d4e4e0b44bca1dcafb2acd5975afb?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/face0b195433d10819a81b31fb03929f842d4e4e0b44bca1dcafb2acd5975afb?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/face0b195433d10819a81b31fb03929f842d4e4e0b44bca1dcafb2acd5975afb?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/face0b195433d10819a81b31fb03929f842d4e4e0b44bca1dcafb2acd5975afb?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/face0b195433d10819a81b31fb03929f842d4e4e0b44bca1dcafb2acd5975afb?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/face0b195433d10819a81b31fb03929f842d4e4e0b44bca1dcafb2acd5975afb?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-32 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch pt-20 my-auto max-md:mt-4 max-md:max-w-full">
                  <div className="flex flex-col mt-1.5 max-md:max-w-full">
                    <div className="flex flex-col px-5 max-md:max-w-full">
                      <div className="text-5xl font-bold text-white leading-[57px] max-md:max-w-full">
                        Powering your business with ready-made templates
                      </div>
                      <div className="mt-1 text-xl leading-8 text-zinc-500 max-md:max-w-full">
                        We can create your website in minutes with the help of
                        countless amazing powerful features of Coral.
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between mt-6 text-xl font-medium leading-9 text-center max-md:flex-wrap">
                      <div className="flex gap-2 px-6 py-3 text-black bg-white rounded-[100px] max-md:px-5">
                        <div>Explore Coral</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/770d81a896344421e4184893c1a6b1c917c64db785ace6280a853a802dab5b71?apiKey=a95e6018b3544819937a202893b7c231&"
                          className="shrink-0 my-auto aspect-square w-[18px]"
                        />
                      </div>
                      <div className="justify-center px-6 py-3 text-white border border-white border-solid rounded-[100px] max-md:px-5">
                        Pre-build websites
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a58968bfb5dc867867571b6da334af1a4cc9b163b7bb9f21a5ce49d9510decec?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a58968bfb5dc867867571b6da334af1a4cc9b163b7bb9f21a5ce49d9510decec?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a58968bfb5dc867867571b6da334af1a4cc9b163b7bb9f21a5ce49d9510decec?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a58968bfb5dc867867571b6da334af1a4cc9b163b7bb9f21a5ce49d9510decec?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a58968bfb5dc867867571b6da334af1a4cc9b163b7bb9f21a5ce49d9510decec?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a58968bfb5dc867867571b6da334af1a4cc9b163b7bb9f21a5ce49d9510decec?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a58968bfb5dc867867571b6da334af1a4cc9b163b7bb9f21a5ce49d9510decec?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a58968bfb5dc867867571b6da334af1a4cc9b163b7bb9f21a5ce49d9510decec?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="grow w-full aspect-[1.72] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-0.5 mt-32 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col px-5 max-md:max-w-full">
              <div className="text-5xl font-bold text-white leading-[57.2px] max-md:max-w-full">
                Crafted with exclusive features
              </div>
              <div className="mt-1 text-xl leading-8 text-zinc-500 max-md:max-w-full">
                <span className="text-white">
                  With unparalleled design options, our web template site
                  redefines
                </span>{" "}
                <span className="text-zinc-500">
                  creativity and customization.
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-wrap content-start mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-2xl font-bold leading-8 text-white max-md:mt-7 max-md:max-w-full">
                      <div className="flex flex-col justify-center px-6 py-16 bg-neutral-900 rounded-[30px] max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5">
                          <div className="flex-auto my-auto">
                            Exclusive components
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3c0bdd93ff8c4e535e5a8eba1c0b8ef39efd5f4298f0719b08a972dff9a7d65?apiKey=a95e6018b3544819937a202893b7c231&"
                            className="shrink-0 w-12 aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-2xl font-bold leading-8 text-white max-md:mt-7 max-md:max-w-full">
                      <div className="flex flex-col justify-center px-6 py-16 bg-neutral-900 rounded-[30px] max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-1">
                          <div className="flex-auto my-auto">
                            Bootstrap 5.x framework
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c39e3772a203b3d8396f9dcc8807c199fab231d60eae00fc95342d00a881ba4?apiKey=a95e6018b3544819937a202893b7c231&"
                            className="shrink-0 w-12 aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-2xl font-bold leading-8 text-white max-md:mt-7 max-md:max-w-full">
                      <div className="flex flex-col justify-center px-6 py-16 bg-neutral-900 rounded-[30px] max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5">
                          <div className="flex-auto my-auto">Crafting code </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c39e3772a203b3d8396f9dcc8807c199fab231d60eae00fc95342d00a881ba4?apiKey=a95e6018b3544819937a202893b7c231&"
                            className="shrink-0 w-12 aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-7 max-w-full text-2xl font-bold leading-8 text-white w-[427px]">
                <div className="flex flex-col justify-center px-6 py-16 bg-neutral-900 rounded-[30px] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5">
                    <div className="flex-auto my-auto">Dynamic Style </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3c0bdd93ff8c4e535e5a8eba1c0b8ef39efd5f4298f0719b08a972dff9a7d65?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="shrink-0 w-12 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between px-5 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="text-5xl font-bold text-white leading-[57.2px]">
                Recent Work
              </div>
              <div className="flex gap-2 px-6 py-3 text-xl font-medium leading-9 text-center text-black bg-white rounded-[100px] max-md:px-5">
                <div>View all work</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bad5ae467b58c766a13c5c90abcff47ec574ed24b479091d7993db50fa8d2b5d?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="shrink-0 my-auto aspect-square w-[18px]"
                />
              </div>
            </div>
            <div className="px-5 mt-6 max-md:max-w-full">
              <div className="flex flex-wrap gap-1 max-md:flex-col max-md:gap-0">
              { works.map(work => (
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-white max-md:mt-7 max-md:max-w-full">
                    
                    <img
                      loading="lazy"
                      src={work.img_url}
                      className="w-full aspect-[1.35] max-md:max-w-full"
                    />
                        
                        <div className="flex flex-col mt-4 max-md:max-w-full">
                        <div className="text-3xl font-bold leading-9 max-md:max-w-full">
                        </div>  {work.title}


                        <div className="mt-2 text-xl font-medium leading-9 max-md:max-w-full">
                        {work.description}
                        </div>
                        </div>
                    </div>
                    </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col px-5 mt-32 max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
              Let's 👋<span className="text-white"> work together</span>.
            </div>
            <div className="justify-center self-start p-5 mt-6 text-xl font-medium leading-9 text-center text-white border border-white border-solid rounded-[60px]">
              Get a custom proposal
            </div>
          </div>
        </div>

      </div>
    );
  }
  

export default Home;
