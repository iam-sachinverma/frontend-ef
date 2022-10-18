import React from 'react'

const Impact = ({content}) => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="flex flex-col px-6 py-8 space-y-6 rounded-lg shadow-lg sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-blue text-lightgreen">
          <h1 className="px-6 text-2xl">"Impact on environment":</h1>
          {content ? (
            content.map((item, index) => {
              return (
                <div className="flex space-x-2 sm:space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <div className="space-y-2">
                    <p className="text-lg font-medium leading-snug">{item}</p>
                    {/* <p className="leading-snug">
                                  Praesentium ea et neque distinctio quas eius
                                  repudiandae quaerat obcaecati voluptatem
                                  similique!
                                </p> */}
                  </div>
                </div>
              );
            })
          ) : (
            <h1>
              Every Ecofreaky Product helps environment in unimaginable ways
            </h1>
          )}
        </div>
        <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <img
              src="https://images.unsplash.com/photo-1561990986-c31dbb3cb368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxlbnZpcm9ubWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60/640x480/"
              alt=""
              className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact