import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const OrderSummary = () => {
  const location = useLocation();

  const [orders, setOrders] = useState(...location.state);
  const { _id, products, address, time, total } = orders;

  let subTotal;

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <p className="text-lg font-large leading-6 text-gray-600">
          {`Ordered At : ${new Date(time).toDateString()} Time : ${new Date(
            time
          ).toLocaleTimeString("en-US")}`}
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          {/* Ordered Products */}
          <div className="border flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Ordered Items
            </p>
            {products.map((product, idx) => (
              <div
                className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
                key={idx}
              >
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={product.image}
                    alt="ordered product"
                  />
                  <img
                    className="w-full object-contain lg:h-60 h-40 md:hidden"
                    src={product.image}
                    alt="ordered product"
                  />
                </div>
                <div className="border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                      {product.pname}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Size: </span>{" "}
                        {product?.selectedSize?.name}
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Color: </span>{" "}
                        {product?.selectedColor[0]?.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                      ₹ {product.pprice}
                      {/* <span className="text-red-300 line-through"> $45.00</span> */}
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      {product.quantity}
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      ₹ {product.pprice * product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Summary */}
          <div className="border flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">₹ {total}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Discount </p>
                  <p className="text-base leading-4 text-gray-600">₹ 0</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">₹ 0</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  ₹ {total}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 border w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">
            Customer
          </h3>
          <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                <div className=" flex justify-start items-start flex-col space-y-2">
                  <p className="text-lg font-semibold leading-4 text-left text-gray-800">
                    {address.name}
                  </p>
                  <p className="text-md leading-5 text-gray-600">
                    Phone No: {address.phone} <br></br> Email: {address.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
              <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                  <p className="text-lg font-semibold leading-4 text-center md:text-left text-gray-800">
                    Shipping Address
                  </p>
                  <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-md leading-5 text-gray-600">
                    {address.address} <br></br> {address.city} -{" "}
                    {address.pincode}, {address.state}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
