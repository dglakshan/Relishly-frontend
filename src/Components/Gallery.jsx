export default function Gallery() {
  return (
    <div
      id="Gallery"
      className=" w-full h-fit flex flex-col items-center justify-start px-6 md:px-20 mx-auto py-10 lg:py-20"
    >
      <div className="h-fit  flex flex-col items-center justify-center gap-y-special-gap">
        <h2 className="sub-heading">Gallery</h2>

        <h1 className="sub-heading-2 text-center">Cherished Moments</h1>
      </div>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-grid-gap z-50 pt-20">
        <div className="flex flex-col gap-grid-gap ">
          <img
            src="/gallery-5.webp"
            alt=""
            className="object-cover rounded-gallery-image w-full h-auto md:h-[200px]"
          />
          <img
            src="/gallery-7.webp"
            alt=""
            className=" top-28 left-20 rounded-gallery-image w-full h-auto md:h-[400px]"
          />
        </div>
        <div className="flex flex-col gap-grid-gap">
          <img
            src="/gallery-9.webp"
            alt=""
            className="object-cover rounded-gallery-image w-full h-auto md:h-[300px]"
          />

          <img
            src="/gallery-3.webp"
            alt=""
            className="object-cover rounded-gallery-image w-full h-auto md:h-[300px]"
          />
        </div>
        <div className="flex flex-col gap-grid-gap">
          <img
            src="/gallery-2.webp"
            alt=""
            className="object-cover rounded-gallery-image w-full h-auto md:h-[400px]"
          />

          <img
            src="/gallery-6.webp"
            alt=""
            className="object-cover rounded-gallery-image w-full h-auto md:h-[200px]"
          />
        </div>
      </div>
    </div>
  );
}
