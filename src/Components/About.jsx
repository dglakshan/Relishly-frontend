import { ExperienceBadge, PremiumBadge } from "./icons";

export default function AboutUs() {
  return (
    <div
      id="About"
      className="grid grid-cols-1 gap-10 md:grid-cols-2 px-6 md:px-20 mx-auto py-10 lg:py-20"
    >
      <div className="w-full grid grid-cols-1 h-fit">
        <div className="relative h-[400px] md:h-[512px] w-full ">
          <img
            src="/about-2.webp"
            alt=""
            className="absolute top-0 left-0 object-cover w-full h-full "
          />

          <img
            src="/about-1.webp"
            alt=""
            className="absolute -bottom-4 right-0 md:-bottom-8 md:-right-8 object-cover border-4 border-primary h-[180px] w-[180px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-y-grid-gap pt-20 md:pt-0">
        <h2 className="sub-heading pb-2">About Us</h2>

        <h1 className="sub-heading-2">Who are we?</h1>
        <p className="paragraph-2 pt-special-gap max-w-[500px] mx-auto text-center">
          Relishly is where culinary passion meets a sophisticated atmosphere.
          We are a team of experts dedicated to crafting exceptional dining
          experiences using the freshest ingredients and world-class recipes.
          From our kitchen to your table, we ensure every detail is handled with
          elegance to create the perfect setting for your special memories.
        </p>

        <div className="w-full flex justify-center pt-grid-gap">
          <a href="#Menu" className="button-1">
            Check Menu
          </a>
        </div>
      </div>
    </div>
  );
}
