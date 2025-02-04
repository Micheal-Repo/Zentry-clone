"use client"
import {useState,useRef,useEffect} from "react"

export default function Home(){
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [isIndicatorActive, setIsIndicatorActive] = useState(true);
  
  const audioElementRef:any = useRef(null);
  
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };
  
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);
  
  return (
   <div className="fixed z-50 left-4 bottom-4 bg-black/[0.4] border border-white/[0.5] backdrop-blur-md backdrop-blur p-4 overflow-hidden rounded-full ">
     
      <button
              onClick={toggleAudioIndicator}
              className=" flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/loop.mp3"
                loop
                
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isIndicatorActive ? 
                    "active": ""} ,
                  `}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
   </div>
    )
}