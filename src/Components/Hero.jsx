export default function Hero() {
  return (
    <div
      id="Home"
      className="relative w-full min-h-[698px] bg-center bg-cover flex items-center justify-center px-6 md:px-20 mx-auto py-10 lg:py-20 z-0"
      style={{ backgroundImage: `url("/Hero1.webp")` }}
    >
      <div className="absolute top-0 left-0 bg-black/60 w-full h-full z-10" />

      <div className="relative  max-w-[800px] text-center z-50">
        <h2 className="sub-heading ">Welcone to Relishly</h2>
        <h1 className="main-heading pt-grid-gap">
          Where Flavor Truly
          <br />
          Meets <span className="text-primary">Elegance</span>
        </h1>
        <p className="paragraph-2 pt-4">
          Experience unforgettable dining with rich taste and warm ambiance.
          Crafted with passion using the finest and freshest ingredients. Every
          dish is designed to delight your senses and elevate your mood. Join us
          for a journey of flavor, comfort, and memorable moments.
        </p>
        <div className="w-full flex items-center justify-center gap-grid-gap font-bold pt-special-gap">
          <button className="text-base button-1 ">Explore more</button>
          <button className="text-base button-2 ">Order online</button>
        </div>
      </div>
    </div>
  );
}
