import React, { useState, useEffect } from 'react';






function About() {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        async function fetchWorks() {
            try {
                const response = await fetch('http://127.0.0.1:8000/teams/');
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
  return (
    <div className="flex flex-col bg-black">

      <div className="flex flex-col self-center mt-12 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col px-5 max-md:max-w-full">
          <div className="text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
            About <span className="text-white">Coral</span>
          </div>
          <div className="mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-end text-xl text-white max-md:mt-6 max-md:max-w-full">
                  <div className="flex flex-col justify-end max-md:max-w-full">
                    <div className="leading-8 max-md:max-w-full">
                      Lorem ipsum dolor sit amet consectetur. Vel ut massa
                      tristique pellentesque neque id curabitur tristique.
                      Integer etiam vestibulum suspendisse tincidunt velit in
                      diam eros. Consectetur{" "}
                      <span className="text-2xl">
                        que. Integer etiam vestibulum suspendisse tincidunt
                        velit in diam eros. Consectetur{" "}
                      </span>
                    </div>
                    <div className="mt-2 font-medium leading-9 max-md:max-w-full">
                      Lorem ipsum dolor sit amet consectetur. Nunc lorem rhoncus
                      varius felis suspendisse. Ac id tellus tellus id
                      scelerisque. Quis venenatis ullamcorper tortor amet
                      hendrerit pulvinar magna. Ac sollicitudin tempus lorem
                      aliquam ligula euismod pellentesque.
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-6 max-w-full font-medium leading-9 text-center w-[186px]">
                    <div className="justify-center px-5 py-3 border border-white border-solid rounded-[100px]">
                      Meet the team
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db1379187bd72526d93c6d906fad0340269cf9f585d4b88c030383e29927b432?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db1379187bd72526d93c6d906fad0340269cf9f585d4b88c030383e29927b432?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db1379187bd72526d93c6d906fad0340269cf9f585d4b88c030383e29927b432?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db1379187bd72526d93c6d906fad0340269cf9f585d4b88c030383e29927b432?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db1379187bd72526d93c6d906fad0340269cf9f585d4b88c030383e29927b432?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db1379187bd72526d93c6d906fad0340269cf9f585d4b88c030383e29927b432?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db1379187bd72526d93c6d906fad0340269cf9f585d4b88c030383e29927b432?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db1379187bd72526d93c6d906fad0340269cf9f585d4b88c030383e29927b432?apiKey=a95e6018b3544819937a202893b7c231&"
                  className="grow w-full aspect-[1.2] max-md:mt-6 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-5 mt-32 max-md:mt-10 max-md:max-w-full">
          <div className="text-5xl font-bold text-white leading-[57.2px] max-md:max-w-full">
            Meet The Team
          </div>
          <div className="py-0.5 mt-6 max-md:max-w-full">
            <div className="flex flex-wrap gap-1 max-md:flex-col max-md:gap-0">
            { works.map(work => (
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                
                  <div className="flex flex-col justify-center font-bold text-white leading-[130%] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src={work.img_url}
                      className="w-full aspect-[1.15] max-md:max-w-full"
                    />
                    <div className="flex flex-col justify-center mt-6 max-md:max-w-full">
                      <div className="text-3xl max-md:max-w-full">{work.title}</div>
                      <div className="text-xl max-md:max-w-full">{work.description}</div>
                    </div>
                  </div>
                    
                  <div className="flex gap-5 pr-20 mt-4 max-md:flex-wrap max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/947ee6457785c56ef6e2a2a87cb9f4809cc1f8ec1f8841fbfbd8a234de5a0382?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf536731cc6717c988ee86e5f34dc4f0ed7d5045719656fef5c434a0d18ba235?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="shrink-0 self-start w-6 aspect-[1.14] fill-white"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/37c34a40faee1ba18ea71988802f0c9bda7c4be89267050ad8da2a575fe39864?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="shrink-0 w-6 aspect-square fill-white"
                    />
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>
        </div>
        <div className="mt-32 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 text-white max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold leading-[57.2px] max-md:max-w-full">
                  Our skills
                </div>
                <div className="flex flex-col mt-6 text-xl max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 font-bold leading-[130%] max-md:max-w-full">
                      <div className="max-md:max-w-full">Graphic Design</div>
                      <div className="shrink-0 mt-1 bg-white rounded-3xl h-[5px] max-md:max-w-full" />
                    </div>
                    <div className="text-center leading-[165%]">90%</div>
                  </div>
                  <div className="flex gap-5 mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col flex-1 font-bold leading-[130%]">
                      <div>Lead Generation</div>
                      <div className="shrink-0 mt-1 bg-white rounded-3xl h-[5px]" />
                    </div>
                    <div className="text-center leading-[165%]">40%</div>
                  </div>
                  <div className="flex gap-5 mt-12 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col flex-1 font-bold leading-[130%]">
                      <div>Photoshop</div>
                      <div className="shrink-0 mt-1 bg-white rounded-3xl h-[5px]" />
                    </div>
                    <div className="text-center leading-[165%]">65%</div>
                  </div>
                  <div className="flex gap-5 mt-12 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col flex-1 font-bold leading-[130%] max-md:max-w-full">
                      <div className="max-md:max-w-full">Illustration</div>
                      <div className="shrink-0 mt-1 bg-white rounded-3xl h-[5px] max-md:max-w-full" />
                    </div>
                    <div className="text-center leading-[165%]">80%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2107ea61c7fcb5e6a840db484d7eabc86c85e38da9272971475951964366971f?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2107ea61c7fcb5e6a840db484d7eabc86c85e38da9272971475951964366971f?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2107ea61c7fcb5e6a840db484d7eabc86c85e38da9272971475951964366971f?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2107ea61c7fcb5e6a840db484d7eabc86c85e38da9272971475951964366971f?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2107ea61c7fcb5e6a840db484d7eabc86c85e38da9272971475951964366971f?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2107ea61c7fcb5e6a840db484d7eabc86c85e38da9272971475951964366971f?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2107ea61c7fcb5e6a840db484d7eabc86c85e38da9272971475951964366971f?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2107ea61c7fcb5e6a840db484d7eabc86c85e38da9272971475951964366971f?apiKey=a95e6018b3544819937a202893b7c231&"
                className="grow w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col px-5 text-white max-md:max-w-full">
            <div className="text-5xl font-bold leading-[57.2px] max-md:max-w-full">
              Our Value
            </div>
            <div className="mt-1 text-xl leading-8 max-md:max-w-full">
              Design creates culture. Culture shapes values. Values determine
              the future
            </div>
          </div>
          <div className="px-5 mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-white max-md:mt-10">
                  <div className="flex flex-col justify-center text-3xl font-bold leading-9 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e875dc91881f6188e3fe9811268aaaa196ba43fc23db724bf3db29a25751c567?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e875dc91881f6188e3fe9811268aaaa196ba43fc23db724bf3db29a25751c567?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e875dc91881f6188e3fe9811268aaaa196ba43fc23db724bf3db29a25751c567?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e875dc91881f6188e3fe9811268aaaa196ba43fc23db724bf3db29a25751c567?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e875dc91881f6188e3fe9811268aaaa196ba43fc23db724bf3db29a25751c567?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e875dc91881f6188e3fe9811268aaaa196ba43fc23db724bf3db29a25751c567?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e875dc91881f6188e3fe9811268aaaa196ba43fc23db724bf3db29a25751c567?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e875dc91881f6188e3fe9811268aaaa196ba43fc23db724bf3db29a25751c567?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="max-w-full aspect-square w-[120px]"
                    />
                    <div className="mt-6">Innovative</div>
                  </div>
                  <div className="mt-4 text-sm leading-6">
                    Lorem ipsum dolor sit amet consectetur. Congue tellus tortor
                    at viverra egestas consectetur arcu. Eu velit amet arcu
                    massa sapien quam pulvinar a nec.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-white max-md:mt-10">
                  <div className="flex flex-col justify-center text-3xl font-bold leading-9 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/881c8fe67f615f5189aaaa7fa64edaa02ba8a2d74f49f67ccba39cc5164f0386?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/881c8fe67f615f5189aaaa7fa64edaa02ba8a2d74f49f67ccba39cc5164f0386?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/881c8fe67f615f5189aaaa7fa64edaa02ba8a2d74f49f67ccba39cc5164f0386?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/881c8fe67f615f5189aaaa7fa64edaa02ba8a2d74f49f67ccba39cc5164f0386?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/881c8fe67f615f5189aaaa7fa64edaa02ba8a2d74f49f67ccba39cc5164f0386?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/881c8fe67f615f5189aaaa7fa64edaa02ba8a2d74f49f67ccba39cc5164f0386?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/881c8fe67f615f5189aaaa7fa64edaa02ba8a2d74f49f67ccba39cc5164f0386?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/881c8fe67f615f5189aaaa7fa64edaa02ba8a2d74f49f67ccba39cc5164f0386?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="max-w-full aspect-square w-[120px]"
                    />
                    <div className="mt-6">Inclusive</div>
                  </div>
                  <div className="mt-4 text-sm leading-6">
                    Lorem ipsum dolor sit amet consectetur. Congue tellus tortor
                    at viverra egestas consectetur arcu. Eu velit amet arcu
                    massa sapien quam pulvinar a nec.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-white max-md:mt-10">
                  <div className="flex flex-col justify-center text-3xl font-bold leading-9 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31b24f3ccc2af47b904e8f65ebde4c0a33a9487ba1d7b91d9cfb9e3395a8d775?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b24f3ccc2af47b904e8f65ebde4c0a33a9487ba1d7b91d9cfb9e3395a8d775?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b24f3ccc2af47b904e8f65ebde4c0a33a9487ba1d7b91d9cfb9e3395a8d775?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b24f3ccc2af47b904e8f65ebde4c0a33a9487ba1d7b91d9cfb9e3395a8d775?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b24f3ccc2af47b904e8f65ebde4c0a33a9487ba1d7b91d9cfb9e3395a8d775?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b24f3ccc2af47b904e8f65ebde4c0a33a9487ba1d7b91d9cfb9e3395a8d775?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b24f3ccc2af47b904e8f65ebde4c0a33a9487ba1d7b91d9cfb9e3395a8d775?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b24f3ccc2af47b904e8f65ebde4c0a33a9487ba1d7b91d9cfb9e3395a8d775?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="max-w-full aspect-square w-[120px]"
                    />
                    <div className="mt-6">Unique</div>
                  </div>
                  <div className="mt-4 text-sm leading-6">
                    Lorem ipsum dolor sit amet consectetur. Congue tellus tortor
                    at viverra egestas consectetur arcu. Eu velit amet arcu
                    massa sapien quam pulvinar a nec.
                  </div>
                </div>
              </div>
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


export default About;
