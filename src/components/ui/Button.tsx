

const Button = ({ id, title, rightIcon, leftIcon, containerClass,bg }:{
  id?:string,
  title: string,
  rightIcon?:React.ReactNode,
  leftIcon?:React.ReactNode,
  containerClass?:string,
  bg?:string
}) => {
  return (
    <button
      id={id}
      className={
        `${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full ${bg ? bg : "bg-gradient-to-b from-purple-400 to-purple-500  text-white"} py-3 px-7  flex items-center gap-2 `}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-robertR  uppercase max-md:text-xs ">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
