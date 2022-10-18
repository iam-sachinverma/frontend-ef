import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { verifySession } from "../../redux/apiCalls";
import "./message.scss";

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    document.body.classList.add("nointeraction");
    document.getElementsByClassName("green")[0].classList.add("alive");
    if (id) {
      verifySession(id, dispatch, navigate);
    }
    return () => {
      document.body.classList.remove("nointeraction");
    };
  }, [id]);
  return (
    <div className="flex flex-col pt-8 items-center justify-items-center w-full h-full">
      <div className="flex flex-col lg:text-lg text-md uppercase mt-20 lg:mt-10 items-center justify-items-center w-full h-96">
        <span className="bg-lightgreen lg:p-2 p-1">Payment Confirmation</span>
        <div
          id="container"
          className="flex flex-row mt-5 lg:pl-80 lg:pr-80 items-center justify-center w-full h-full"
        >
          <div
            id="success-box"
            className="flex items-center justify-center relative w-2/3 h-full"
          >
            <div className="dot"></div>
            <div className="dot two"></div>
            <div className="face">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="mouth happy"></div>
            </div>
            <div className="shadow scale"></div>
            <div className="message">
              <h1 className="alert">Success!</h1>
              <small>Transaction successfull.</small>
            </div>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="button-box"
            >
              <h1 className="green">Okay!</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
