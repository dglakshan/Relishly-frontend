import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";
import { QuoteLeftIcon, QuoteRightIcon } from "./icons";

const testimonials = [
  {
    name: "Niesha Phips",
    role: "Food Blogger",
    text: "The ambiance at Relishly is absolutely unmatched.\nTheir Classic Benedict is easily the best I've ever had.\nIt's the perfect spot for anyone who appreciates fine dining and great photography.",
    image: "/review-1.webp",
  },
  {
    name: "Daniel Porter",
    role: "Regular Customer",
    text: "I visit every weekend for their incredible grilled specialties.\nThe service is fast, and the ingredients are always fresh.\nYou can really taste the quality in every single bite they serve.",
    image: "/review-2.webp",
  },
  {
    name: "Ebony Swihart",
    role: "Event Planner",
    text: "We hosted a private family dinner here last month.\nEvery guest raved about the food and the stunning interior.\nThe staff went above and beyond to make our evening truly unforgettable.",
    image: "/review-3.webp",
  },
  {
    name: "Ebony Swihart",
    role: "Event Planner",
    text: "We hosted a private family dinner here last month.\nEvery guest raved about the food and the stunning interior.\nThe staff went above and beyond to make our evening truly unforgettable.",
    image: "/review-4.webp",
  },
];

export default function Testimonial() {
  return (
    <div
      id="Testimonials"
      className="w-full h-full flex flex-col items-center justify-center px-6 md:px-20 mx-auto py-10 lg:py-20"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-y-4 mb-16">
        <h2 className="sub-heading text-secondary font-semibold">
          Testimonials
        </h2>
        <div className="w-fit h-fit flex items-center justify-center gap-0">
          <div className="w-6 h-0.5 bg-secondary" />
          <div className="w-2 h-2 bg-secondary rounded-full mx-1" />
          <div className="w-6 h-0.5 bg-secondary" />
        </div>
        <h1 className="sub-heading-2 text-center">
          What they're saying about us
        </h1>
      </div>

      <div className="w-full h-fit">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20 w-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="pb-16">
              <div className="relative flex flex-col items-start h-full">
                <div className="relative bg-primary-3 p-8 rounded-review-cart w-full shadow-2xs">
                  <span className="inline-block mr-2 align-top opacity-40">
                    <QuoteLeftIcon size={20} color="var(--color-secondary)" />
                  </span>

                  {/* Review Text */}
                  <p className="paragraph-2 italic leading-relaxed py-4 ">
                    {item.text}
                  </p>

                  <span className="inline-block ml-2 align-bottom opacity-40">
                    <QuoteRightIcon size={20} color="var(--color-secondary)" />
                  </span>

                  <div className="absolute -bottom-3 left-10 w-6 h-6 bg-primary-3 rotate-45 shadow-2xs"></div>
                </div>

                <div className="mt-8 flex flex-col items-start gap-3 pl-4">
                  <img
                    src={item.image}
                    className="w-16 h-16 object-cover rounded-full border-2 border-white shadow-lg"
                    alt={item.name}
                  />
                  <div>
                    <h4 className="font-bold text-lg text-dark-text leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
