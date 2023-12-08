import Image from "next/image";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import EachResCuisines from "@/components/EachResCuisines";
import Link from "next/link";

const Cuisines = ({ restaurant }) => {
 
  return (
    <section className="pt-24 pb-40 bg-white">
      <div className="lg:pl-16 flex flex-row bg-light-orange-2 justify-between">
        <div className="pl-8 pt-16 basis-2/4">
          <h2>
            Restaurants <br />
            Lagos-Benin Road, Ore
          </h2>
          <p className="inline-flex text-gray-700 text-base">
            Order online for your favorite African foods, intercontinental
            dishes, <br />
            snacks, fruit items, suya spot for your journey.
          </p>

          <h3 className="pt-4">See lists of vetted restaurants and cuisines</h3>
          <Link href="#viewlist">
            <button className="mt-4 flex justify-center items-center w-[150px]">
              List Below
              <span className="ml-2">
                <BsFillArrowDownCircleFill />
              </span>
            </button>
          </Link>
        </div>
        <div className="basis-2/4 bg-white ">
          {" "}
          <Image
            src="/Assets/Images/cuisines heroimage.png"
            alt=""
            width={600}
            height={350}
            className=" justify-center items-center mx-auto"
          />
        </div>
      </div>
      <hr />
      <div
        id="#viewlist"
        className="px-8 w-[100%] lg:w-[90%] mx-auto justify-center items-center bg-white lg:pl-8 "
      >
        <div className="flex flex-row">
          <div className="basis-2/4 pt-24">
            <h2 className="text-[24px]">
              Best Restaurants along <br />
              Lagos-Benin Expressway, Ore
            </h2>
            <p>Explore 20+ Restaurants in Ore Town</p>
            <button className="flex justify-center items-center w-[220px] mt-4 text-base">
              View More Restaurants
              <span className="ml-2">
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
          <div className="basis-2/4 mt-16">
            <EachResCuisines restaurant={restaurant} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cuisines;
