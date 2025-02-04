


export default function Title({children,className,size}:{
  children:React.ReactNode,
  className?:string,
  size?:string
}){
  return (
      <div className={`${className} select-none pointer-events-none font-zentry ${size ? size : "text-[2rem] md:text-[4rem]"} leading-[0.9]`}>
        {children}
      </div>
    )
}