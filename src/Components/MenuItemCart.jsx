export default function MenuItemCart({ image, heading, price, description }) {
  return (
    <div className="w-full h-auto flex items-center justify-start gap-x-4 rounded-special py-2 px-4.5 ">
      <div className="w-[80px] h-[80px] shrink-0 rounded-menu-image overflow-hidden">
        <img
          src={image}
          alt={heading}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex-1 flex flex-col gap-y-1">
        <div className="flex items-baseline justify-between gap-x-2">
          <h2 className="sub-heading-6 font-bold truncate bg-primary-2 px-2 rounded-sm">
            {heading}
          </h2>

          <div className="flex-1 border-b border-dotted border-dark-text mb-1" />

          <div className="sub-heading-7 font-semibold whitespace-nowrap">
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
