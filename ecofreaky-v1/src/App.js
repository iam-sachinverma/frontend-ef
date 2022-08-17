import './App.css';
import { Routes as Switch, Route } from 'react-router-dom';
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import Home from './pages/home/home'
import Shop from './pages/shop/Shop';
import { Search } from './components/search/search';
import ProductsPage from './pages/shop/ProductsPage';
import ProductView from './components/product/ProductView';
import Cart from './pages/checkout/cart.jsx';
import { useEffect } from 'react';
import Header from "./components/Header/header";
import { Profile } from './pages/profile/profile';
import { addressUpdate, loginSuccess, logOut } from './redux/userRedux';
import { useDispatch, useSelector } from 'react-redux';
import OrderSum from './pages/profile/orderSummary';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorPage } from './components/error/error';
import { userRequest } from './requestMethods';
import ToS from './misc/ToS';


function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.currentUser)
  useEffect(() => {
    if (user !== null) {
      const check = async () => {
        await userRequest.get(`users/verify/${user._id}`).then((res) => {
          if (res.status === 200) {
            dispatch(loginSuccess(user));
            // console.log(res.data);
            dispatch(addressUpdate(res.data?.addresses));

          } else {
            dispatch(logOut());
            toast.error("Your Session has expired");
          }
        }).catch((err) => {
          dispatch(logOut());
          toast.error("Your Session has expired");
        })
      }
      check();
    } else {
      return;
    }
  }, [dispatch])

  return (
    <div>
      <ToastContainer />
      <div className="sticky top-0 z-30">
        <Header></Header>
      </div>
      <Switch >
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/products/:category" element={<ProductsPage />}></Route>
        <Route path="/product/:id" element={<ProductView />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/address" element={<Profile />}></Route>
        <Route path="/orders" element={<OrderSum />}></Route>
        <Route path="/tos" element={<ToS />}></Route>
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
