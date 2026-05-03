export const DishIcon = ({
  size = 100,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Plate Curve */}
      <path
        d="M373.8 456.1C333.9 479.3 287.4 491.5 240 491.5C108.6 491.5 2.1 385 2.1 253.6C2.1 122.2 108.6 15.7 240 15.7C287.4 15.7 333.9 27.9 373.8 51.1"
        stroke={color}
        strokeWidth="42"
        strokeLinecap="round"
      />

      {/* Inner Plate Curve */}
      <path
        d="M308.1 113.8C287.4 103.8 264.2 98.6 240 98.6C154.4 98.6 85 168 85 253.6C85 339.2 154.4 408.6 240 408.6C264.2 408.6 287.4 403.4 308.1 393.4"
        stroke={color}
        strokeWidth="42"
        strokeLinecap="round"
      />

      {/* Fork/Spoon Shape */}
      <path
        d="M428.6 21.1V126.1C428.6 156.4 404 181 373.7 181C343.4 181 318.8 156.4 318.8 126.1V21.1"
        stroke={color}
        strokeWidth="42"
        strokeLinecap="round"
      />
      <path
        d="M373.7 21.1V73.7"
        stroke={color}
        strokeWidth="42"
        strokeLinecap="round"
      />

      {/* Knife/Handle Shape */}
      <path
        d="M428.6 245.5V491.5"
        stroke={color}
        strokeWidth="42"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ServiceIcon = ({
  size = 100,
  color = "#f97316",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="256" cy="256" r="256" fill={color} />

      {/* Fork */}
      <path
        d="M214.3 147.2V441.9H249.7V147.2C249.7 104.1 232 75.3 214.3 75.3C196.6 75.3 178.9 104.1 178.9 147.2V323.8H186.2V147.2M186.2 75.3V147.2M242.4 75.3V147.2"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
        fill="white"
      />

      {/* Knife */}
      <path
        d="M293.1 75.3V441.9H328.5V147.2C328.5 75.3 293.1 75.3 293.1 75.3Z"
        stroke="white"
        strokeWidth="12"
        strokeLinejoin="round"
        fill="white"
      />
    </svg>
  );
};

export const ReservationIcon = ({
  size = 60,
  color = "currentColor",
  strokeWidth = 1.5,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="M21 11.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
    <circle cx="18" cy="18" r="4" />
    <path d="M16 18l1.5 1.5L20 17" />
  </svg>
);

export const CalendarCheckIcon = ({
  size = 60,
  color = "currentColor",
  strokeWidth = 1.5,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M9 16l2 2 4-4" />
  </svg>
);

export const DeliveryIcon = ({ size = 60, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
    <line x1="3" y1="6" x2="1" y2="6"></line>
    <line x1="3" y1="10" x2="1" y2="10"></line>
  </svg>
);

export const FreshIcon = ({ size = 60, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 20A7 7 0 0 1 11 6a7 7 0 0 1 7 7v1a7 7 0 0 1-7 6z"></path>
    <path d="M11 10a3 3 0 0 1 3 3"></path>
    <path d="M7 21l1.5-1.5"></path>
    <path d="M17 11a5 5 0 0 0-5-5"></path>
    <circle cx="18" cy="5" r="3"></circle>
    <path d="M18 5l-2 2"></path>
  </svg>
);

export const PremiumBadge = ({ size = 150, color = "#F97316" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wavy Circle - Color can be changed via prop */}
      <path
        d="M100 10L109.1 19.3L122.1 16.5L128.5 28.1L141.2 29.5L144 42.4L155.3 49.3L154 62.4L162.2 72.8L157 85L161.4 97.5L152.8 107.5L153.3 120.6L142 127.3L138.8 140.1L126.1 142.8L119.5 154.2L106.8 153L100 160L93.2 153L80.5 154.2L73.9 142.8L61.2 140.1L58 127.3L46.7 120.6L47.2 107.5L38.6 97.5L43 85L37.8 72.8L46 62.4L44.7 49.3L56 42.4L58.8 29.5L71.5 28.1L77.9 16.5L90.9 19.3L100 10Z"
        fill={color}
      />

      {/* Crown */}
      <path
        d="M100 45L108 55L120 50L115 65H85L80 50L92 55L100 45Z"
        fill="white"
      />

      {/* Lines */}
      <rect x="65" y="72" width="70" height="1.5" fill="white" />
      <rect x="65" y="105" width="70" height="1.5" fill="white" />

      {/* Text */}
      <text
        x="100"
        y="88"
        fill="white"
        fontFamily="Arial"
        fontWeight="bold"
        fontSize="13"
        textAnchor="middle"
      >
        PREMIUM
      </text>
      <text
        x="100"
        y="101"
        fill="white"
        fontFamily="Arial"
        fontWeight="bold"
        fontSize="13"
        textAnchor="middle"
      >
        QUALITY
      </text>

      {/* Stars */}
      <polygon
        points="100,112 103,120 111,120 105,125 107,133 100,128 93,133 95,125 89,120 97,120"
        fill="white"
      />
      <polygon
        points="80,115 82,121 88,121 84,125 85,131 80,127 75,131 76,125 72,121 78,121"
        fill="white"
        opacity="0.8"
      />
      <polygon
        points="120,115 122,121 128,121 124,125 125,131 120,127 115,131 116,125 112,121 118,121"
        fill="white"
        opacity="0.8"
      />
    </svg>
  );
};

export const ExperienceBadge = ({ size = 150, color = "#F97316" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wavy Circle Background */}
      <path
        d="M100 10L109.1 19.3L122.1 16.5L128.5 28.1L141.2 29.5L144 42.4L155.3 49.3L154 62.4L162.2 72.8L157 85L161.4 97.5L152.8 107.5L153.3 120.6L142 127.3L138.8 140.1L126.1 142.8L119.5 154.2L106.8 153L100 160L93.2 153L80.5 154.2L73.9 142.8L61.2 140.1L58 127.3L46.7 120.6L47.2 107.5L38.6 97.5L43 85L37.8 72.8L46 62.4L44.7 49.3L56 42.4L58.8 29.5L71.5 28.1L77.9 16.5L90.9 19.3L100 10Z"
        fill={color}
      />

      {/* Crown Icon */}
      <path
        d="M100 42L108 52L120 47L115 62H85L80 47L92 52L100 42Z"
        fill="white"
      />

      {/* Separator Lines */}
      <rect
        x="60"
        y="70"
        width="80"
        height="1.2"
        fill="white"
        fillOpacity="0.8"
      />
      <rect
        x="60"
        y="108"
        width="80"
        height="1.2"
        fill="white"
        fillOpacity="0.8"
      />

      {/* Experience Text */}
      <text
        x="100"
        y="88"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontWeight="900"
        fontSize="20"
        textAnchor="middle"
      >
        20+
      </text>
      <text
        x="100"
        y="102"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="11"
        textAnchor="middle"
        letterSpacing="1"
      >
        YEARS
      </text>
      <text
        x="100"
        y="122"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        fontSize="9"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        EXPERIENCE
      </text>

      {/* Decorative Stars */}
      <polygon
        points="100,132 103,140 111,140 105,145 107,153 100,148 93,153 95,145 89,140 97,140"
        fill="white"
      />
    </svg>
  );
};

// Left Quote Icon
export const QuoteLeftIcon = ({
  size = 20,
  color = "currentColor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 448 512"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z" />
  </svg>
);

// Right Quote Icon
export const QuoteRightIcon = ({
  size = 20,
  color = "currentColor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 448 512"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v104zm-256 0c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v104z" />
  </svg>
);

export const MenuIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const CloseIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
