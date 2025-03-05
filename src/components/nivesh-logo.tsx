interface NiveshLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function NiveshLogo({
  width = 200,
  height = 80,
  className = "",
}: NiveshLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background shape */}
        <rect
          x="10"
          y="15"
          width="180"
          height="50"
          rx="25"
          fill="#E6F0FF"
          className="transition-all duration-300 hover:fill-blue-100"
        />

        {/* Decorative element */}
        <circle
          cx="35"
          cy="40"
          r="15"
          fill="#0066CC"
          className="transition-all duration-300 hover:fill-blue-600"
        />

        {/* Text */}
        <text
          x="60"
          y="48"
          fontFamily="Arial, sans-serif"
          fontSize="28"
          fontWeight="bold"
          fill="#0047AB"
          className="transition-all duration-300 hover:fill-blue-800"
        >
          NIVESH
        </text>

        {/* Underline */}
        <path
          d="M60 55 L140 55"
          stroke="#1E90FF"
          strokeWidth="3"
          strokeLinecap="round"
          className="transition-all duration-300 hover:stroke-blue-500"
        />
      </svg>
    </div>
  );
}
