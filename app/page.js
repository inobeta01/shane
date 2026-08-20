"use client";
import { useState } from "react";
import Link from "next/link";
import SvgAnimation from "../components/SvgAnimation";
import ThreeJsAnimation from "../components/ThreeJsAnimation";
import InteractiveStockChart from "../components/InteractiveStockChart";
import MobileTerminal from "../components/MobileTerminal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-screen h-screen overflow-hidden bg-background text-on-surface">
      
      {/* MOBILE ONLY (Termux-like Interface) */}
      <div className="md:hidden w-full h-full">
        <MobileTerminal />
      </div>

      {/* DESKTOP ONLY (Fixed Tiling Grid) */}
      <div className="hidden md:flex w-full h-full relative">
        
        {/* SideNavBar */}
        <nav className="w-64 h-full flex flex-col gap-[var(--spacing-gap-tiling)] py-[var(--spacing-gap-tiling)] bg-surface-container-lowest/80 text-secondary-fixed font-label-caps text-label-caps border-r border-outline-variant backdrop-blur-xl z-40">
          <div className="px-4 mb-6 shrink-0">
            <div className="font-headline-md text-headline-md text-primary truncate">HYPR_DEV</div>
            <div className="text-on-surface-variant/60">~/main</div>
          </div>
          <ul className="flex flex-col flex-grow overflow-y-auto scrollbar-hide">
            <li>
              <Link href="#" className="flex items-center gap-3 text-secondary-fixed-dim border-l-2 border-secondary-fixed-dim pl-4 py-2 hover:text-secondary hover:bg-surface-container-high/30 transition-all duration-75 active:translate-x-1">
                <span className="material-symbols-outlined"></span> Home
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 text-on-surface-variant/60 pl-4 py-2 hover:text-secondary hover:bg-surface-container-high/30 transition-all duration-75 active:translate-x-1">
                <span className="material-symbols-outlined"></span> Projects
              </Link>
            </li>
            <li>
              <button 
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="w-full flex items-center gap-3 text-on-surface-variant/60 pl-4 py-2 hover:text-secondary hover:bg-surface-container-high/30 transition-all duration-75 active:translate-x-1 cursor-pointer"
              >
                <span className="material-symbols-outlined"></span> Contact
              </button>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 text-on-surface-variant/60 pl-4 py-2 hover:text-secondary hover:bg-surface-container-high/30 transition-all duration-75 active:translate-x-1">
                <span className="material-symbols-outlined"></span> AI_Assist
              </Link>
            </li>
          </ul>
          <div className="mt-auto px-4 shrink-0">
            <button className="w-full border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors duration-200 py-2 rounded font-label-caps text-label-caps flex items-center justify-center gap-2">
              OPEN_COMM <span className="material-symbols-outlined text-[16px]"></span>
            </button>
          </div>
          <div className="px-4 mt-4 shrink-0">
            <Link href="#" className="flex items-center gap-3 text-on-surface-variant/60 py-2 hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-[16px]"></span> Docs
            </Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 h-full p-[var(--spacing-gap-tiling)] flex flex-col gap-[var(--spacing-gap-tiling)] overflow-hidden">
          
          {/* Top Section (Netflix-Style Split Screen) */}
          <div className="flex-[55] flex flex-row gap-[var(--spacing-gap-tiling)] min-h-0">
            
            {/* Left Section: Hero Content */}
            <div className="w-1/3 glass-panel pane-border rounded-lg p-6 lg:p-10 flex flex-col justify-center relative shadow-2xl overflow-y-auto scrollbar-hide shrink-0">
              <div className="font-code-sm text-xs text-secondary-fixed mb-4 flex items-center gap-2">
                <span className="animate-pulse w-2 h-2 rounded-full bg-secondary-fixed"></span> 
                ~ / profile / initialize
              </div>
              <h1 className="font-display-lg text-3xl lg:text-4xl xl:text-5xl text-primary mb-4 lg:mb-6 leading-tight tracking-tighter shrink-0">
                Harsh Patel<br/><span className="text-on-surface">PORTFOLIO</span>
              </h1>
              <p className="text-body-base text-sm lg:text-base text-on-surface-variant mb-6 shrink-0">
                Building high-performance infrastructure, zero-trust security layers, and scalable AI solutions. A kinetic synthesis of engineering disciplines.
              </p>
              
              <div className="flex flex-wrap gap-2 lg:gap-3 font-label-caps text-label-caps text-xs lg:text-sm text-on-surface-variant mb-6 shrink-0">
                <span className="border border-outline-variant px-2 py-1 lg:px-3 lg:py-2 rounded bg-surface/50 backdrop-blur">CyberSec</span>
                <span className="border border-outline-variant px-2 py-1 lg:px-3 lg:py-2 rounded bg-surface/50 backdrop-blur">SDE</span>
                <span className="border border-outline-variant px-2 py-1 lg:px-3 lg:py-2 rounded bg-surface/50 backdrop-blur">AI</span>
              </div>
              
             
            </div>
            
            {/* Right Section: Growing Animation Feature */}
            <div className="flex-1 glass-panel pane-border rounded-lg relative overflow-hidden group min-w-0">
              <div className="absolute top-0 left-0 w-full bg-surface-container-highest/80 border-b border-outline-variant px-4 py-2 flex items-center justify-between z-10 backdrop-blur">
                
                <div className="font-code-sm text-[12px] text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]"></span> portfolio_growth.ts
                </div>
              </div>
              
              <div className="absolute top-6 left-6 lg:top-10 lg:left-8 z-20">
                <div className="font-code-sm text-xs lg:text-sm text-on-surface-variant">Harsh Performance Yield</div>
              </div>
              
              <InteractiveStockChart />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex-[45] flex flex-row gap-[var(--spacing-gap-tiling)] min-h-0">
            
            {/* Logs of Life (Timeline Left) */}
            <div className="w-1/4 glass-panel pane-border rounded-lg flex flex-col overflow-hidden min-w-0">
              <div className="bg-surface-container-high border-b border-outline-variant px-4 py-2 font-code-sm text-[12px] text-primary flex items-center gap-2 shrink-0">
                <span className="material-symbols-outlined text-[14px]"></span> ~/logs/history.log
              </div>
              <div className="p-4 lg:p-6 flex-grow overflow-y-auto scrollbar-hide font-code-sm text-xs lg:text-sm">
                <div className="mb-4 lg:mb-6 group">
                  <div className="text-outline-variant mb-1 group-hover:text-primary transition-colors">[2023-11]</div>
                  <div className="text-on-surface border-l-2 border-primary/50 pl-3 ml-[2px]">Deployed ML Pipeline</div>
                  <div className="text-secondary-fixed-dim border-l-2 border-primary/50 pl-3 ml-[2px] mt-1 text-[10px]">&gt; success: zero-downtime</div>
                </div>
                <div className="mb-4 lg:mb-6 group">
                  <div className="text-outline-variant mb-1 group-hover:text-primary transition-colors">[2022-04]</div>
                  <div className="text-on-surface border-l-2 border-outline-variant pl-3 ml-[2px]">Secured Series B Infrastructure</div>
                  <div className="text-secondary-fixed-dim border-l-2 border-outline-variant pl-3 ml-[2px] mt-1 text-[10px]">&gt; audit: pass</div>
                </div>
                <div className="mb-4 lg:mb-6 group">
                  <div className="text-outline-variant mb-1 group-hover:text-primary transition-colors">[2020-08]</div>
                  <div className="text-on-surface border-l-2 border-outline-variant pl-3 ml-[2px]">Monolith Migration</div>
                  <div className="text-outline-variant border-l-2 border-outline-variant pl-3 ml-[2px] mt-1 text-[10px]">&gt; stack: nextjs/go/psql</div>
                </div>
              </div>
            </div>

            {/* 3D Stack Centerpiece */}
            <div className="w-2/4 relative overflow-visible flex items-center justify-center min-w-0">
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10 font-label-caps text-label-caps text-on-surface bg-surface-container-lowest/50 px-3 py-1 rounded backdrop-blur border border-outline-variant">
                CORE_ENGINE <span className="text-secondary-fixed ml-2 hidden lg:inline">_active</span>
              </div>
              <div className="w-full h-full relative">
                <ThreeJsAnimation />
                <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen hidden lg:block">
                  <SvgAnimation />
                </div>
                <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex gap-2 z-10">
                  <div className="w-1.5 h-4 lg:h-6 bg-primary-container animate-pulse rounded-full"></div>
                  <div className="w-1.5 h-4 lg:h-6 bg-primary-container animate-pulse rounded-full" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-4 lg:h-6 bg-primary-container animate-pulse rounded-full" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>

            {/* CLI Projects */}
            <div className="w-1/4 glass-panel pane-border rounded-lg flex flex-col overflow-hidden min-w-0">
              <div className="bg-surface-container-high border-b border-outline-variant px-4 py-2 font-code-sm text-[12px] text-on-surface flex items-center justify-between shrink-0">
                <span className="truncate">home@Portfolio:<br/></span>
                <span className="material-symbols-outlined text-[14px]">play_arrow</span>
              </div>
              <div className="p-3 lg:p-4 flex-grow flex flex-col justify-center gap-2 lg:gap-3 overflow-y-auto scrollbar-hide">
                <button className="w-full text-left font-code-sm text-xs lg:text-sm text-on-surface-variant bg-surface hover:bg-surface-container-highest hover:text-primary transition-all duration-200 p-2 lg:p-3 border border-transparent hover:border-primary rounded flex items-center justify-between group shadow-sm">
                  <span className="truncate">--nebula-proxy</span>
                </button>
                <button className="w-full text-left font-code-sm text-xs lg:text-sm text-on-surface-variant bg-surface hover:bg-surface-container-highest hover:text-primary transition-all duration-200 p-2 lg:p-3 border border-transparent hover:border-primary rounded flex items-center justify-between group shadow-sm">
                  <span className="truncate">--zero-trust</span>
                </button>
                <button className="w-full text-left font-code-sm text-xs lg:text-sm text-on-surface-variant bg-surface hover:bg-surface-container-highest hover:text-primary transition-all duration-200 p-2 lg:p-3 border border-transparent hover:border-primary rounded flex items-center justify-between group shadow-sm">
                  <span className="truncate">--synth-data</span>
                </button>
                <button className="w-full text-left font-code-sm text-xs lg:text-sm text-on-surface-variant bg-surface hover:bg-surface-container-highest hover:text-primary transition-all duration-200 p-2 lg:p-3 border border-transparent hover:border-primary rounded flex items-center justify-between group shadow-sm">
                  <span className="truncate">--crypto-vault</span>
                </button>
              </div>
              <div className="p-2 lg:p-4 border-t border-outline-variant bg-surface-container-lowest font-code-sm text-[10px] lg:text-xs text-outline-variant flex items-center gap-2 shrink-0">
                <span className="animate-pulse text-secondary-fixed">█</span> 
                <span className="truncate">awaiting input...</span>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer (Desktop Only inside main container or relative to flex row?) 
            It was relative to screen before. We'll add it absolute at the bottom. */}
        <footer className="absolute bottom-0 left-64 right-0 z-40 flex justify-between items-center px-6 h-8 bg-surface-container-lowest/90 text-on-surface-variant font-code-sm text-xs border-t border-outline-variant backdrop-blur-md">
          <div>© 2024 PORTFOLIO_OS [v1.0.4]</div>
          <div className="flex gap-6">
            <span className="hover:text-primary-container transition-colors duration-200">Uptime: 99.9%</span>
            <span className="hover:text-primary-container transition-colors duration-200">Latency: 24ms</span>
          </div>
        </footer>

        {/* Slide-out Contact Panel */}
        <div 
          className={`absolute top-0 right-0 bottom-8 w-80 lg:w-96 bg-surface-container-lowest/95 backdrop-blur-xl border-l border-outline-variant z-50 transform transition-transform duration-300 ease-out flex flex-col font-body-base text-on-surface shadow-2xl ${isContactOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-high/50 shrink-0">
            <div className="font-label-caps text-label-caps text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">lock</span> SECURE_COMM_LINK
            </div>
            <button 
              onClick={() => setIsContactOpen(false)}
              className="material-symbols-outlined text-outline-variant hover:text-error transition-colors"
            >
              close
            </button>
          </div>
          <div className="p-6 flex-grow flex flex-col gap-6 overflow-y-auto">
            <div>
              <label className="block font-code-sm text-xs text-on-surface-variant mb-2">TARGET_ID</label>
              <input 
                className="w-full bg-surface border border-outline-variant rounded p-3 font-code-sm text-sm text-on-surface focus:outline-none focus:border-secondary-container focus:ring-1 focus:ring-secondary-container transition-all" 
                readOnly 
                type="text" 
                value="hello@domain.com"
              />
            </div>
            <div>
              <label className="block font-code-sm text-xs text-on-surface-variant mb-2">PAYLOAD</label>
              <textarea 
                className="w-full bg-surface border border-outline-variant rounded p-3 font-code-sm text-sm text-on-surface focus:outline-none focus:border-secondary-container focus:ring-1 focus:ring-secondary-container transition-all placeholder-outline-variant resize-none" 
                placeholder="Enter transmission payload here..." 
                rows="6"
              ></textarea>
            </div>
            <button className="mt-auto border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-200 py-3 rounded font-label-caps text-label-caps w-full shadow-[0_0_10px_rgba(165,231,255,0.1)] hover:shadow-[0_0_20px_rgba(165,231,255,0.3)]">
              TRANSMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
