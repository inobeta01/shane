export default function StockAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-surface-container-lowest">
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="stockGradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c3f400', stopOpacity: 0.4 }}></stop>
            <stop offset="100%" style={{ stopColor: '#c3f400', stopOpacity: 0 }}></stop>
          </linearGradient>
          <filter id="stockGlow">
            <feGaussianBlur result="coloredBlur" stdDeviation="4"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="coloredBlur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background Grid - more subtle */}
        <path d="M 0 350 L 800 350" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
        <path d="M 0 250 L 800 250" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
        <path d="M 0 150 L 800 150" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
        <path d="M 0 50 L 800 50" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
        
        <path d="M 200 0 L 200 400" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
        <path d="M 400 0 L 400 400" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
        <path d="M 600 0 L 600 400" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>

        {/* The Growing Stock Fill Area */}
        <path
          d="M 0 400 L 0 350 L 100 320 L 150 340 L 250 220 L 300 260 L 450 150 L 500 180 L 650 80 L 750 40 L 800 20 L 800 400 Z"
          fill="url(#stockGradient)"
        >
          <animate 
            attributeName="d" 
            dur="4s" 
            fill="freeze" 
            values="
              M 0 400 L 0 400 L 100 400 L 150 400 L 250 400 L 300 400 L 450 400 L 500 400 L 650 400 L 750 400 L 800 400 L 800 400 Z;
              M 0 400 L 0 350 L 100 320 L 150 340 L 250 220 L 300 260 L 450 150 L 500 180 L 650 80 L 750 40 L 800 20 L 800 400 Z" 
            calcMode="spline" 
            keyTimes="0; 1" 
            keySplines="0.25 0.1 0.25 1"
          />
        </path>

        {/* The Growing Stock Line */}
        <path
          d="M 0 350 L 100 320 L 150 340 L 250 220 L 300 260 L 450 150 L 500 180 L 650 80 L 750 40 L 800 20"
          fill="none"
          filter="url(#stockGlow)"
          stroke="#c3f400"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          strokeDasharray="2000"
          strokeDashoffset="2000"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            dur="4s" 
            fill="freeze" 
            from="2000" 
            to="0"
            calcMode="spline" 
            keyTimes="0; 1" 
            keySplines="0.25 0.1 0.25 1"
          />
        </path>
        
        {/* Animated Candles (Bullish) */}
        <g stroke="#c3f400" strokeWidth="2">
          {/* Candle 1 */}
          <line x1="100" y1="360" x2="100" y2="300" opacity="0">
            <animate attributeName="opacity" dur="0.1s" begin="0.5s" fill="freeze" to="1"/>
          </line>
          <rect x="96" y="320" width="8" height="30" fill="#c3f400" opacity="0">
            <animate attributeName="opacity" dur="0.1s" begin="0.5s" fill="freeze" to="1"/>
          </rect>
          
          {/* Candle 2 */}
          <line x1="250" y1="280" x2="250" y2="200" opacity="0">
            <animate attributeName="opacity" dur="0.1s" begin="1.2s" fill="freeze" to="1"/>
          </line>
          <rect x="246" y="220" width="8" height="40" fill="#c3f400" opacity="0">
            <animate attributeName="opacity" dur="0.1s" begin="1.2s" fill="freeze" to="1"/>
          </rect>

          {/* Candle 3 */}
          <line x1="450" y1="200" x2="450" y2="120" opacity="0">
            <animate attributeName="opacity" dur="0.1s" begin="2.2s" fill="freeze" to="1"/>
          </line>
          <rect x="446" y="150" width="8" height="35" fill="#c3f400" opacity="0">
            <animate attributeName="opacity" dur="0.1s" begin="2.2s" fill="freeze" to="1"/>
          </rect>

          {/* Candle 4 */}
          <line x1="650" y1="130" x2="650" y2="50" opacity="0">
            <animate attributeName="opacity" dur="0.1s" begin="3.2s" fill="freeze" to="1"/>
          </line>
          <rect x="646" y="80" width="8" height="40" fill="#c3f400" opacity="0">
            <animate attributeName="opacity" dur="0.1s" begin="3.2s" fill="freeze" to="1"/>
          </rect>
        </g>
        
        {/* Pulsing Target Point */}
        <circle cx="800" cy="20" fill="#ffffff" r="6" filter="url(#stockGlow)">
          <animate attributeName="opacity" dur="4s" values="0; 0; 0; 1" keyTimes="0; 0.8; 0.99; 1" fill="freeze" />
          <animate attributeName="r" dur="2s" begin="4s" repeatCount="indefinite" values="6;10;6"></animate>
        </circle>
      </svg>
    </div>
  );
}
