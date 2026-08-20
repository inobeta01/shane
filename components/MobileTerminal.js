"use client";
import { useState, useRef, useEffect } from "react";

export default function MobileTerminal() {
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to GENERALIST_ENG@PORTFOLIO" },
    { type: "system", text: "System initialized. Type 'help' for available commands." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let response = [];
    switch (cmd) {
      case "help":
        response = [
          { type: "info", text: "Available commands:" },
          { type: "info", text: "  about    - View profile summary" },
          { type: "info", text: "  projects - List deployed systems" },
          { type: "info", text: "  skills   - View technical stack" },
          { type: "info", text: "  contact  - Open secure comm link" },
          { type: "info", text: "  clear    - Clear terminal output" },
        ];
        break;
      case "about":
        response = [
          { type: "info", text: "> GENERALIST_ENG" },
          { type: "info", text: "> Deploying high-performance infrastructure, zero-trust security layers, and scalable AI solutions." },
        ];
        break;
      case "projects":
        response = [
          { type: "info", text: "[1] --nebula-proxy (Network Tool)" },
          { type: "info", text: "[2] --zero-trust-net (Security)" },
          { type: "info", text: "[3] --synth-data-gen (AI Pipeline)" },
          { type: "info", text: "[4] --crypto-vault (Web3 Security)" },
        ];
        break;
      case "skills":
        response = [
          { type: "info", text: "CyberSec | Software Engineering | AI/ML | Infrastructure" },
        ];
        break;
      case "contact":
        response = [
          { type: "info", text: "Initiating secure comm link..." },
          { type: "info", text: "Target ID: hello@domain.com" },
          { type: "info", text: "Please use your standard email client to transmit payload." },
        ];
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = [{ type: "error", text: `bash: ${cmd}: command not found` }];
    }

    setHistory((prev) => [
      ...prev,
      { type: "user", text: `home@Portfolio:~$ ${input}` },
      ...response,
    ]);
    setInput("");
  };

  return (
    <div 
      className="w-full h-full bg-black text-[#c3f400] font-code-sm text-sm p-4 overflow-y-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex flex-col gap-1 pb-4">
        {history.map((line, i) => (
          <div 
            key={i} 
            className={`${line.type === 'error' ? 'text-red-400' : line.type === 'user' ? 'text-white' : 'text-[#c3f400]'}`}
          >
            {line.text}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
          <span className="text-white">home@Portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent outline-none text-[#c3f400]"
            autoFocus
            autoCapitalize="none"
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>
      <div ref={terminalEndRef} />
    </div>
  );
}
