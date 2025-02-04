"use client";
import { useSidebar } from "@/utils/state";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { navLinks } from "@/utils/data";
import { Button } from "@/components";
import { TiLocationArrow } from "react-icons/ti";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const { setIsOpen } = useSidebar((state) => state);
  const { y: currentScrollY } = useWindowScroll();

  const innerContRef: any = useRef(null);
  const outerContRef: any = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentScrollY === 0) {
      innerContRef.current.classList.remove("bg-background2");
      innerContRef.current.classList.add("bg-transparent");
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
      innerContRef.current.classList.add("bg-background2");
      innerContRef.current.classList.remove("bg-transparent");
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
      innerContRef.current.classList.add("bg-background2");
      innerContRef.current.classList.remove("bg-transparent");
    }
    
    setLastScrollY(currentScrollY)
  }, [currentScrollY,lastScrollY]);

  useEffect(() => {
    gsap.to(outerContRef.current, {
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      duration: 1,
      ease:"back.inOut"
    });
  }, [isVisible]);

  return (
    <nav
      ref={outerContRef}
      className="fixed top-0 left-0 w-full pt-[0.3rem] md:pt-[0.5rem] bg-transparent z-40"
    >
      <div
        ref={innerContRef}
        className=" w-[96%]  mx-auto px-4  py-1.5 md:py-4 bg-transparent rounded-3xl flex justify-between items-center"
      >
        {/*left*/}
        <div className="overflow-hidden flex items-center gap-6">
          
          <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] relative">
            <Image
              src="/logo.png"
              alt="logo"
              fill={true}
              className="object-center object-contain"
            />
          </div>

          <Button
            rightIcon={<TiLocationArrow size={25} />}
            title="product"
            containerClass="max-md:hidden"
            bg="bg-white text-black"
          />
        </div>

        {/*right*/}
        <div>
          <MdMenu
            onClick={() => setIsOpen(true)}
            size={28}
            className="md:hidden"
          />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <ul className="list-none flex items-center gap-8 text-white font-robertR max-md:hidden">
      {navLinks.map((item, i) => (
        <li key={i}>
          <Link href={`#${item.link.toLowerCase()}`} className="nav-hover-btn">
            {item.link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
