export default function SvgAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#00d2ff', stopOpacity: 0.2 }}></stop>
            <stop offset="100%" style={{ stopColor: '#00d2ff', stopOpacity: 1 }}></stop>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur result="coloredBlur" stdDeviation="3"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="coloredBlur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        {/* Background Grid */}
        <path d="M 0 400 L 800 400" stroke="#1c1b1d" strokeWidth="1"></path>
        <path d="M 0 300 L 800 300" stroke="#1c1b1d" strokeWidth="1"></path>
        <path d="M 0 200 L 800 200" stroke="#1c1b1d" strokeWidth="1"></path>
        <path d="M 0 100 L 800 100" stroke="#1c1b1d" strokeWidth="1"></path>
        {/* Rising Graph Line */}
        <path
          d="M 50 350 Q 150 320, 250 340 T 450 200 T 650 150 T 750 50"
          fill="none"
          filter="url(#glow)"
          id="graphLine"
          stroke="url(#lineGradient)"
          strokeLinecap="round"
          strokeWidth="4"
        >
          <animate attributeName="stroke-dasharray" dur="3s" fill="freeze" from="0, 1000" to="1000, 0"></animate>
        </path>
        {/* Pulsing End Point */}
        <circle cx="750" cy="50" fill="#00d2ff" r="6">
          <animate attributeName="r" dur="1s" repeatCount="indefinite" values="6;9;6"></animate>
          <animate attributeName="opacity" dur="1s" repeatCount="indefinite" values="1;0.5;1"></animate>
        </circle>
      </svg>
    </div>
  );
}
