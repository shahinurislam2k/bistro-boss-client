import { Link } from "react-router-dom";
import MenuItem from "../../components/shared/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="grid md:grid-cols-2 gap-6 mt-10 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <Link to={`/order`}>
          <button className="btn  btn-outline border-0 border-b-4 mt-6 ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
