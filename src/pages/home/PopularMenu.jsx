import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import MenuItem from "../../components/shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      {/* Popular menu data lode */}
      <div className="grid md:grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn  btn-outline border-0 border-b-4 mt-6 ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
