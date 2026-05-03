import { ExperienceBadge, PremiumBadge } from "./icons";

export default function AboutUs() {
  return (
    <div
      id="About"
      className="grid grid-cols-1 gap-10 md:grid-cols-2 px-6 md:px-20 mx-auto py-10 lg:py-20"
    >
      <div className="w-full h-fit grid grid-cols-2 gap-grid-gap">
        <div className="h-[512px] w-full ">
          <img
            src="/about-2.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-grid-gap h-[500px] w-full">
          <div className="w-full h-1/2">
            <img
              src="/about-1.webp"
              alt=""
              className="object-cover  h-full w-full"
            />
          </div>
          <div className="w-full h-1/2">
            <img
              src="/about-3.webp"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-y-grid-gap ">
        <h2 className="sub-heading pb-2">About Us</h2>
        <div className="w-fit h-fit flex items-center justify-center gap-0">
          <div className="w-6 h-0.5 bg-secondary" />
          <div className="w-2 h-2 bg-secondary" />
          <div className="w-6 h-0.5 bg-secondary" />
        </div>
        <h1 className="sub-heading-2">Who are we?</h1>
        <p className="paragraph-2 pt-special-gap max-w-[500px] mx-auto text-center">
          Relishly is where culinary passion meets a sophisticated atmosphere.
          We are a team of experts dedicated to crafting exceptional dining
          experiences using the freshest ingredients and world-class recipes.
          From our kitchen to your table, we ensure every detail is handled with
          elegance to create the perfect setting for your special memories.
        </p>

        <div className="w-full flex justify-center pt-grid-gap">
          <button className="button-1">Check Menu</button>
        </div>
      </div>
    </div>
  );
}
