"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("next/image");
var react_1 = require("@gsap/react");
var gsap_1 = require("gsap");
var components_1 = require("@/components");
function About() {
    (0, react_1.useGSAP)(function () {
        gsap_1.default.set("#aboutImg", {
            clipPath: "circle(20% at 50% 50%)",
        });
        gsap_1.default.to("#aboutImg", {
            clipPath: "circle(100% at 50% 50%)",
            scrollTrigger: {
                trigger: "#about",
                start: "top top",
                end: "bottom top+=200px",
                scrub: 1,
                pin: true,
                pinSpacing: true,
            },
        });
    });
    return (<section id="about" className="w-screen h-[110vh]  bg-white text-black relative">
      <AboutContent className="text-black"/>
      <div id="aboutImg" className="w-full h-full absolute top-0 left-0">
        <image_1.default src="/img/about.webp" fill={true} alt="about" className="object-cover object-center"/>
        <div className="w-full h-full top-0 left-0 bg-black/[0.3] absolute"/>
        <AboutContent className="text-white"/>
      </div>
    </section>);
}
exports.default = About;
function AboutContent(_a) {
    var className = _a.className;
    return (<div className={"".concat(className, " w-full h-full  absolute top-0 left-0 text-center section px-4 md:px-6 flex flex-col justify-between")}>
      
      <div className="w-full text-center">
        <p className="capitalize font-robertR text-[1rem] md:text-[1.2rem]">
          Welcome to zentry
        </p>
        <components_1.Title className="text-center mt-6 md:mt-10" size="text-[2.2rem] md:text-[4.5rem]">
          <h1>
            Disc<b>o</b>ver the world&apos;s <br /> largest shared <br /> <b>a</b>
            dventure
          </h1>
        </components_1.Title>
      </div>
      
      <div className="w-full text-center text-[1rem] font-robertR md:text-[1.2rem]">
        <p className="font-extrabold">The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="opacity-80 max-w-lg mx-auto ">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
      </div>
    </div>);
}
