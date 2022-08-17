import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { toast } from 'react-toastify';


import {
    getOrderStart,
    getOrderSuccess,
    getOrderFailure,

  } from './orderRedux'
import { Navigate } from "react-router-dom";


export const login = async (dispatch, user, endpoint) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post(endpoint, user);
      dispatch(loginSuccess(res.data));
      toast.success("Login Successful");
    } catch (err) {
    console.log(err)
      dispatch(loginFailure());
      toast.error(err.message);
    }
  };

export const logout = async (dispatch, user) => {
    dispatch(logOut(user=null))  
}

export const userUpdate = async (userId, data, navigate) => {
    try {
        await userRequest.post(`users/address/${userId}`, data).then(res => {
            if(res.status === 200){
                toast.success("Address Updated/Added");
                navigate("/cart");
                window.location.reload();
            }else{
                toast.error("Something went wrong");
            }
        });

    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
}

  export const getOrders = async (dispatch, id) => {
    dispatch(getOrderStart());
    try {
      const res = await publicRequest.get(`orders/users/${id}`);
      dispatch(getOrderSuccess(res.data));
    } catch (err) {
      dispatch(getOrderFailure());
    }
  };

  export const createOrder = async (data) => {
    try {
        await userRequest.post(`orders`, data).then(res => {
            if(res.status === 200){
                console.log(res.data);
                toast.success("Order Placed");
            }else{
                toast.error("Something went wrong! Check if you are logged in");
            }
        });
    } catch (error) {
        
    }
  }

