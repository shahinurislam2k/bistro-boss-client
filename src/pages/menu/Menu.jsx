import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/cover/Cover";

import menuImage from "../../assets/menu/menu-bg.jpg";
import dessertImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";


import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/shared/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div className="space-y-10">
      <Helmet>
        <title>Bistro Boss - Menu</title>
      </Helmet>
      {/* Offered Section*/}
      <div>
        <Cover
          image={menuImage}
          title="Our Menu"
          description="WOULD YOU LIKE TO TRY A DISH?"
        ></Cover>
        <SectionTitle
          subHeading="---Don't miss---"
          heading="TODAY'S OFFER"
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </div>


      {/* Dessert Section*/}
      <div>
        <Cover
          image={dessertImage}
          title="Dessert"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
        <MenuCategory items={dessert}></MenuCategory>
      </div>

      {/* Soup Section*/}
      <div>
        <Cover
          image={soupImage}
          title="Soups"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
        <MenuCategory items={soup}></MenuCategory>
      </div>


      {/* Pizza Section*/}
      <div>
        <Cover
          image={pizzaImage}
          title="Pizza"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
        <MenuCategory items={pizza}></MenuCategory>
      </div>


      {/* Salad Section*/}
      <div>
        <Cover
          image={saladImage}
          title="salad"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
        <SectionTitle
          subHeading="---Don't miss---"
          heading="TODAY'S OFFER"
        ></SectionTitle>
        <MenuCategory items={salad}></MenuCategory>
      </div>

    </div>
  );
};

export default Menu;
