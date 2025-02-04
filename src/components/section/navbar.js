"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("@/utils/state");
var image_1 = require("next/image");
var md_1 = require("react-icons/md");
var data_1 = require("@/utils/data");
var components_1 = require("@/components");
var ti_1 = require("react-icons/ti");
var link_1 = require("next/link");
var react_use_1 = require("react-use");
var react_1 = require("react");
var gsap_1 = require("gsap");
function Navbar() {
    var setIsOpen = (0, state_1.useSidebar)(function (state) { return state; }).setIsOpen;
    var currentScrollY = (0, react_use_1.useWindowScroll)().y;
    var innerContRef = (0, react_1.useRef)(null);
    var outerContRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(0), lastScrollY = _a[0], setLastScrollY = _a[1];
    var _b = (0, react_1.useState)(true), isVisible = _b[0], setIsVisible = _b[1];
    (0, react_1.useEffect)(function () {
        if (currentScrollY === 0) {
            innerContRef.current.classList.remove("bg-background2");
            innerContRef.current.classList.add("bg-transparent");
        }
        else if (currentScrollY > lastScrollY) {
            setIsVisible(false);
            innerContRef.current.classList.add("bg-background2");
            innerContRef.current.classList.remove("bg-transparent");
        }
        else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
            innerContRef.current.classList.add("bg-background2");
            innerContRef.current.classList.remove("bg-transparent");
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY]);
    (0, react_1.useEffect)(function () {
        gsap_1.default.to(outerContRef.current, {
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
            duration: 1,
            ease: "back.inOut"
        });
    }, [isVisible]);
    return (<nav ref={outerContRef} className="fixed top-0 left-0 w-full pt-[0.3rem] md:pt-[0.5rem] bg-transparent z-40">
      <div ref={innerContRef} className=" w-[96%]  mx-auto px-4  py-1.5 md:py-4 bg-transparent rounded-3xl flex justify-between items-center">
        {/*left*/}
        <div className="overflow-hidden flex items-center gap-6">
          
          <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] relative">
            <image_1.default src="/img/logo.png" alt="logo" fill={true} className="object-center object-contain"/>
          </div>

          <components_1.Button rightIcon={<ti_1.TiLocationArrow size={25}/>} title="product" containerClass="max-md:hidden" bg="bg-white text-black"/>
        </div>

        {/*right*/}
        <div>
          <md_1.MdMenu onClick={function () { return setIsOpen(true); }} size={28} className="md:hidden"/>
          <NavLinks />
        </div>
      </div>
    </nav>);
}
exports.default = Navbar;
function NavLinks() {
    return (<ul className="list-none flex items-center gap-8 text-white font-robertR max-md:hidden">
      {data_1.navLinks.map(function (item, i) { return (<li key={i}>
          <link_1.default href={"#".concat(item.link.toLowerCase())} className="nav-hover-btn">
            {item.link}
          </link_1.default>
        </li>); })}
    </ul>);
}
