import React from 'react';

function Blog() {
  return (
    <div className="flex flex-col bg-black">
      <div className="flex flex-col pt-8 w-full text-white whitespace-nowrap backdrop-blur-[10px] max-md:max-w-full">
        <div className="flex gap-5 justify-between self-center px-5 w-full max-w-[1340px] max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto text-4xl font-bold">Coral</div>
          <div className="flex gap-5 justify-between items-center text-xl font-medium leading-9 max-md:flex-wrap">
            <div className="self-stretch my-auto">Home</div>
            <div className="self-stretch my-auto">About</div>
            <div className="flex flex-col self-stretch py-1 my-auto font-bold leading-[130%]">
              <div>Blog</div>
              <div className="shrink-0 h-0.5 bg-white rounded-2xl" />
            </div>
            <div className="justify-center self-stretch px-4 py-1 text-center text-black bg-white rounded-[100px]">
              Contact
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border border-solid bg-white bg-opacity-20 border-white border-opacity-20 min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="flex flex-col self-center mt-12 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-col px-5 max-md:max-w-full">
            <div className="text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
              What's new?
            </div>
            <div className="mt-4 text-xl leading-8 text-white max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Vel ut massa tristique
              pellentesque neque id curabitur tristique.{" "}
            </div>
          </div>
          <div className="flex flex-col mt-6 max-md:max-w-full">
            <div className="px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-7 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0eebdb904bdd3573ed6a0d67af34ffe5917a8165a055b3548cf09fa2a4d46664?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eebdb904bdd3573ed6a0d67af34ffe5917a8165a055b3548cf09fa2a4d46664?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eebdb904bdd3573ed6a0d67af34ffe5917a8165a055b3548cf09fa2a4d46664?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eebdb904bdd3573ed6a0d67af34ffe5917a8165a055b3548cf09fa2a4d46664?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eebdb904bdd3573ed6a0d67af34ffe5917a8165a055b3548cf09fa2a4d46664?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eebdb904bdd3573ed6a0d67af34ffe5917a8165a055b3548cf09fa2a4d46664?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eebdb904bdd3573ed6a0d67af34ffe5917a8165a055b3548cf09fa2a4d46664?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eebdb904bdd3573ed6a0d67af34ffe5917a8165a055b3548cf09fa2a4d46664?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="w-full aspect-[1.35] max-md:max-w-full"
                    />
                    <div className="flex flex-col mt-4 max-md:max-w-full">
                      <div className="text-3xl font-bold leading-9 max-md:max-w-full">
                        Creative Fusion
                      </div>
                      <div className="mt-2 text-xl font-medium leading-9 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Venenatis
                        senectus id sed cras parturient malesuada malesuada
                        dictum vestibulum.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-7 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/094b4ecaeb513653931a02e72a08c4676ec4df15100e0b606c6a83072f8a2e03?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/094b4ecaeb513653931a02e72a08c4676ec4df15100e0b606c6a83072f8a2e03?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/094b4ecaeb513653931a02e72a08c4676ec4df15100e0b606c6a83072f8a2e03?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/094b4ecaeb513653931a02e72a08c4676ec4df15100e0b606c6a83072f8a2e03?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/094b4ecaeb513653931a02e72a08c4676ec4df15100e0b606c6a83072f8a2e03?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/094b4ecaeb513653931a02e72a08c4676ec4df15100e0b606c6a83072f8a2e03?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/094b4ecaeb513653931a02e72a08c4676ec4df15100e0b606c6a83072f8a2e03?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/094b4ecaeb513653931a02e72a08c4676ec4df15100e0b606c6a83072f8a2e03?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="w-full aspect-[1.35] max-md:max-w-full"
                    />
                    <div className="flex flex-col mt-4 max-md:max-w-full">
                      <div className="text-3xl font-bold leading-9 max-md:max-w-full">
                        No-Code Magic
                      </div>
                      <div className="mt-2 text-xl font-medium leading-9 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Venenatis
                        senectus id sed cras parturient malesuada malesuada
                        dictum vestibulum.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-7 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/114b157ee439891903c8ec9686244f09e2b5b91849ffb17eed008bdaa07c2d4c?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/114b157ee439891903c8ec9686244f09e2b5b91849ffb17eed008bdaa07c2d4c?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/114b157ee439891903c8ec9686244f09e2b5b91849ffb17eed008bdaa07c2d4c?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/114b157ee439891903c8ec9686244f09e2b5b91849ffb17eed008bdaa07c2d4c?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/114b157ee439891903c8ec9686244f09e2b5b91849ffb17eed008bdaa07c2d4c?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/114b157ee439891903c8ec9686244f09e2b5b91849ffb17eed008bdaa07c2d4c?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/114b157ee439891903c8ec9686244f09e2b5b91849ffb17eed008bdaa07c2d4c?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/114b157ee439891903c8ec9686244f09e2b5b91849ffb17eed008bdaa07c2d4c?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="w-full aspect-[1.35] max-md:max-w-full"
                    />
                    <div className="flex flex-col mt-4 max-md:max-w-full">
                      <div className="text-3xl font-bold leading-9 max-md:max-w-full">
                        Sculpted Realities
                      </div>
                      <div className="mt-2 text-xl font-medium leading-9 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Venenatis
                        senectus id sed cras parturient malesuada malesuada
                        dictum vestibulum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-8 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fab19914da21706c20e560949f247d4fc478340524e682e6490efa25ac23b59?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fab19914da21706c20e560949f247d4fc478340524e682e6490efa25ac23b59?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fab19914da21706c20e560949f247d4fc478340524e682e6490efa25ac23b59?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fab19914da21706c20e560949f247d4fc478340524e682e6490efa25ac23b59?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fab19914da21706c20e560949f247d4fc478340524e682e6490efa25ac23b59?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fab19914da21706c20e560949f247d4fc478340524e682e6490efa25ac23b59?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fab19914da21706c20e560949f247d4fc478340524e682e6490efa25ac23b59?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fab19914da21706c20e560949f247d4fc478340524e682e6490efa25ac23b59?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="w-full aspect-[1.35] max-md:max-w-full"
                    />
                    <div className="flex flex-col mt-4 max-md:max-w-full">
                      <div className="text-3xl font-bold leading-9 max-md:max-w-full">
                        Tech-Driven Design
                      </div>
                      <div className="mt-2 text-xl font-medium leading-9 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Venenatis
                        senectus id sed cras parturient malesuada malesuada
                        dictum vestibulum.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-8 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8103358152670f4c30e6f1b98b1cbccee299b8cd45b20e3f6c51e5c26f924803?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8103358152670f4c30e6f1b98b1cbccee299b8cd45b20e3f6c51e5c26f924803?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8103358152670f4c30e6f1b98b1cbccee299b8cd45b20e3f6c51e5c26f924803?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8103358152670f4c30e6f1b98b1cbccee299b8cd45b20e3f6c51e5c26f924803?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8103358152670f4c30e6f1b98b1cbccee299b8cd45b20e3f6c51e5c26f924803?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8103358152670f4c30e6f1b98b1cbccee299b8cd45b20e3f6c51e5c26f924803?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8103358152670f4c30e6f1b98b1cbccee299b8cd45b20e3f6c51e5c26f924803?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8103358152670f4c30e6f1b98b1cbccee299b8cd45b20e3f6c51e5c26f924803?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="w-full aspect-[1.35] max-md:max-w-full"
                    />
                    <div className="flex flex-col mt-4 max-md:max-w-full">
                      <div className="text-3xl font-bold leading-9 max-md:max-w-full">
                        No-Code Magic
                      </div>
                      <div className="mt-2 text-xl font-medium leading-9 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Venenatis
                        senectus id sed cras parturient malesuada malesuada
                        dictum vestibulum.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-8 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4d139299621d88c1d1c26c2b24decc5630df125258fb6783fdd20b8525a15c66?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d139299621d88c1d1c26c2b24decc5630df125258fb6783fdd20b8525a15c66?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d139299621d88c1d1c26c2b24decc5630df125258fb6783fdd20b8525a15c66?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d139299621d88c1d1c26c2b24decc5630df125258fb6783fdd20b8525a15c66?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d139299621d88c1d1c26c2b24decc5630df125258fb6783fdd20b8525a15c66?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d139299621d88c1d1c26c2b24decc5630df125258fb6783fdd20b8525a15c66?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d139299621d88c1d1c26c2b24decc5630df125258fb6783fdd20b8525a15c66?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d139299621d88c1d1c26c2b24decc5630df125258fb6783fdd20b8525a15c66?apiKey=a95e6018b3544819937a202893b7c231&"
                      className="w-full aspect-[1.35] max-md:max-w-full"
                    />
                    <div className="flex flex-col mt-4 max-md:max-w-full">
                      <div className="text-3xl font-bold leading-9 max-md:max-w-full">
                        Immersive Experience
                      </div>
                      <div className="mt-2 text-xl font-medium leading-9 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Venenatis
                        senectus id sed cras parturient malesuada malesuada
                        dictum vestibulum.
                      </div>
                    </div>
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
            <div className="flex gap-5 justify-between pr-0.5 pl-4 mt-6 rounded-md border-2 border-white border-solid bg-neutral-900 leading-[170%]">
              <div className="my-auto">Email address</div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/63aaf904f9564b776791b9200754943c66d558d802f21096e3e9e20c9e665d80?apiKey=a95e6018b3544819937a202893b7c231&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/63aaf904f9564b776791b9200754943c66d558d802f21096e3e9e20c9e665d80?apiKey=a95e6018b3544819937a202893b7c231&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63aaf904f9564b776791b9200754943c66d558d802f21096e3e9e20c9e665d80?apiKey=a95e6018b3544819937a202893b7c231&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/63aaf904f9564b776791b9200754943c66d558d802f21096e3e9e20c9e665d80?apiKey=a95e6018b3544819937a202893b7c231&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/63aaf904f9564b776791b9200754943c66d558d802f21096e3e9e20c9e665d80?apiKey=a95e6018b3544819937a202893b7c231&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63aaf904f9564b776791b9200754943c66d558d802f21096e3e9e20c9e665d80?apiKey=a95e6018b3544819937a202893b7c231&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/63aaf904f9564b776791b9200754943c66d558d802f21096e3e9e20c9e665d80?apiKey=a95e6018b3544819937a202893b7c231&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/63aaf904f9564b776791b9200754943c66d558d802f21096e3e9e20c9e665d80?apiKey=a95e6018b3544819937a202893b7c231&"
                className="shrink-0 border border-white border-solid aspect-[1.02] fill-black stroke-[1px] stroke-white w-[51px]"
              />
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



export default Blog;
