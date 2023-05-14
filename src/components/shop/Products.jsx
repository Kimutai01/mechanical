import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";

const AllProducts = [
  {
    id: 1,
    name: "Set of liquids",
    sale: true,
    price: 250.0,
    initialPrice: 290,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image1:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/633d44f39bba82b0978af961_automobile-oils-p-800.jpeg",
    image2:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/63457444ac9b0df3447d9d1e_oil-bottles.jpeg",
    image3:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/634574462045d88a34a49c93_motor-oil.jpeg",
    image4:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/63457448c6cb6fbfdf3976fd_motor-oil-bottles.jpeg",
    image5:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/63457449c8844a47530160b6_motor-oil-bottle.jpeg",
  },
  {
    id: 2,
    name: "PISTON",
    sale: false,
    price: 35,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image1:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/633d44c5e9c13226a2f6340c_realistic-pistons-isolated-white-background-engine-equipment-car-motorbike_1441-2508-p-800.jpeg",
  },
  {
    id: 3,
    name: "SHOCK ABSORBER",
    sale: true,
    price: 145.0,
    initialPrice: 160.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image1:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/633d4187454f445c7bc49d34_shock-absorber-realistic_1284-10875.jpeg",
  },
  {
    id: 4,
    name: "SET FOR MOT",
    sale: true,
    price: 220.0,
    initialPrice: 275.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image1:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/633d41165294626aab411fba_car-oil-filters-motor-oil-can-isolated-white_93675-128253%20(1).jpeg",
  },
  {
    id: 5,
    name: "Tyres",
    sale: true,
    price: 140.0,
    initialPrice: 180.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image1:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/633d360d95ee45564ea70ffd_tires-p-800.jpeg",
  },
  {
    id: 6,
    name: "Motor Oil",
    sale: true,
    price: 30.0,
    initialPrice: 43.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image1:
      "https://assets.website-files.com/633148302ffcde4d1f5b7e89/633ae681ee258e86445eeeb2_motor-oil-bottle.jpeg",
  },
];

const Products = () => {
  return (
    <div className="bg-[#000] pt-28 flex gap-10 md:px-32">
      <div className="w-[70%] grid grid-cols-2 gap-10">
        {AllProducts.map((product) => {
          return (
            <div key={product.id} className="bg-[#161616] rounded-lg">
              <img
                src={product.image1}
                alt={product.name}
                className="h-72 w-full rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-white text-3xl font-bold uppercase">
                  {product.name}
                </h2>
                <div>
                  {product.sale ? (
                    <div className="flex gap-10 mt-2">
                      <p className="text-[grey] line-through font-bold text-xl">
                        $ {product.initialPrice} USD
                      </p>
                      <p className="text-[#ff4d23] font-bold text-xl">
                        $ {product.price} USD
                      </p>
                    </div>
                  ) : (
                    <p className="text-[#ff4d23] font-bold text-xl">
                      $ {product.price} USD
                    </p>
                  )}
                </div>
                <p className="mt-5 text-[grey] font-medium">
                  {product.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[30%]">
        <div className="bg-[#161616] mt-10  rounded-lg p-8">
          <h1 className="uppercase text-white font-bold text-2xl">
            Service hours
          </h1>
          <div className="flex gap-7">
            <div className="flex items-center gap-2">
              <AiOutlineCalendar size={25} color="#ff4d24" />
              <h1 className="text-[#ff4d24] text-md font-semibold">
                Monday - Friday
              </h1>
            </div>
            <div>
              <h1 className="text-[grey] text-md">8AM - 9PM</h1>
            </div>
          </div>
          <div className="flex mt-5 gap-20">
            <div className="flex items-center gap-2">
              <AiOutlineCalendar size={25} color="#ff4d24" />
              <h1 className="text-[#ff4d24] text-md font-semibold">Saturday</h1>
            </div>
            <div>
              <h1 className="text-[grey] text-md">8AM - 7PM</h1>
            </div>
          </div>
          <div className="flex mt-5 gap-24">
            <div className="flex items-center gap-2">
              <AiOutlineCalendar size={25} color="#ff4d24" />
              <h1 className="text-[#ff4d24] text-md font-semibold">Sunday</h1>
            </div>
            <div>
              <h1 className="text-[grey] text-md">8AM - 2PM</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
