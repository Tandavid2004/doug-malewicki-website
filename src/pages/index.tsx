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
// sm: Ipad
// xl: mac and pc
export default function Home() {
  return (
    <div className="light">
      <header className="footer-container
      h-[100px] pl-[5px] pr-[5px]
      sm:h-[130px] sm:pl-[25px] sm:pr-[25px]
      xl:h-[150px] xl:pl-[50px] xl:pr-[50px]">
        <div className="flex flex-1 items-center">drop-down-menu</div>
        <div className="flex flex-4 justify-center flex-col">
          <div className="flex justify-center items-end
          text-4xl flex-1
          sm:text-6xl
          xl:text-7xl xl:flex-2">
            Inventor Doug
          </div>
          <nav className="flex justify-center
          flex-1 
          sm:flex-[1.3]
          xl:flex-[1.7]">
            <ul className="bg-[var(--bg-color)] flex flex-row  rounded-[25px] overflow:hidden
               text-base mt-[6px] mb-[6px] w-[95%]
               sm:text-xl sm:w-[95%] sm:mt-[20px] sm:mb-[20x]
               xl:text-3xl xl:w-[60%] xl:mt-[10px] xl:mb-[10px]">
              <li className="flex items-center justify-center flex-1 nav-bar rounded-l-[25px]">
                <a href="#">
                  Fitness
                </a>
              </li>
              <li className="flex items-center justify-center flex-1 nav-bar">
                <a href="#">
                  Inventions
                </a>
              </li>
              <li className="flex items-center justify-center flex-1 nav-bar">
                <a href="#">
                  Books
                </a>
              </li>
              <li className="flex items-center justify-center flex-1 nav-bar rounded-r-[25px]">
                <a href="#">
                  Games
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-1  justify-end items-center">night-mode</div>
      </header>
      <main>
      </main>
      <footer>

      </footer>
    </div>
  );
}
