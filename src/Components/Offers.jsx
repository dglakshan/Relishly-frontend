export default function Offers() {
  return (
    <div
      id="Offers"
      className="w-full px-6 md:px-20 mx-auto py-10 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-y-special-gap bg-primary-3"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src="/breakfast.webp"
          alt=""
          className="w-[300px] h-[375px] object-cover"
        />

        <h3 className="sub-heading-4">Breakfast</h3>
        <a href="#Menu" className="button-3">
          MENU
        </a>
      </div>
      <div className="w-full flex flex-col items-center justify-center order-first md:order-0">
        <div className="flex flex-col items-center justify-center gap-y-special-gap">
          <div className="w-full h-fit flex flex-col items-center justify-center gap-y-12">
            <h2 className="sub-heading">Enjoy Meals</h2>
            <h1 className="sub-heading-2">We Offer Top Notch</h1>
            <p className="text-center paragraph-2">
              Savor the perfect blend of fresh ingredients and expert
              craftsmanship. Every dish is prepared to deliver an unforgettable
              flavor experience.
            </p>
          </div>
          <img
            src="/Offer-4.webp"
            alt=""
            className="w-[300px] h-[375px] object-cover shadow-2xs"
          />
        </div>
        <h3 className="sub-heading-4">Appeetizers</h3>
        <a href="#Menu" className="button-3">
          MENU
        </a>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src="/drinks.webp"
          alt=""
          className="w-[300px] h-[375px] object-cover"
        />
        <h3 className="sub-heading-4">Drinks</h3>
        <a href="#Menu" className="button-3">
          MENU
        </a>
      </div>
    </div>
  );
}
