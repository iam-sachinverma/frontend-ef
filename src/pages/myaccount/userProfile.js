import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { logOut } from "../../redux/userRedux";
import { getOrders } from "../../redux/apiCalls";

import ProfileTab from "../../components/userProfile/profileTab";
import AddressTab from "../../components/userProfile/addressTab";
import OrderTab from "../../components/userProfile/orderTab";

import Footer from "../../components/Footer/Footer";

const UserProfile = () => {
  const [openTab, setOpenTab] = useState(1);

  const user = useSelector((state) => state.user.currentUser);
  const orders = useSelector((state) => state.order.Orders);

  console.log(user);
  console.log(orders);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login", { state: "profile" });
    } else {
      getOrders(dispatch, user._id);
    }
  }, [user, navigate, dispatch]);

  const logoutHandler = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className="container mx-auto px-2 py-6 sm:px-8">
        <div className="grid grid-cols-12 gap-6 tabs-container">
          <div className="col-span-12 lg:col-span-4 md:col-span-4">
            <div className="flex flex-col items-start bg-white drop-shadow-md rounded p-5 mb-4">
              <div className="text-left text-md lg:text-lg">
                <span className="block font-bold">{user?.name}</span>
                <span className="text-slate-400">{user?.email} </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 bg-white drop-shadow-md rounded p-5">
              <ul className="w-full text-md lg:text-lg" role="tablist">
                <li className="btn-tabs tab-active-2 transition-all-300">
                  <a
                    // className={"flex items-center gap-4 px-1 py-4 text-green"}
                    className={
                      openTab === 1
                        ? "flex items-center gap-4 px-1 py-4 text-green"
                        : "flex items-center gap-4 px-1 py-4"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>My Account</span>
                  </a>
                </li>

                <div className="flex-grow border-t border-gray-400"></div>

                <li className="btn-tabs tab-active-2 transition-all-300">
                  <a
                    className={
                      openTab === 2
                        ? "flex items-center gap-4 px-1 py-4 text-green"
                        : "flex items-center gap-4 px-1 py-4"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <span>My Address</span>
                  </a>
                </li>

                <div className="flex-grow border-t border-gray-400"></div>

                <li className="btn-tabs tab-active-2 transition-all-300">
                  <a
                    className={
                      openTab === 3
                        ? "flex items-center gap-4 px-1 py-4 text-green"
                        : "flex items-center gap-4 px-1 py-4"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>

                    <span>My Order</span>
                  </a>
                </li>

                <div className="flex-grow border-t border-gray-400"></div>

                <li className="transition-all-300">
                  <a
                    className="flex items-center gap-4 px-1 py-4"
                    href="/login"
                    onClick={logoutHandler}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>

                    <span>Log out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Tab Section */}
          <section className="col-span-12 lg:col-span-8 md:col-span-8 tabs-content">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <ProfileTab name={user?.name} email={user?.email}></ProfileTab>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <AddressTab addresses={user?.addresses}></AddressTab>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <OrderTab orders={orders}></OrderTab>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default UserProfile;
