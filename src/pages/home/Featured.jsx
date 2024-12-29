import SectionTitle from "../../components/shared/SectionTitle";
import './Featured.css'
import featured from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className=" py-20 text-white featured-item bg-fixed">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex px-20 justify-center items-center gap-16 bg-slate-800 bg-opacity-40">
        <div>
          <img src={featured} alt="" />
        </div>
        <div >
          <p className="text-gray-200">March 20, 2023</p>
          <h3 className="uppercase font-bold my-1">WHERE CAN I GET SOME?</h3>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>

          <button className="btn btn-outline border-0 border-b-4 mt-6 text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
