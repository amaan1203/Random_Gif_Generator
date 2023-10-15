import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return <div className="background w-full h-full flex flex-col relative  items-center ">
      
      <h1 className="font-bold bg-white  w-11/12 px-10 py-3 text-4xl text-center rounded-md mt-[40px] ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-3 h-auto " > 

       <Random  />
       <Tag />

      </div>
    
    
    
     </div>;
}
