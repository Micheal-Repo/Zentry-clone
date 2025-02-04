"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var md_1 = require("react-icons/md");
var ti_1 = require("react-icons/ti");
var components_1 = require("@/components");
var react_2 = require("@gsap/react");
var gsap_1 = require("gsap");
var all_1 = require("gsap/all");
gsap_1.default.registerPlugin(all_1.ScrollTrigger);
function Hero() {
    (0, react_2.useGSAP)(function () {
        gsap_1.default.set("#heroBg", {
            //clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            clipPath: "circle(50% at 50% 50%)",
            // borderRadius: "0% 0% 40% 10%",
        });
        gsap_1.default.from("#heroBg", {
            // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            clipPath: "circle(100% at 50% 50%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#nexus",
                start: "top top+=100px",
                end: "bottom center",
                scrub: 1,
            },
        });
    });
    return (<section id="nexus" className="w-screen relative h-dvh bg-white">
      <div id="heroBg" className="w-full h-full relative">
      <BgVideo />
      <HeroContent />
      </div>
    </section>);
}
exports.default = Hero;
function BgVideo() {
    var _a = (0, react_1.useState)(1), activeIndex = _a[0], setActiveIndex = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(0), loadedVideos = _c[0], setLoadedVideos = _c[1];
    var videos = [
        "/videos/hero-1.mp4",
        "/videos/hero-2.mp4",
        "/videos/hero-3.mp4",
        "/videos/hero-4.mp4",
    ];
    (0, react_1.useEffect)(function () {
        var videoElements = document.querySelectorAll(".videoElement");
        if (videoElements.length > 1) {
            videoElements.forEach(function (video, index) {
                if (index === 1) {
                    video.currentTime = 0;
                    video.play().catch(function (error) {
                        console.error("Failed to play the video:", error);
                    });
                }
                else {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }
    }, [activeIndex]);
    function handleClick(index) {
        if (index === activeIndex)
            return;
        var videos = document.querySelectorAll(".video");
        var videoCont = document.querySelector(".video-cont");
        videoCont.appendChild(videos[0]);
        setActiveIndex(index);
    }
    (0, react_1.useEffect)(function () {
        setLoading(false);
    }, []);
    return (<>
      {loading && (<div className="flex justify-center items-center fixed top-0 left-0 z-[100] h-dvh w-screen overflow-hidden bg-background">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>)}

      {!loading && (<div className="absolute bg-background left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-[1.1rem] md:text-[1.5rem] opacity-80 rounded-full animate-pulse z-10">
          <md_1.MdAdd />
        </div>)}

      <div className={"absolute top-0 left-0 video-cont w-full h-[100dvh] bg-background flex justify-center items-center text-white text-3xl relative gap-2"}>
        {videos.map(function (item, i) { return (<div onClick={function () { return handleClick(i); }} key={i} className="overflow-hidden video w-[10rem] md:w-[18rem] h-[10rem] md:h-[18rem] absolute transition-all duration-700">
            <video src={item} autoPlay muted loop className="w-full h-full object-cover object-center videoElement transition-all duration-700"/>
          </div>); })}
      </div>
    </>);
}
function HeroContent() {
    return (<div className="w-full pt-[4rem] md:pt-[7rem] h-full padding text-white absolute top-0 left-0 z-10 flex flex-col justify-between">
      
      <div className="">
        <h1 className="font-zentry text-[3rem] md:text-[8rem] uppercase">
          Redefi<b>n</b>e
        </h1>
        <p className="text-[1rem] md:text-[2rem] font-robertR">
          Enter the Metagame Layer <br />Unleash the Play Economy
        </p>
        <components_1.Button leftIcon={<ti_1.TiLocationArrow size={25}/>} title="Watch Trailer" containerClass="mt-3"/>
      </div>
      
      <div className="self-end">
        <h1 className="font-zentry text-[3rem] md:text-[8rem] uppercase">G<b>a</b>ming</h1>
      </div>
    </div>);
}
