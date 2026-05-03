import { menuData } from "../Data/SampleData.js";
import { useState } from "react";
import MenuItemCart from "./MenuItemCart.jsx";

const mealsCategory = [
  { name: "ALL" },
  { name: "BREACKFAST" },
  { name: "APPEETIZERS" },
  { name: "MAINS" },
  { name: "SALADS" },
  { name: "DRINKS" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const setCategory = (e) => {
    return setActiveCategory(e);
  };

  const filteredItems = menuData.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <div
      id="Menu"
      className="w-full h-fit flex flex-col items-center justify-center gap-y-special-gap px-6 md:px-20 mx-auto py-10 lg:py-20 bg-primary-3"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-special-gap">
        <div className="flex flex-col items-center justify-center gap-y-special-gap">
          <h2 className="sub-heading text-start">Our Menu</h2>
          <div className="w-fit h-fit flex items-center justify-center gap-0">
            <div className="w-6 h-0.5 bg-secondary" />
            <div className="w-2 h-2 bg-secondary" />
            <div className="w-6 h-0.5 bg-secondary" />
          </div>
          <h1 className="sub-heading-2">We Provide Fresh Menu</h1>
        </div>
        <div className="w-full flex items-baseline-last justify-center h-full">
          <div className=" top-0 flex flex-wrap gap-grid-gap overflow-hidden">
            {mealsCategory.map((item) => (
              <button
                onClick={() => {
                  setCategory(item.name);
                }}
                key={item.name}
                className={`button-4 Nav-Effect truncate rounded-base ${activeCategory === item.name ? "bg-secondary text-primary" : "text-dark-text bg-primary-2"}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full col-span-7 h-fit grid grid-cols-1 md:grid-cols-2 gap-grid-gap pt-10">
        {activeCategory === "ALL"
          ? menuData.map((item) => (
              <MenuItemCart
                image={item.image}
                heading={item.heading}
                price={item.price}
                description={item.description}
              />
            ))
          : filteredItems.map((item) => (
              <MenuItemCart
                image={item.image}
                heading={item.heading}
                price={item.price}
                description={item.description}
              />
            ))}
      </div>
    </div>
  );
}
