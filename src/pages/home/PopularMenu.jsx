import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import MenuItem from "../../components/shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {menu.map((item) => (
          <MenuItem key={item._id} 
          item={item}
          ></MenuItem>
        ))}
      </div>
     <div className="flex justify-center">
     <button className="btn  btn-outline border-0 border-b-4 mt-6 ">View Full  Menu</button>
     </div>
    </div>
  );
};

export default PopularMenu;
