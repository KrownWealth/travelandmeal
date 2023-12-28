import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cuisines = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className=" px-8 lg:px-16 py-20  bg-white  w-[100%]">
      <div className="grid grid-rows-3 text-center items-center justify-center space-y-6">
        <h1 className="text-center">Recently Ordered Menus </h1>
        <h3 className="text-center ">
          Hungry? Have a look to the best food cuisine restaurants along your journey route.
          Order food online at Multi Cuisine Restaurants along your way.
        </h3>
      </div>
      <div className="px-8 lg:px-16 pb-20 bg-white w-[100%]">
        <Slider {...settings}>
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="h-[220px]  bg-white rounded overflow-hidden shadow-lg"
            >
              <div className="h-50 bg-white flex justify-center items-center ">
                <Image
                  className="w-40 h-40"
                  src={item.img}
                  alt="Sunset in the mountains"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex justify-center items-center">
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Cuisines;

const foodItems = [
  {
    id: 0,
    img: "/Assets/Images/menu/egusi.jpg",
    title: "Egusi Soup",
  },
  {
    id: 1,
    img: "/Assets/Images/menu/afang with semo.jpg",
    title: "Afang soup",
  },
  {
    id: 2,
    img: "/Assets/Images/menu/egusi.jpg",
    title: "Egusi Soup",
  },
  {
    id: 3,
    img: "/Assets/Images/menu/eba with vegetable.jpg",
    title: "Vegetable Soup",
  },
  {
    id: 4,
    img: "/Assets/Images/menu/jollof rice.jpg",
    title: "Jollof rice",
  },
  {
    id: 5,
    img: "/Assets/Images/menu/small chops.jpg",
    title: "Small chops",
  },
  {
    id: 6,
    img: "/Assets/Images/menu/shawarma roll.jpg",
    title: "Shawarma roll",
  },
  {
    id: 7,
    img: "/Assets/Images/menu/meatpie.jpg",
    title: "Meatpie",
  },
  {
    id: 8,
    img: "/Assets/Images/menu/yam porridge.jpg",
    title: "Yam porridge",
  },
  {
    id: 9,
    img: "/Assets/Images/menu/whiterice.jpg",
    title: "White rice",
  },
];
