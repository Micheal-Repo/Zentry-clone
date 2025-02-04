"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gsap_1 = require("gsap");
var react_1 = require("react");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var AnimatedTitle = function (_a) {
    var title = _a.title, containerClass = _a.containerClass;
    var containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var ctx = gsap_1.gsap.context(function () {
            var titleAnimation = gsap_1.gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                },
            });
            titleAnimation.to(".animated-word", {
                opacity: 1,
                transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                ease: "power2.inOut",
                stagger: 0.02,
            }, 0);
        }, containerRef);
        return function () { return ctx.revert(); }; // Clean up on unmount
    }, []);
    return (<div ref={containerRef} className={"".concat(containerClass, " font-zentry flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem]")}>
      {title.split("<br />").map(function (line, index) { return (<div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
          {line.split(" ").map(function (word, idx) { return (<span key={idx} className="animated-word" dangerouslySetInnerHTML={{ __html: word }}/>); })}
        </div>); })}
    </div>);
};
exports.default = AnimatedTitle;
