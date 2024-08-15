import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Order = () => {

  const navigate = useNavigate()
  const { getTotalCartAmount, token, all_products, cartItems, url } =
    useContext(ShopContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //   useEffect(()=>{
  //     console.log(data)
  //   }, [data])

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    all_products.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    // console.log(orderItems);
    let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
        const {session_url} = response.data;
        window.location.replace(session_url);
    } else {
        alert("Error")
    }
  };

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }else if(getTotalCartAmount===0){
      navigate('/cart')
    }
  }, [token])

  return (
    <section className="max-padd-container py-28 xl:py-32">
      <form
        onSubmit={placeOrder}
        className="flex flex-col xl:flex-row gap-20 xl:gap-28"
      >
        {/* delivery information */}
        <div className="flex flex-1 flex-col gap-3 text-[95%]">
          <h3 className="bold-28 mb-4">Delivery information</h3>
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={data.firstName}
              type="text"
              placeholder="First name"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={data.lastName}
              type="text"
              placeholder="Last name"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={data.email}
            type="email"
            placeholder="Email address"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={data.phone}
            type="text"
            placeholder="Phone number"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={data.street}
            type="text"
            placeholder="Street"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={data.city}
              type="text"
              placeholder="City"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              required
              onChange={onChangeHandler}
              name="state"
              value={data.state}
              type="text"
              placeholder="State"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="zipcode"
              value={data.zipcode}
              type="text"
              placeholder="Zip code"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={data.country}
              type="text"
              placeholder="Country"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
        </div>

        {/* cart total */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-2">
            <h4 className="bold-22">Summary</h4>
            <div>
              <div className="flexBetween py-3">
                <h4 className="medium-16">Subtotal:</h4>
                <h4 className="text-gray-30 font-semibold">
                  ${getTotalCartAmount()}
                </h4>
              </div>
              <hr className="h-[2px] bg-slate-900/15" />
              <div className="flexBetween py-3">
                <h4 className="medium-16">Shipping Fee:</h4>
                <h4 className="text-gray-30 font-semibold">
                  ${getTotalCartAmount() === 0 ? 0 : 2}
                </h4>
              </div>
              <hr className="h-[2px] bg-slate-900/15" />
              <div className="flexBetween py-3">
                <h4 className="medium-18">Total:</h4>
                <h4 className="bold-18">
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </h4>
              </div>
            </div>
            <button type="submit" className="btn-secondary w-56 rounded-sm">
              Proceed to payment
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Order;
