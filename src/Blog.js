import React, { useState, useEffect } from 'react';

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await fetch('http://127.0.0.1:8000/get_blog/');
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        }
        console.log(blogs)
        fetchBlogs();
    }, []);
  return (
    <div className="flex flex-col bg-black">

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


                <div className="flex flex-wrap gap-1 max-md:flex-col max-md:gap-0">
                { blogs.map(blog => (
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-white max-md:mt-7 max-md:max-w-full">
                    
                    <img
                      loading="lazy"
                      src={blog.video_url}
                      className="w-full aspect-[1.35] max-md:max-w-full"
                    />
                        
                        <div className="flex flex-col mt-4 max-md:max-w-full">
                        <div className="text-3xl font-bold leading-9 max-md:max-w-full">
                        </div>  {blog.title}


                        <div className="mt-2 text-xl font-medium leading-9 max-md:max-w-full">
                        {blog.description}
                        </div>
                        </div>
                    </div>
                    </div>
            
        ))}

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



export default Blog;
