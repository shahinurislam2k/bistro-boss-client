import OrderImage from "../../assets/shop/Order.jpg";
import Cover from "../../components/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss - Order</title>
      </Helmet>
      <Cover
        image={OrderImage}
        title="OUR SHOP"
        description="WOULD YOU LIKE TRY A DISH?"
      ></Cover>

      <div className="my-20">
        <Tabs>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          {/* Salad Tab Panel */}
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          {/* Pizza Tab Panel */}
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          {/* Soups Tab Panel */}
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          {/* Desserts Tab Panel */}
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          {/* Drinks Tab Panel */}
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
