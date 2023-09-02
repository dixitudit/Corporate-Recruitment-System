import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Typed from "react-typed";
import laptop from "../assets/laptop.jpg"
export default function IndexPage() {
    return (
        <>
         <NavBar/>
    <div className='w-full bg-white mt-1 py-10 px-4 max-w-[1240px] mx-auto grid md:grid-cols-2 '>
      
        <img className='w-[500px] mx-auto my-4' src={laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          
          <div className='text-blue flex'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className=' font-bold md:text-4xl text-2xl'>
        {/* <p className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</p> */}
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
    </div>
    </div>

    <Footer/>
    </>
    );
};
