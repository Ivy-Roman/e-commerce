import React from "react";
import { categories } from "../assets/data";

const Categories = ({ category, setCategory}) => {
  return (
    <section className="max-padd-container py-16 xl:py-20" id="shop">
      <div className="flex justify-evenly flex-wrap">
        {categories.map((item, index) => (
          <div
          onClick={()=> setCategory(prev => prev === item.name ? "All" : item.name)}
            id={item.name}
            key={item.name}
            className={`py-10 px-32 rounded-3xl text-center cursor-pointer ${category === item.name ? 'bg-[#A2A2A2]' : 'bg-primary'}`}
          >
            {/* <img src={item.image} alt="" height={44} width={44}/> */}
            <h4 className="mt-6 medium-18">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
