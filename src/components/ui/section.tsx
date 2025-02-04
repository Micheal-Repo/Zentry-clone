

export default function Section({
  children 
}:{
  children:React.ReactNode
}){
  return (
      <section className="w-screen">
        <div className="w-full max-w-6xl px-4">
        {children}
        </div>
      </section>
    )
}