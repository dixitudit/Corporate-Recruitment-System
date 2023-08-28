import NavBar from "../components/NavBar";
import Typed from "react-typed";
export default function IndexPage() {
    return (
        <>
         <NavBar/>
         <div className='text-white bg-[#2699fb]  flex'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[black] font-bold pt-20 md:text-3xl text-2xl'>
          Welcome to Skill Magnet
        </p>
        <h1 className='md:text-5xl sm:text-3xl text-3xl font-bold md:py-6'>
          Grow with us.
        </h1>
          <div className='md:text-5xl sm:text-4xl text-xl font-bold py-4 '>
            Learn
          
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-3 pl-1'
            strings={['To Hire', ' To Productive', 'To Aquire Knowledge']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          </div>
        
          
        <button className='whitespace-nowrap bg-[black] px-5 md:w-auto w-auto rounded-md font-medium my-6 mx-auto py-3 text-white'>Are You Ready</button>
      </div>
    </div>
    </>
    );
};
