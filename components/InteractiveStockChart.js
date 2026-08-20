"use client";
import { useState, useRef, useEffect } from "react";

const HISTORY_EVENTS = [
  { id: "ev-1", date: "2018-05", title: "B.S. Computer Science", details: "Completed foundational studies with honors. Built core competencies in algorithms, distributed systems, and low-level programming.", x: 150, y: 340, price: "$20.45" },
  { id: "ev-2", date: "2020-08", title: "Monolith Migration", details: "Successfully migrated a legacy monolith architecture to a decoupled NextJS, Go, and PostgreSQL stack. Improved latency by 40%.", x: 300, y: 260, price: "$85.10" },
  { id: "ev-3", date: "2022-04", title: "Secured Series B Infrastructure", details: "Led the rollout of a zero-trust network architecture. Passed external independent security audits with zero critical findings.", x: 500, y: 180, price: "$210.33" },
  { id: "ev-4", date: "2023-11", title: "Deployed ML Pipeline", details: "Architected and deployed a highly available machine learning pipeline with zero-downtime blue/green deployment strategy.", x: 650, y: 80, price: "$420.69" }
];

export default function InteractiveStockChart() {
  const [viewBox, setViewBox] = useState({ x: 0, y: 0, w: 800, h: 400 });
  const [activeEvent, setActiveEvent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const svgRef = useRef(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const constrainViewBox = (newX, newY, newW, newH) => {
    let w = newW > 800 ? 800 : (newW < 200 ? 200 : newW);
    let h = newH > 400 ? 400 : (newH < 100 ? 100 : newH);
    let x = newX;
    let y = newY;
    
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + w > 800) x = 800 - w;
    if (y + h > 400) y = 400 - h;
    
    return { x, y, w, h };
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = 1.1;
    const direction = e.deltaY > 0 ? 1 : -1;
    
    const newW = direction > 0 ? viewBox.w * zoomFactor : viewBox.w / zoomFactor;
    const newH = direction > 0 ? viewBox.h * zoomFactor : viewBox.h / zoomFactor;
    
    const dw = viewBox.w - newW;
    const dh = viewBox.h - newH;

    setViewBox(constrainViewBox(
      viewBox.x + dw / 2,
      viewBox.y + dh / 2,
      newW,
      newH
    ));
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    
    // Scale pan speed based on zoom level
    const panSpeed = viewBox.w / 800;

    setViewBox(prev => constrainViewBox(
      prev.x - dx * panSpeed,
      prev.y - dy * panSpeed,
      prev.w,
      prev.h
    ));
    
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleZoom = (inOut) => {
    const factor = inOut === 'in' ? 1/1.2 : 1.2;
    const newW = viewBox.w * factor;
    const newH = viewBox.h * factor;
    setViewBox(constrainViewBox(
      viewBox.x + (viewBox.w - newW) / 2,
      viewBox.y + (viewBox.h - newH) / 2,
      newW,
      newH
    ));
  };

  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-surface-container-lowest flex flex-col">
      {/* Controls Overlay */}
      <div className="absolute top-12 right-4 z-30 flex gap-2">
        <button onClick={() => handleZoom('in')} className="w-8 h-8 flex items-center justify-center bg-surface border border-outline-variant rounded hover:bg-surface-container-high hover:border-primary text-on-surface transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[16px]">zoom_in</span>
        </button>
        <button onClick={() => handleZoom('out')} className="w-8 h-8 flex items-center justify-center bg-surface border border-outline-variant rounded hover:bg-surface-container-high hover:border-primary text-on-surface transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[16px]">zoom_out</span>
        </button>
        <button onClick={() => setViewBox({ x: 0, y: 0, w: 800, h: 400 })} className="w-8 h-8 flex items-center justify-center bg-surface border border-outline-variant rounded hover:bg-surface-container-high hover:border-primary text-on-surface transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[16px]">restart_alt</span>
        </button>
      </div>

      {/* SVG Interactive Chart */}
      <div 
        className="flex-grow w-full h-full cursor-grab active:cursor-grabbing overflow-hidden relative"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg 
          viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`} 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#c3f400" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c3f400" stopOpacity="0" />
            </linearGradient>
            <filter id="eventGlow">
              <feGaussianBlur result="coloredBlur" stdDeviation="4"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          
          {/* Grid Lines */}
          <path d="M 0 350 L 800 350 M 0 250 L 800 250 M 0 150 L 800 150 M 0 50 L 800 50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <path d="M 200 0 L 200 400 M 400 0 L 400 400 M 600 0 L 600 400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

          {/* Animated Fill Area */}
          <path
            d="M 0 400 L 0 350 L 100 320 L 150 340 L 250 220 L 300 260 L 450 150 L 500 180 L 650 80 L 750 40 L 800 20 L 800 400 Z"
            fill="url(#chartGradient)"
            className={`transition-all duration-1000 ease-out origin-bottom ${isLoaded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
            style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }}
          />

          {/* Animated Line */}
          <path
            d="M 0 350 L 100 320 L 150 340 L 250 220 L 300 260 L 450 150 L 500 180 L 650 80 L 750 40 L 800 20"
            fill="none"
            stroke="#c3f400"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            strokeDasharray="2000"
            strokeDashoffset={isLoaded ? "0" : "2000"}
            className="transition-all duration-2000 ease-out"
          />

          {/* Event Nodes */}
          {HISTORY_EVENTS.map((ev, i) => (
            <g 
              key={ev.id} 
              className={`transition-all duration-700 ease-out cursor-pointer hover:opacity-80`}
              style={{ transitionDelay: `${1000 + i * 300}ms`, opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'scale(1)' : 'scale(0)' }}
              transformOrigin={`${ev.x} ${ev.y}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveEvent(ev);
              }}
            >
              {/* Vertical dotted line */}
              <line x1={ev.x} y1={ev.y} x2={ev.x} y2="400" stroke="rgba(195,244,0,0.3)" strokeWidth="2" strokeDasharray="4 4" />
              {/* Outer pulse */}
              <circle cx={ev.x} cy={ev.y} r="12" fill="rgba(195,244,0,0.2)">
                {activeEvent?.id === ev.id && (
                  <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="12;20;12" />
                )}
              </circle>
              {/* Inner node */}
              <circle cx={ev.x} cy={ev.y} r="6" fill="#ffffff" filter="url(#eventGlow)" />
              {/* Label */}
              <text x={ev.x} y={ev.y - 20} fill="#bbc9cf" fontSize="12" fontFamily="monospace" textAnchor="middle">
                {ev.date}
              </text>
            </g>
          ))}
        </svg>

        {/* Dialog Box (HTML Overlay) */}
        {activeEvent && (
          <div 
            className="absolute z-40 glass-panel pane-border rounded shadow-2xl p-4 flex flex-col gap-2 animate-in fade-in zoom-in duration-200"
            style={{
              // Position roughly relative to viewport center so it's always visible regardless of svg pan/zoom,
              // or just fixed in center of the container
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '280px'
            }}
          >
            <div className="flex justify-between items-start border-b border-outline-variant pb-2 mb-1">
              <div>
                <div className="font-code-sm text-[10px] text-secondary-fixed">{activeEvent.date}</div>
                <div className="font-headline-md text-sm text-primary font-bold">{activeEvent.title}</div>
              </div>
              <button 
                onClick={() => setActiveEvent(null)}
                className="material-symbols-outlined text-[16px] text-outline-variant hover:text-error transition-colors cursor-pointer"
              >
                close
              </button>
            </div>
            <div className="font-body-base text-xs text-on-surface-variant leading-relaxed">
              {activeEvent.details}
            </div>
            <div className="mt-2 pt-2 border-t border-outline-variant flex justify-between items-center font-code-sm text-xs">
              <span className="text-outline-variant">Implied Value:</span>
              <span className="text-secondary-fixed font-bold">{activeEvent.price}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
