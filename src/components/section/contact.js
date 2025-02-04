"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("next/image");
var react_1 = require("@gsap/react");
var gsap_1 = require("gsap");
var components_1 = require("@/components");
function Contact() {
    (0, react_1.useGSAP)(function () {
        var tl = gsap_1.default.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top top",
                end: "bottom top+=200px",
                scrub: 1,
                pin: true,
                pinSpacing: true,
            },
        });
        tl.from("#firstImg", {
            opacity: 0,
            scale: 0.5,
        }, "<");
        tl.from("#secondImg", {
            opacity: 0,
            scale: 0.5,
        }, "<");
        tl.from("#contactText", {
            scale: 0.8,
        }, "<");
        tl.from("#bgOpacity", {
            opacity: 0.3,
        }, "<");
    });
    return (<section id="contact" className="w-screen bg-white h-dvh p-4 md:p-6 overflow-hidden">
      
      <div className="w-full h-full relative rounded-2xl overflow-hidden">
        <image_1.default src="/img/gallery-4.webp" fill={true} alt="" className="object-cover object-center w-full h-full"/>

        <div id="bgOpacity" className="absolute inset-0 bg-background opacity-90"/>

        <Content />
      </div>
    </section>);
}
exports.default = Contact;
function Content() {
    return (<>
      <div className="absolute inset-0">
        <div id="firstImg" className="absolute top-[-1.5rem] left-[-1.5rem]  md:top-[-2.5rem] md:left-[-2.5rem] w-[10rem] h-[10rem] md:h-[20rem] md:w-[20rem] overflow-hidden rounded-full scale-105">
          <image_1.default src="/img/contact-2.webp" fill={true} alt="" className="object-cover object-center"/>
        </div>
        
        
        <div id="secondImg" className="absolute bottom-[-1.5rem] right-[-1.5rem]  md:bottom-[-2.5rem] md:right-[-2.5rem] w-[10rem] h-[10rem] md:h-[20rem] md:w-[20rem] scale-105  overflow-hidden rounded-full ">
          <image_1.default src="/img/swordman.webp" fill={true} alt="" className="object-cover object-center"/>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center flex-col gap-8">
        <p className="capitalize font-robertR text-[1rem] md:text-[1.2rem]">
          Join Zentry
        </p>
        <components_1.Title className="text-center" size="text-[3.5rem] md:text-[5.5rem]">
          <h1 id="contactText" className="">
            let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t
            <b>o</b>gether
          </h1>
        </components_1.Title>
        <components_1.Button title="contact us" containerClass=" mx-auto" bg="bg-white text-black"/>
      </div>
    </>);
}
