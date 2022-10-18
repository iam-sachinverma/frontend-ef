import React from "react";
import Footer from "../components/Footer/Footer";

const Team = () => {
  return (
    <div className="bg-gradient-to-br from-white via-lightgreen/50 to-beige">
      <div className="py-20 container mx-auto px-6 md:px-12 text-center">
        <div className="mb-16">
          <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
            Team behind Ecofreaky!
          </h2>
          <h3 className="text-gray-600 lg:w-8/12 lg:mx-auto">
            "Team work is a must for any organization or business to be
            successful. In the case of climate change, it is imperative that we
            work together as a team to tackle this problem and make sure that we
            don't let anything get in our way. It's not just about working
            towards a common goal, but also about working together as a group.
            The more people who are involved in solving this problem, the better
            chance we have at succeeding."
          </h3>
        </div>
        <div className="py-20 grid gap-28 md:gap-12 md:grid-cols-3">
          <div className="border-t-4 border-green/50 shadow-inner shadow-green/20 space-y-8 p-2 group">
            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
              <img
                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                src="https://ik.imagekit.io/de3sec/assets/Anuj_fXMyb28Hgn.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1665327350775"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-2xl">Anuj Ramatri</h4>
                <h3 className="block text-sm text-gray-500">CEO-Founder</h3>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-indigo-400/50 shadow-inner shadow-indigo-100 space-y-8 group">
            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
              <img
                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                src="https://ik.imagekit.io/de3sec/assets/assets_vOVYh6MVM?ik-sdk-version=javascript-1.4.3&updatedAt=1665328112847"
                alt="Aman Rajpal devloper coder designer ecofreaky"
                loading="lazy"
                width="1000"
                height="667"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-2xl">Aman Rajpal</h4>
                <h3 className="block text-sm text-gray-500">
                  Chief Technical Officer
                </h3>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-yellow/80 shadow-inner shadow-yellow/20 space-y-8 group">
            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
              <img
                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                src="https://ik.imagekit.io/de3sec/assets/Jatin_Nj058keiG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665326994032"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-2xl">Jatin</h4>
                <h3 className="block text-sm text-gray-500 decoration-wavy">
                  Marketing and Seller relations
                </h3>
              </div>
            </div>
          </div>

          <div className="border-t-4 mt-10 border-purple-400/50 shadow-inner shadow-indigo-100 space-y-8 group">
            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
              <img
                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                src="https://ik.imagekit.io/de3sec/assets/Aamna_zDXb3OM2P.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1665326993949"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-2xl">Aamna Sadiq</h4>
                <h3 className="block text-sm text-gray-500">
                  Content and communications
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Team;
