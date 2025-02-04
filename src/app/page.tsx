import {
  Navbar,
  Hero ,
  Sidebar,
  About,
  Features,
  Story,
  Contact,
  Footer,
  Audio
} from "@/components"


export default function Home(){
  return (
      <div className="bg-white">
        <Navbar/>
        <Sidebar/>
        <Hero/>
        <About/>
        <Features/>
        <Story/>
        <Contact/>
        <Footer/>
        <Audio/>
      </div>
    )
}