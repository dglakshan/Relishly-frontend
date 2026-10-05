export default function MenuItemCart({ image, heading, price, description }) {
  return (
    <div className="w-full h-auto flex items-center justify-start gap-x-3 md:gap-x-4 py-2 border-b border-primary-2/10">
      <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] shrink-0 rounded-menu-image overflow-hidden">
        <img
          src={image}
          alt={heading}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex-1 flex flex-col gap-y-1 min-w-0">
        <div className="flex items-center w-full">
          <h2 className="sub-heading-6 font-bold truncate bg-primary-2 px-2 rounded-sm shrink-1 min-w-0 max-w-[75%]">
            {heading}
          </h2>

          <div className="hidden sm:block flex-1 border-b border-dotted border-dark-text/30 mx-2 mb-1" />

          <div className="sub-heading-7 font-semibold whitespace-nowrap shrink-0 ml-auto pl-2 text-secondary">
            {price}
          </div>
        </div>

        <p className="paragraph-2 text-xs md:text-sm opacity-80 line-clamp-2 leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
}
