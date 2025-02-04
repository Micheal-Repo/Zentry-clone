"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("next/image");
var react_1 = require("@gsap/react");
var gsap_1 = require("gsap");
var components_1 = require("@/components");
function About() {
    (0, react_1.useGSAP)(function () {
        gsap_1.default.set("#storyImg", {
            clipPath: "circle(20% at 50% 50%)",
        });
        gsap_1.default.to("#storyImg", {
            clipPath: "circle(100% at 50% 50%)",
            scrollTrigger: {
                trigger: "#prologue",
                start: "top top",
                end: "bottom top+=200px",
                scrub: 1,
                pin: true,
                pinSpacing: true,
            },
        });
    });
    return (<section id="prologue" className="w-screen h-[110vh] bg-background text-white relative">
      <AboutContent className="text-white"/>
      <div id="storyImg" className="w-full h-full absolute top-0 left-0">
        <image_1.default src="/img/entrance.webp" fill={true} alt="about" className="object-cover object-center"/>
        <div className="w-full h-full top-0 left-0 bg-black/[0.3] absolute"/>
        <AboutContent className="text-white mix-blend-difference"/>
      </div>
    </section>);
}
exports.default = About;
function AboutContent(_a) {
    var className = _a.className;
    return (<div className={"".concat(className, " w-full h-full  absolute top-0 left-0 text-center section px-4 md:px-6 flex flex-col justify-between")}>
      <div className="w-full text-center">
        <p className="capitalize font-robertR text-[1rem] md:text-[1.2rem]">
          the multiversal ip world
        </p>
        <components_1.Title className="text-center mt-6 md:mt-10" size="text-[3rem] md:text-[5rem]">
          <h1 className="">
            the st<b>o</b>ry of <br /> a hidden real<b>m</b>
          </h1>
        </components_1.Title>
      </div>

      <div className="w-full text-center text-[1rem] font-robertR md:text-[1.2rem]">
        <p className=" max-w-lg mx-auto ">
          Where realms converge, lies Zentry and the boundless pillar. Discover
          its secrets and shape your fate amidst infinite opportunities.nto a
          unified Play Economy
        </p>
        <components_1.Button title="discover prologue" containerClass="mt-4 mx-auto" bg="bg-white text-black"/>
      </div>
    </div>);
}
