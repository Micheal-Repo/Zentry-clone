import {create} from "zustand"



type sideBarType={
  isOpen:boolean,   
  setIsOpen:(val:boolean)=> void
}

const useSidebar = create<sideBarType>((set)=>({
  isOpen:false,   
  setIsOpen:(val)=>set(()=>({isOpen:val}))
}))


// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))



export {
  useSidebar
}