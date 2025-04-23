import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// sm: 640px md: 768 lg: 1024px xl: 1280px 
export default function Home() {
  return (
    <div className="light">
      <header className="footer-container
      h-[80px] 
      lg:h-[150px]">
        box 1
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}
