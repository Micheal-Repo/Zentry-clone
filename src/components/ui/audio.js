"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Home() {
    var _a = (0, react_1.useState)(true), isAudioPlaying = _a[0], setIsAudioPlaying = _a[1];
    var _b = (0, react_1.useState)(true), isIndicatorActive = _b[0], setIsIndicatorActive = _b[1];
    var audioElementRef = (0, react_1.useRef)(null);
    var toggleAudioIndicator = function () {
        setIsAudioPlaying(function (prev) { return !prev; });
        setIsIndicatorActive(function (prev) { return !prev; });
    };
    (0, react_1.useEffect)(function () {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        }
        else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);
    return (<div className="fixed z-50 left-4 bottom-4 bg-black/[0.4] border border-white/[0.5] backdrop-blur-md backdrop-blur p-4 overflow-hidden rounded-full ">
     
      <button onClick={toggleAudioIndicator} className=" flex items-center space-x-0.5">
              <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop/>
              {[1, 2, 3, 4].map(function (bar) { return (<div key={bar} className={"indicator-line ".concat(isIndicatorActive ?
                "active" : "", " ,\n                  ")} style={{
                animationDelay: "".concat(bar * 0.1, "s"),
            }}/>); })}
            </button>
   </div>);
}
exports.default = Home;
