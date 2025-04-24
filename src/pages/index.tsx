import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import dougsProfilePic from "../images/doug-malewicki's-profile-pic.jpg"
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
      <header className="footer-container sticky top-0 z-50
      h-[100px] pl-[5px] pr-[5px]
      sm:h-[130px] sm:pl-[25px] sm:pr-[25px]
      xl:h-[140px] xl:pl-[50px] xl:pr-[50px]">
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
          sm:flex-[1.5]
          xl:flex-[1.4]">
            <ul className="bg-[var(--bg-color)] flex flex-row  rounded-[25px] overflow:hidden
               text-base mt-[6px] mb-[6px] w-[95%]
               sm:text-xl sm:w-[95%] sm:mt-[20px] sm:mb-[20x]
               xl:text-2xl xl:w-[60%] xl:mt-[10px] xl:mb-[10px]">
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
        <div className="flex flex-1  justify-end items-center">n-mode-l</div>
      </header>
      <main className="main-container">
        <div className="media-block flex-col items-center
        h-[80vh] w-[93%] mt-[16px]
        sm:h-[45vh] sm:w-[94%] sm:mt-[30px] sm:flex-row
        xl:h-[70vh] xl:flex-row xl:mt-[65px] xl:w-[92%]
        min-h-0">
          <div className="flex flex-1 
          p-[20px]
          xl:justify-center xl:flex-[0.7] xl:p-[0px]">
          <Image
            className="rounded-[25px] w-[370px] 
            sm:w-[400px]
            xl:w-[540px]"
            src={dougsProfilePic}
            alt="Doug Malewicki Profile Picture"
            width={400}
            height={350}
          />
          </div>
          <div className="flex flex-1 h-full overflow-auto flex-col
            pb-[10px]
            sm:max-h-[41vh] sm:pt-[10px] 
            xl:max-h-[100vh] xl:pr-[40px]">
            <h1 className="flex justify-center
            text-[30px]
            sm:text-[32px]
            xl:text-[60px]
            3xl:text-[120px]">
              Who is Inventor Doug?
            </h1>
            <p className="text-[20px] pl-[10px] pr-[10px]
            sm:text-[22px]
            xl:text-[26px]">
              <b>Inventor/Engineer Doug Malewicki</b> is an Aeronautical & Astronautical Engineer with a MS from Stanford University. Doug holds patents on inventions in the diversified fields of aerospace, medicine, transportation and toys.
            </p>
            <p className="text-[20px] pl-[10px] pr-[10px]
            sm:text-[22px]
            xl:text-[26px]">
              <b>Doug is also an avid trail runner, cyclist and backpacker.</b> Doug strongly believes exercise is a very important part of staying healthy in his geezer years. He has been running since 1972 and loving trail running after discovering it 1998. He has cycled the 540 miles from San Francisco to LA down beautiful Pacific Coast Highway 1 seven times since 1982. Doug did 25 years in a row of week long backpack trips every summer in the Sierra's since 1982. He has trekked up to the summit of Mount Whitney (14,496 feet elevation - highest spot in the contiguous 48 states) 7 times since 1995. Last time was 2019.
            </p>
          </div>
        </div>

        <div className="bg-[blue] ">
          box 2
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}
