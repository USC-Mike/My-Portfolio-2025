import React from "react";

const Contact = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="px-4 flex flex-col gap-2 mb-2 text-center h-full">
        <h2 className="text-lg font-bold mb-2">
          Feel free to reach out through any of the platforms below!
        </h2>

        {/* Social Links Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
          <a
            href="https://www.linkedin.com"
            className="flex flex-col items-center text-gray-600 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="3em" // Default size for larger screens
              height="3em" // Default size for larger screens
              className="mb-2 sm:w-1 sm:h-1 md:w-16 md:h-16" // Scaling for smaller screens
            >
              <path
                fill="#0076b2"
                d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"
              ></path>
              <path
                fill="#fff"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              ></path>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com"
            className="flex flex-col items-center text-gray-600 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="3em" // Default size for larger screens
              height="3em" // Default size for larger screens
              className="mb-2 sm:w-1 sm:h-1 md:w-16 md:h-16" // Scaling for smaller screens
            >
              <g fill="none">
                <rect width="256" height="256" fill="#242938" rx="60"></rect>
                <path
                  fill="#fff"
                  d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"
                ></path>
              </g>
            </svg>
            GitHub
          </a>
          <a
            href="mailto:example@example.com"
            className="flex flex-col items-center text-gray-600 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="3em" // Default size for larger screens
              height="3em" // Default size for larger screens
              className="mb-2 sm:w-1 sm:h-1 md:w-16 md:h-16" // Scaling for smaller screens
            >
              <g fill="none">
                <rect width="256" height="256" fill="#F4F2ED" rx="60"></rect>
                <path
                  fill="#4285F4"
                  d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636"
                ></path>
                <path
                  fill="#34A853"
                  d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091"
                ></path>
                <path
                  fill="#FBBC04"
                  d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363"
                ></path>
                <path
                  fill="#EA4335"
                  d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675"
                ></path>
                <path
                  fill="#C5221F"
                  d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493"
                ></path>
              </g>
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
