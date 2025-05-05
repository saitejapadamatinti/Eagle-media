import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import CtaButton from "./CtaButton";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg relative secondary-font">
      {/* logo */}
      <a
        href="/Marketing-Website/"
        className="lg:text-3xl text-2xl tracking-wide font-light text-[#7A6960]"
      >
        {/* <img src={logo} alt="logo" className="w-10 h-10" /> */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="80" 
          height="80" 
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd"
          }} 
          viewBox="0 0 835.79 611.59"
        >
          <defs>
            <linearGradient id="id0" gradientUnits="objectBoundingBox" x1="53.612%" y1="0%" x2="46.388%" y2="116.854%">
              <stop offset="0" style={{stopOpacity: 1, stopColor: "#00b1e1"}}/>
              <stop offset="1" style={{stopOpacity: 1, stopColor: "#004291"}}/>
            </linearGradient>
            <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="585.16" y1="8.47" x2="298.56" y2="560.27">
              <stop offset="0" style={{stopOpacity: 1, stopColor: "#0ab3e2"}}/>
              <stop offset="1" style={{stopOpacity: 1, stopColor: "#001872"}}/>
            </linearGradient>
            <linearGradient id="id2" gradientUnits="userSpaceOnUse" xlinkHref="#id1" x1="332.23" y1="485.87" x2="270.95" y2="611.23"/>
            <style>
              {`
                @font-face {
                  font-family: "Lucida Sans";
                  font-variant: normal;
                  font-style: italic;
                  font-weight: 600;
                  src: url(#FontID0) format(svg);
                }
                .fil2 { fill: url(#id0); }
                .fnt0 {
                  font-style: italic;
                  font-weight: 600;
                  font-size: 90.27px;
                  font-family: "Lucida Sans";
                }
              `}
            </style>
            <font id="FontID0" horizAdvX="734" fontVariant="normal" style={{fillRule: "nonzero"}} fontStyle="italic" fontWeight="600">
              <fontFace fontFamily="Lucida Sans">
                <fontFaceSrc>
                  <fontFaceName name="Lucida Sans Demibold Italic"/>
                </fontFaceSrc>
              </fontFace>
              <missingGlyph/>
              <glyph unicode="A" horizAdvX="734" d="m21 0 400.333 722.997h154.334L713.997 0h-149.67l-35.656 184.003h-285L142.169 0H20.998zm277.83 283.995h211.334l-55.665 282.011z"/>
              <glyph unicode="D" horizAdvX="786" d="m87 0 143.999 722.997H534.67c76.995 0 134.16-8.161 171.33-24.661 37.169-16.5 66.66-43.17 88.334-80.339 21.827-37.169 32.67-85.665 32.67-145.665 0-86.503-19.843-167.503-59.34-242.999-39.495-75.33-90.66-132.496-153.494-171.165C551.337 19.334 469.333 0 368.17 0zm169.83 100.004h86.503c68.504 0 124.665 15 168.673 45 43.996 29.834 80.161 73.996 108.496 132.33 28.335 58.169 42.496 118.83 42.496 181.665 0 58.169-18.33 100.334-54.992 126.165-36.673 25.842-103.5 38.834-200.172 38.834H361.17L256.831 100.004z"/>
              <glyph unicode="E" horizAdvX="599" d="m87 0 143.999 722.997h455.006l-19.5-99.992H361.002l-40.004-201.01h244.003l-18.496-93.993H302.171l-45.342-227.999h325.676L563.005 0z"/>
              <glyph unicode="G" horizAdvX="731" d="M670.001 22.004C562.332-4.666 469.994-18 392.833-18c-92.338 0-163.995 24.661-214.665 73.996-50.834 49.169-76.169 115.169-76.169 197.834s20.835 162.165 62.669 238.168c41.834 76.169 97.5 136.665 166.995 181.665 69.33 44.834 152.503 67.334 249.164 67.334 60.838 0 132.177-9.33 214.168-27.992l-22.5-117c-36.33 13.5-65.492 23.162-87 28.996-21.66 6-42.165 10.335-61.334 13.004-19.157 2.658-38.161 3.992-57.165 3.992-58.17 0-109.17-15.826-152.67-47.669-43.664-31.665-79.664-78.33-108.33-139.996-28.664-61.5-43.003-123.33-43.003-185.16 0-58.678 16.335-104.67 49.004-138.012C344.666 97.664 391 81 450.835 81c27.661 0 56.326 5.161 86.326 15.496l45.508 228.507h147.66l-60.33-303z"/>
              <glyph unicode="I" horizAdvX="325" d="m87 0 143.999 722.997h149.834L236.833 0z"/>
              <glyph unicode="L" horizAdvX="587" d="m87 0 143.999 722.997h149.834L256.83 100.003h335.172L572.006-.001H87z"/>
              <glyph unicode="M" horizAdvX="891" d="m87 0 143.999 722.997H429.67l68.822-482.325 268.334 482.325H952.66L808.662 0H665.997l107.338 539.006L505.332 57h-116.16l-71.008 497.998L207.672 0H86.999z"/>
            </font>
          </defs>
          <g id="Layer_x0020_1">
            <g id="_2554947049856">
              <path d="M52.84 3.76c-5.78 6.39-6.6 26.07-1.68 40.56 12.08 35.6 66.2 90.68 128.58 134.83 10.01 8.02 145.35 87.73 144.58 88.43.18 4.15-167.27-90.55-184.86-113.79-25.67-20.34-34.85-20.87-32.32-2.44 2.54 13.55 18.55 28.91 54.26 53.96 17.15 12.03 173.12 93.53 175.84 95.88.23 3.08-149.29-70.49-153.94-76.49-18.22-11.19-24.36-11.5-29.41-8.34-7.04 6.89 1.95 18.86 6.52 24.28 8.6 9.51 43.08 31.9 47.31 34.72 2.82 1.41 4.95 2.5 9.99 5.56 7.14 4.34 142.93 55.02 140.99 57.08-.98 1.04-138.05-52.53-142.19-53.2-7.8-1.19-10.33.24-12.14 5.45-3.81 15.18 16.89 32.43 57.39 47.82 42.14 16.01-.08 7.39 25.83 36.88 9.52 10.85 36.94 26.48 58.26 33.22 19.49 6.16 44.35 20.72 53.05 31.05 23.09 27.43 12.32 60.14-36.85 111.89-9.21 9.7-15.24 17.63-13.39 17.63 5.87 0 38.41-25.91 60.8-48.41 25.23-25.35 41.49-51.34 51.57-82.42 15.6-48.1 4.08-95.94-21.89-90.92-10.23 1.97-19.34 11.28-17 17.37 1.86 4.84-.23 5.16-7.68 1.17-9.36-5.01-6.37-12.59 8.65-21.93 9.46-5.88 14.1-10.67 14.1-14.53 0-7.49-4.87-7.33-11.1.36-3.07 3.79-6.68 5.45-9.52 4.36-7.1-2.72-.45-18.03 11.05-25.48 5.22-3.38 9.49-6.78 9.49-7.56-.01-3.22-43.8-29.11-85.97-50.83-83.35-42.94-151.58-93.25-214.51-158.21-27.28-28.16-55-60.57-73.23-85.63-5.54-7.63-5.73-7.67-10.58-2.3zM805 54.61c-27.32 35.22-77.85 86.85-115.67 117.22-41.06 32.97-72.2 51.81-125.01 81.73-45.2 23.39-70.7 38.29-70.7 41.31 0 1.2 3.07 5.75 6.82 10.11 16.58 19.3 15.44 64.98-2.68 106.79-5.37 12.38-9.37 22.91-8.89 23.38.48.48 14.63-6.36 14.63-6.36s43.73-20.62 70.53-32.23c15.51-6.72 29.77-14.24 39.46-24.51 34.11-35.15-77.31 8.31-67.86 2.84 4.85-2.81 26.19-8.77 93.56-35.71 20.49-9.61 43.39-23.34 49.14-32.89 4.78-8.93-1.41-17.79-10.86-15.56-121.99 49.37-204 79.29 7.32-10.24 6.34-2.68 12.54-5.99 15.46-7.55 5.03-2.69 33.36-20.2 35.9-25.62 4.2-7.86 3.59-15.86-1.54-20.12-3.68-3.05-5.54-3.05-10.58-.01-106.72 57.88-143.54 78.04-135.28 72.99 9.35-5.72 76.03-43.57 156.37-92.04 29.16-18.27 38.8-34.32 41.46-44.6.84-5.45 1.87-11.2-8.21-10.4C763.16 155.43 588.4 278.07 588 276.92c-1.56-4.4 191.97-132.45 202.27-150.04 39.1-39.95 51.48-70.4 43-92.49-3.28-8.56-9.23-4.3-28.26 20.22z" style={{fill: "url(#id1)"}}/>
              <path d="M208.8 601.31c30.05 39.3 143.66-41.55 185.59-115.8-7.7 3.39-63.65 60.66-160.62 101.24-20.94 8.77-21.09 5.89-24.97 14.55z" style={{fill: "url(#id2)"}}/>
              <text x="-7.85" y="552.01" className="fil2 fnt0">EAGLE   </text>
              <text x="432.22" y="552.01" className="fil2 fnt0">MEDIA</text>
            </g>
          </g>
        </svg>
      </a>
      {/* menu */}
      <div className="lg:flex items-center justify-between lg:gap-14 hidden">
        <a
          href="/Marketing-Website/"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Home
        </a>
        <a
          href="/Marketing-Website/#about"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          About
        </a>
        <a
          href="/Marketing-Website/#services"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Services
        </a>
        <a
          href="/Marketing-Website/#portfolio"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Portfolio
        </a>

        <a
          href="/Marketing-Website/#contact"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Contact
        </a>

        {/* CTA */}
        {/* <button className="bg-[#00B1E1] text-lg text-slate-50 rounded-3xl px-4 py-1">
          Get Strated
        </button> */}
        <a href="/Marketing-Website/#contact" className="">
          <CtaButton name={"Get Started"} />
        </a>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden ">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
      </div>

      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-white transition-all duration-300">
          <a
            href="/Marketing-Website/"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Home
          </a>
          <a
            href="/Marketing-Website/#about"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            About
          </a>
          <a
            href="/Marketing-Website/#services"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Services
          </a>
          <a
            href="/Marketing-Website/#contact"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Contact
          </a>

          {/* CTA */}
          <a
            href="/Marketing-Website/#contact"
            className="mt-2 ml-2 flex justify-center items-center"
          >
            <CtaButton name={"Get Started"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
