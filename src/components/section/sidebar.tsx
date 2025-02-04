"use client"
import { navLinks } from "@/utils/data";
import { Button } from "@/components";
import { TiLocationArrow } from "react-icons/ti";
import Link from "next/link";
import {MdClose} from "react-icons/md"
import {useSidebar} from "@/utils/state"
import {useEffect} from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

export default function Sidebar() {
  
  const {isOpen, setIsOpen} = useSidebar((state)=> state)
  
  useGSAP(()=>{
    if(isOpen){
      gsap.to(".sidebar",{
        x:"0rem",
        duration:0.8,
        ease: "power1.inOut",
      })
    }else{
      gsap.to(".sidebar",{
        x:"-20rem",
        duration:0.8,
        ease: "power1.inOut",
      })
    }
  },{dependencies:[isOpen]})
  
  
  return (
    <div>
      
      {isOpen &&
      <div className="z-[50] fixed top-0 left-0 bg-black opacity-60 w-screen h-dvh" />
      }


      <div className="sidebar z-[70] fixed top-0 h-dvh left-0 w-[20rem] bg-background2 -translate-x-[20rem]">
        
        <div 
        onClick={()=> setIsOpen(false)}
        className="absolute top-0 right-0 p-6 text-white ">
          <MdClose size={30}/>
        </div>
        
        <ul className="list-none flex flex-col justify-center items-center gap-12 text-white font-robertR md:hidden w-full h-full text-center">
          {navLinks.map((item, i) => (
            <li key={i} className="text-center ">
              <Link
              onClick={()=> setIsOpen(false)}
                href={`#${item.link.toLowerCase()}`}
                className="text-center nav-hover-btn"
              >
                {item.link}
              </Link>
            </li>
          ))}
          <Button
            rightIcon={<TiLocationArrow size={25} />}
            title="product"
            containerClass="text-center"
            bg="bg-white text-black"
          />
        </ul>
      </div>
    </div>
  );
}
