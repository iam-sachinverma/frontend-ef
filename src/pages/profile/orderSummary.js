import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const OrderSum = () => {
  const user = useSelector((state) => state.user.currentUser);
  const orders = useSelector((state) => state.order.Orders);

  console.log(orders);

  const [orderDetail, setOrderDetail] = useState([]);
  const [value, setvalue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${value}`, { state: orderDetail });
  }, [orderDetail]);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
    getOrders(dispatch, user._id);
  }, [dispatch, navigate, user]);

  const onClickHandler = (event) => {
    const clicked = event.target.closest(".order-product");
    const idx = clicked.dataset.id;
    setvalue(idx);
    setOrderDetail(orders.filter((item) => item._id.includes(idx)));
  };

  return (
    <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
      <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
        <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
          <h3 className="text-3xl xl:text-4xl font-light leading-7 xl:leading-9 w-full  md:text-left text-gray-800">
            Orders
          </h3>
          <div className="flex bg-white justify-center items-center w-full mt-8  flex-col space-y-4 ">
            {Object.keys(orders).length !== 0 ? (
              orders?.map((order) => (
                <div
                  className="flex flex-col items-center justify-center w-full"
                  key={order._id}
                >
                  <h1 className="bg-blue rounded-t-md border border-green text-white p-2">
                    {`Ordered At : ${new Date(
                      order.time
                    ).toDateString()} Time : ${new Date(
                      order.time
                    ).toLocaleTimeString("en-US")}`}
                  </h1>
                  {order.products.map((product, index) => (
                    <a
                      key={index}
                      className="order-product flex md:flex-row justify-start items-start md:items-center rounded-md s  border border-slate-200 shadow-sm w-full"
                      onClick={onClickHandler}
                      data-id={order._id}
                    >
                      <div className="w-40 md:w-32">
                        <img
                          className="hidden md:block"
                          src={product.image}
                          alt="prod_image"
                        />
                        <img
                          className="md:hidden "
                          src={product.image}
                          alt="girl-in-red-dress"
                        />
                      </div>
                      <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                        <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                          <small className="text-gray-600 pb-2">
                            Order id: {order._id}
                          </small>
                          <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">
                            {product.pname}
                          </h3>
                          <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                            <p className="text-sm leading-none text-gray-600">
                              Size:{" "}
                              <span className="text-gray-800">
                                {" "}
                                {product.selectedSize?.name}
                              </span>
                            </p>
                            <p className="text-sm leading-none text-gray-600">
                              Quantity:{" "}
                              <span className="text-gray-800">
                                {product.quantity}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                          <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                            ₹{product.pprice}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                  <div className="flex bg-lightgreen/70 border border-green/40 rounded-b-md p-1 md:justify-end items-center w-full ">
                    <p className="text-xl lg:text-xl uppercase font-light leading-5 lg:leading-6 text-gray-800">
                      {order.status}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                  You have no orders
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSum;
