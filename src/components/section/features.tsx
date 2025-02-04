"use client"
import {useRef,useState} from "react"



export default function Features(){
  
  
  type  bentoType={
    title?:string,
    src:string,
    desc?:string,
  }
 const bentoList:bentoType[]=[
    {
      title:"zigma",
      desc:"An anime and gaming-inspired NFT collection - the IP primed for expansion.",
      src:"/videos/hero-1.mp4"
    },
    {
      title:"nexus",
      desc:"A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
      src:"/videos/hero-2.mp4"
    },
    {
      title:"azul",
      desc:"A cross-world AI Agent - elevating your gameplay to be more fun and productive.",
      src:"/videos/hero-4.mp4"
    },
    {
      src:"/videos/feature5.mp4",
      title:"Avara",
      desc:"A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
    },
   ]
  
  
  return (
      <section 
      id="vault"
      className="w-screen bg-background text-white section padding">
        
        <div className="w-full max-width h-full ">
          
        {/*title*/}
        <div className="font-robertR w-full max-w-lg">
          <h3 className="text-[1.5rem] md:text-[1.8rem]  font-bold">Into the Metagame Layer</h3>
          <p className="text-[1rem] md:text-[1.2rem] opacity-60 mt-2">Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.</p>
        </div>
        
        
        {/*grid*/}
        <div className="flex flex-col gap-4 mt-[2.5rem]">
          <BentoCard
            src="/videos/feature1.mp4"
            title="radiant"
            desc="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding   adventure."
            className="h-[22rem]"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             
            {bentoList.map((item,i:number)=>(
              
               <BentoCard
                 key={i}
                 title={item?.title}
                 desc={item?.desc}
                 src={item.src}
                 className="h-[18rem] md:h-[22rem]"
               />
            ))}
             
          </div>
        </div>
        
        </div>
      </section>
    )
}




function  BentoCard({
  title,
  desc,
  src,
  className
}:{
  title?:string,
  desc?:string,
  src: string,
  className?:string
}){
  
  
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef:any = useRef(null);

  const handleMouseMove = (event:any) => {
    if (!itemRef.current) return;

    const { left, top, width, height }:any =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  
  
  return (
    <div
    ref={itemRef}
      
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    className={`w-full rounded-2xl overflow-hidden transition-all duration-300 border border-white/[0.4] relative ${className}`}>
      <video
       src={src}
       loop 
       autoPlay
       muted
       className="object-cover object-center w-full h-full"
      />
      
      <div className="absolute inset-0 opacity-20 bg-black"/>
      
      <div className="absolute inset-0 p-4">
        <div className="">
          <h1 className="font-zentry uppercase sm:text-[2.5rem] text-[2.5rem] text-white">{title}</h1>
          <p className="md:text-[1.2rem] text-[1rem] font-robertR opacity-80 max-w-[25rem]">{desc}</p>
        </div>
      </div>
    </div>
 )
}