export default function MenuItemCart({ image, heading, price, description }) {
  return (
    <div className="w-full h-auto flex items-center justify-center gap-x-2 md:gap-x-4">
      <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] shrink-0 rounded-menu-image overflow-hidden">
        <img
          src={image}
          alt={heading}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex-1 flex flex-col gap-y-1">
        <div className="flex items-baseline justify-between gap-x-2">
          <h2 className="sub-heading-6 font-bold truncate bg-primary-2 px-2 rounded-sm max-w-[60%]">
            {heading}
          </h2>

          <div className="hidden sm:block flex-1  border-b border-dotted border-dark-text mb-1" />

          <div className="sub-heading-7 font-semibold whitespace-nowrap shrink-0">
            {price}
          </div>
        </div>
        <p className="paragraph-2 text-sm opacity-80 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
