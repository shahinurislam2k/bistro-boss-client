import React from "react";

const FoodCord = ({item}) => {
    const {name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100  border-2 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 m-4 p-2 rounded-lg bg-slate-950 text-white">$ {price}</p>
      <div className="items-center card-body bg-[#f3f3f3] ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn  bg-[#dbd8d8] text-yellow-600 btn-outline border-0 border-b-4 mt-6 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCord;
