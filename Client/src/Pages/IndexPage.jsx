import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Typed from "react-typed";
import laptop from "../assets/laptop.jpg"
export default function IndexPage() {
    return (
  <>
    <NavBar/>
    <div className='w-full items-center h-screen bg-white mt-1 px-4 max-w-[1240px] mx-auto md:flex '>
        
      <img className='w-[500px] mx-auto' src={laptop} alt='/' />
      <div className='max-w-[800px] w-full mx-auto text-center flex-col justify-center'>
      <p className=' font-bold md:text-4xl text-2xl'>

        Welcome to Skill Magnet
      </p>
      <h1 className='md:text-5xl text-3xl font-bold md:py-6'>
        Grow with us.
      </h1>
        <div className='md:text-5xl sm:text-4xl text-xl font-bold py-4 '>
          Learn
        
        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-3 pl-1'
          strings={['To Get Hired', 'To Be Productive', 'To Acquire Skills']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
        </div>
        <button className='whitespace-nowrap bg-[black] px-5 md:w-auto w-auto rounded-md font-medium my-6 mx-auto py-3 text-white'>Are You Ready</button>
      </div>


    </div>

    <Footer/>
  </>
    );
}
