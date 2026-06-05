import { Quote, QuoteIcon } from "lucide-react";
import React, { useRef } from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // npm install react-icons

const cards = [
  {
    id: 1,
    title: "Jonas",
    rating: 5,
    description:
      "Amazing experience! The service was fast, reliable, and exactly what I needed. Highly recommended!",
  },
  {
    id: 2,
    title: "Hannah",
    rating: 4,
    description:
      "Top-notch service and outstanding support. Truly exceeded my expectations!",
  },
  {
    id: 3,
    title: "Tobias",
    rating: 5,
    description:
      "Professional, timely, and very trustworthy. I feel valued as a customer.",
  },
  {
    id: 4,
    title: "Clara",
    rating: 4,
    description:
      "High-quality service with a personal touch. They really care about their customers.",
  },
  {
    id: 5,
    title: "Mia",
    rating: 5,
    description:
      "Simply the best! I’ve never had such a smooth and enjoyable experience before.",
  },
  {
    id: 6,
    title: "Julian",
    rating: 4,
    description:
      "Quick, reliable, and hassle-free. I can confidently recommend them to everyone!",
  },
];

const CardSlider = () => {
  const sliderRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollLeft -= 300;
    } else {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
<div className="mb-4 text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            What Our <span className="text-yellow-500">Customers Are Saying</span>
          </h1>
        </div>
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 scroll-smooth"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-64 h-52 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
          >
            {/* Name */}
            <h3 className="font-bold text-lg">{card.title}</h3>

            {/* Ratings */}
            <div className="flex items-center mt-1 mb-2">
              <span className="text-sm font-semibold mr-2">Ratings:</span>
              {Array.from({ length: 5 }, (_, i) =>
                i < card.rating ? (
                  <FaStar key={i} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={i} className="text-gray-300" />
                )
              )}
            </div>
            {/* Description */}
            <p className="text-gray-500 text-sm">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Buttons below */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => scroll("left")}
          className="px-4 py-2 bg-yellow-500 rounded-full hover:bg-gray-300 transition"
        >
          &#10094;
        </button>
        <button
          onClick={() => scroll("right")}
          className="px-4 py-2 bg-yellow-500 rounded-full hover:bg-gray-300 transition"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CardSlider;