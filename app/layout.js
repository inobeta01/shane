import "./globals.css";

export const metadata = {
  title: "GENERALIST_ENG@PORTFOLIO | Dynamic Generalist Engineering Nexus",
  description:
    "A high-performance engineer portfolio inspired by Hyprland tiling window managers. Cyber-minimalist design featuring CyberSec, SDE, and AI specializations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
