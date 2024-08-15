import React, { useContext } from "react";
import { FaUpRightAndDownLeftFromCenter, FaMinus, FaPlus } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(ShopContext);

  return (
    <div className="shadow-sm">
      <div className="relative group">
        <img
          src={url+"/images/"+product.image}
          alt=""
          className="rounded-tl-2xl rounded-tr-2xl"
        />
        <div className="absolute right-3 bottom-3 flexCenter gap-x-2">
          <Link
          onClick={()=> scrollTo(0, 0)}
            to={`/product/${product._id}`}
            className="bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <FaUpRightAndDownLeftFromCenter />
          </Link>
          {!cartItems[product._id] ? (
            <FaPlus
              onClick={() => addToCart(product._id)}
              className="bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer "
            />
          ) : (
            <div className="bg-white rounded-full flexCenter gap-2 h-8">
              <FaMinus
                onClick={() => removeFromCart(product._id)}
                className="rounded-full h-6 w-6 p-1 ml-1 bg-primary cursor-pointer"
              />
              <p className="w-3">{cartItems[product._id]}</p>
              <FaPlus
                onClick={() => addToCart(product._id)}
                className="rounded-full bg-secondary h-6 w-6 p-1 mr-1 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      <div className="p-3">
        <div className="flexBetween">
          <h5 className="text-[16px] font-bold text-gray-900/50">
            {product.category}
          </h5>
          <div className="text-secondary bold-18">${product.price}</div>
        </div>
        <h4 className="medium-18 mb-1 line-clamp-1">{product.name}</h4>
        <p className="line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
};

export default Item;
