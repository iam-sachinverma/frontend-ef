import React from "react";
import Logo from '../../assets/favicon.png'

export default function Footer(){
    return (
      <section className="bg-blue overflow-x-hidden">
        <div className="border-t">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 mb-10 md:mb-0">
              <div className="w-full md:w-2/6 md:border-r md:border-green px-4">
                <div className="max-w-xs mx-auto py-20">
                  <a
                    className="inline-block text-xl text-white font-medium font-heading mb-8 md:mb-32"
                    href="/"
                  >
                    <img className="h-12" src={Logo} alt="" width="auto" />
                    Ecofreaky
                  </a>
                  <p className="max-w-xs text-white  font-sans">
                    Only platform to connect ecofreaks.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-4/6 px-4">
                <div className="md:py-20 px-8 lg:pl-20 lg:pr-10">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-1/2 md:w-1/4 px-4 mb-12 md:mb-0">
                      <h3 className="mb-8 text-sm text-white uppercase font-heading">
                        Contact
                      </h3>
                      <ul>
                        <li className="mb-8">
                          <a
                            href="mailto:support@ecofreaky.com"
                            className="ml-2 text-white hover:text-green"
                          >
                            Returns
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            href="mailto:team@ecofreaky.com"
                            className="ml-2 text-white hover:text-green"
                          >
                            Team
                          </a>
                        </li>
                        {/* <li>
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Blog
                          </a>
                        </li> */}
                      </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4 px-4 mb-12 md:mb-0">
                      <h3 className="mb-8 text-sm text-white uppercase font-heading">
                        Pages
                      </h3>
                      <ul>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="/login"
                          >
                            Login
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="/register"
                          >
                            Register
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-white hover:text-gray-400"
                            href="https://seller.ecofreaky.com"
                          >
                            Sell on Ecofreaky
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4 px-4">
                      <h3 className="mb-8 text-sm text-white uppercase font-heading">
                        Legal
                      </h3>
                      <ul>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="/tos"
                          >
                            Terms
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="/about"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Team
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="/privacy"
                          >
                            Privacy
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="/returns"
                          >
                            Return Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="w-1/2 md:w-1/4 px-4">
                      <h3 className="mb-8 text-sm text-white uppercase font-heading">
                        Resources
                      </h3>
                      <ul>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Blog
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Service
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Product
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Pricing
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t md:border-r md:border-green py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <p className="mb-8 md:mb-0 text-white">
                All rights reserved &copy; Ecofreaky 2021
              </p>
              <div className="flex w-full md:w-auto">
                <a className="mr-8" href="https://www.facebook.com/EcoFreaky">
                  <img
                    className="h-7"
                    src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png"
                    alt="ecofreaky facebook"
                  />
                </a>
                <a className="mr-8" href="https://www.instagram.com/ecofreaky/">
                  <img
                    className="h-6"
                    src="https://i.ibb.co/2St7HJC/instagram-1.png"
                    alt="ecofreaky instagram"
                  />
                </a>
                <a
                  className="mr-8"
                  href="https://www.youtube.com/channel/UCkVypisBUrIxwn0IzF4mVsw"
                >
                  <img
                    className="h-6"
                    src="https://img.icons8.com/color/48/000000/youtube-play.png"
                    alt="ecofreaky youtube_ecofreaky_channel"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}