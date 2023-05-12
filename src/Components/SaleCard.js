import "../index.css";
import { useContext, React } from 'react'
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";

//images
import image from "../images/edited-images/image.jpg";
import { AuthContext } from "../Context/AuthContext";

function SaleCard({ sale }) {
  const { addViewedProperty } = useContext(AuthContext)

  const handleClick = () => {
    addViewedProperty(sale);
  };
  const imageSliced = sale.images.slice(0, 4);
  return (
    <div>
      <div className="card-component-section-two">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 card-component-flowbite">
          <a href="#">
            <img
              className="rounded-t-lg image-general-size"
              src={
                imageSliced[0].url
                  ? imageSliced[0].url
                  : "https://media.istockphoto.com/id/506545080/vector/transparent-pattern-background.jpg?s=1024x1024&w=is&k=20&c=oSehSBTS7lglexi8oNkDCVjvt0RE2QuSYWHWyfucp80="
              }
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight card-text-flowbite">
                {sale.propertyType ? sale.propertyType : "House"}
              </h5>
            </a>
            {/* <p className="mb-3 font-normal card-text-flowbite-desc h-10 ">
              {sale.descriptionProp}
            </p> */}
            {/**property infos */}
            <div className="flex mb-4 mt-8">
              <div className="flex items-center flex-col">
                <p className="flex items-center">
                  <MdOutlineBedroomParent
                    className="mr-2"
                    size={30}
                    color="white"
                  />
                  <span className="text-color-icon mr-10">
                    {" "}
                    {sale.bedrooms ? sale.bedrooms : "2"}
                  </span>
                </p>

                <p className="mr-6 text-color-paragraph mt-2 ">Bedrooms</p>
              </div>
              <div className="flex items-center flex-col">
                <p className="flex items-center">
                  <MdOutlineMeetingRoom
                    className="mr-2"
                    size={30}
                    color="white"
                  />
                  <span className="text-color-icon mr-10">
                    {" "}
                    {sale.bathroom ? sale.bathroom : "3"}
                  </span>
                </p>

                <p className="mr-4 text-color-paragraph mt-2 ">Bathroom</p>
              </div>
              <div className="flex items-center flex-col">
                <p className="flex items-center">
                  <FaBath className="mr-2" size={30} color="white" />
                  <span className="text-color-icon ">
                    {" "}
                    {sale.balcony ? sale.balcony : "3"}
                  </span>
                </p>

                <p className="text-color-paragraph mt-2 "> balcony</p>
              </div>
            </div>
            <Link to={`/info/${sale._id}`}>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none    card-btn"
              onClick={handleClick}>
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleCard;
