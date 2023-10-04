// Details.js
import React from "react";
import { useParams } from "react-router-dom";
import Properties from "./propertyapi.js"; // Import your data source

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Details = () => {
  const { id } = useParams();
  const cardDetails = Properties.find((card) => card.id === parseInt(id, 10));

  if (!cardDetails) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <div className="p-3 space-x-10 outerDiv">
        <div className="max-w-[22rem] bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 dark:border-gray-700 max-h-max myCard">
          <div className="m-2 z-10 ">
            <div className="z-20 w-[4.5rem] h-8 rounded-3xl text-center absolute pt-[0.5rem] text-xs font-medium mt-4 ml-4 bg-white text-blue-800">
              {cardDetails.status}
            </div>
            <div className="z-20 bg-white text-blue-800 w-8 h-8 ml-[17.75rem] rounded-full text-center absolute pt-[0.5rem] text-xs font-medium mt-4">
              <FavoriteBorderOutlinedIcon />
            </div>
            <img
              className="rounded-xl w-96 h-56"
              src={cardDetails.image}
              alt=""
            />
          </div>
          {/* dots */}
          <div className="z-20 bg-yellow-600 w-2 h-2 rounded-md text-center absolute pt-[0.5rem] mt-[-2rem] ml-36 text-xs font-medium"></div>
          <div className="z-20 bg-white w-2 h-2 rounded-md text-center absolute pt-[0.5rem] mt-[-2rem] ml-40 text-xs font-medium"></div>
          <div className="z-20 bg-white w-2 h-2 rounded-md text-center absolute pt-[0.5rem] mt-[-2rem] ml-44 text-xs font-medium"></div>
          <div className="z-20 bg-white w-2 h-2 rounded-md text-center absolute pt-[0.5rem] mt-[-2rem] ml-48 text-xs font-medium"></div>
          {cardDetails.popular ? (
            <div className="z-20 bg-blue-700 w-28 h-8 rounded-sm text-white text-center absolute pt-[0.5rem] mt-[-1.5rem] ml-[-0.5rem] text-xs font-medium">
              Popular
            </div>
          ) : null}

          <div className="px-5 py-4 ">
            <h4 className="text-xs font-medium flex flex-row pt-2">
              <p className="mr-2">
                <LocationOnOutlinedIcon />
              </p>
              {cardDetails.location}
            </h4>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {cardDetails.address}
            </h5>

            <div className="flex flex-row pb-4 mb-4 pt-2 border border-x-0 border-t-0 border-dashed">
              <div className="border border-l-0 border-y-0 border-dashed px-4">
                <p className="">
                  <LocationCityOutlinedIcon />
                </p>

                <p className="text-base font-medium">{cardDetails.room} room</p>
              </div>

              <div className="border border-l-0 border-y-0 border-dashed px-4">
                <p className="">
                  <BedOutlinedIcon />{" "}
                </p>
                <p className="text-base font-medium">{cardDetails.bed} bed</p>
              </div>

              <div className="border border-l-0 border-y-0 border-dashed px-4">
                <p className="">
                  <BathtubOutlinedIcon />
                </p>
                <p className="text-base font-medium">{cardDetails.bath} bath</p>
              </div>

              <div className="pl-4">
                <p className="">
                  <ZoomOutMapOutlinedIcon />
                </p>
                <p className="text-base font-medium">{cardDetails.area} sft</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <p className="">
                <span className="font-medium text-blue-800">
                  ${cardDetails.price}
                </span>
                /month
              </p>
              <a
                href="/"
                className="px-2 py-1 rounded-2xl ml-28 border border-blue-800 font-medium text-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        {/* card2 */}
      </div>
    </div>
  );
};

export default Details;
