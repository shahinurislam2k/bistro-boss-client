import FoodCord from "../../components/FoodCord";

const OrderTab = ({ items }) => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 my-5 md:grid-cols-3 gap-5">
      {items.map((item) => (
        <FoodCord key={item._id} item={item}></FoodCord>
      ))}
    </div>
  );
};

export default OrderTab;
