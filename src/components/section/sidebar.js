"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("@/utils/data");
var components_1 = require("@/components");
var ti_1 = require("react-icons/ti");
var link_1 = require("next/link");
var md_1 = require("react-icons/md");
var state_1 = require("@/utils/state");
var react_1 = require("@gsap/react");
var gsap_1 = require("gsap");
function Sidebar() {
    var _a = (0, state_1.useSidebar)(function (state) { return state; }), isOpen = _a.isOpen, setIsOpen = _a.setIsOpen;
    (0, react_1.useGSAP)(function () {
        if (isOpen) {
            gsap_1.default.to(".sidebar", {
                x: "0rem",
                duration: 0.8,
                ease: "power1.inOut",
            });
        }
        else {
            gsap_1.default.to(".sidebar", {
                x: "-20rem",
                duration: 0.8,
                ease: "power1.inOut",
            });
        }
    }, { dependencies: [isOpen] });
    return (<div>
      
      {isOpen &&
            <div className="z-[50] fixed top-0 left-0 bg-black opacity-60 w-screen h-dvh"/>}


      <div className="sidebar z-[70] fixed top-0 h-dvh left-0 w-[20rem] bg-background2 -translate-x-[20rem]">
        
        <div onClick={function () { return setIsOpen(false); }} className="absolute top-0 right-0 p-6 text-white ">
          <md_1.MdClose size={30}/>
        </div>
        
        <ul className="list-none flex flex-col justify-center items-center gap-12 text-white font-robertR md:hidden w-full h-full text-center">
          {data_1.navLinks.map(function (item, i) { return (<li key={i} className="text-center ">
              <link_1.default onClick={function () { return setIsOpen(false); }} href={"#".concat(item.link.toLowerCase())} className="text-center nav-hover-btn">
                {item.link}
              </link_1.default>
            </li>); })}
          <components_1.Button rightIcon={<ti_1.TiLocationArrow size={25}/>} title="product" containerClass="text-center" bg="bg-white text-black"/>
        </ul>
      </div>
    </div>);
}
exports.default = Sidebar;
