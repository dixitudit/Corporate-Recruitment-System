import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Single from "../assets/single.png";
export default function Jobs(){
    return (<>
        <NavBar />

        <div className="mt-10 p-5 text-center font-bold pb-0 mb-0 text-4xl underline">
            Our Job Section
        </div>

        <div className='w-full py-[10rem] px-4 bg-white pt-8'>
       
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 border '>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-[10px]'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Mastercard</h2>
                    <p className='text-center text-xl font-bold'>#Engineering #Engineering Students #Undergraduate</p>
                    <p className='py-2 border-b mt-8'>20 days left </p>
                    <div className='text-center font-medium'>
                        
                        <p className='py-2 border-b mx-8'>Job Description</p>
                        <p className='py-2 border-b mx-8'>Mastercard is hiring for the role of Senior Platform Engineer!</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Apply</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-[10px] '>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>NVIDIA </h2>
                    <p className='text-center text-xl font-bold'>#Engineering #Engineering Students #Undergraduate</p>
                    <p className='py-2 border-b mt-8'>10 days left </p>
                    <div className='text-center font-medium'>
                        
                        <p className='py-2 border-b mx-8'>Job Description</p>
                        <p className='py-2 border-b mx-8'>NVIDIA is hiring for the role of Software QA Tool and Test Development Engineer!</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Apply</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-[10px]'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Alvarez & Marsal </h2>
                    <p className='text-center text-xl font-bold'>#Engineering #Engineering Students #Undergraduate</p>
                    <p className='py-2 border-b mt-8'>7 days left </p>
                    <div className='text-center font-medium'>
                        
                        <p className='py-2 border-b mx-8'>Job Description</p>
                        <p className='py-2 border-b mx-8'>Alvarez & Marsal is hiring for the role of Senior Associate!</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Apply</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-[10px]'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Mastercard</h2>
                    <p className='text-center text-xl font-bold'>#Engineering #Engineering Students #Undergraduate</p>
                    <p className='py-2 border-b mt-8'>20 days left </p>
                    <div className='text-center font-medium'>
                        
                        <p className='py-2 border-b mx-8'>Job Description</p>
                        <p className='py-2 border-b mx-8'>Mastercard is hiring for the role of Senior Platform Engineer!</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Apply</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-[10px]'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>NVIDIA </h2>
                    <p className='text-center text-xl font-bold'>#Engineering #Engineering Students #Undergraduate</p>
                    <p className='py-2 border-b mt-8'>10 days left </p>
                    <div className='text-center font-medium'>
                        
                        <p className='py-2 border-b mx-8'>Job Description</p>
                        <p className='py-2 border-b mx-8'>NVIDIA is hiring for the role of Software QA Tool and Test Development Engineer!</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Apply</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-[10px]'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Alvarez & Marsal </h2>
                    <p className='text-center text-xl font-bold'>#Engineering #Engineering Students #Undergraduate</p>
                    <p className='py-2 border-b mt-8'>7 days left </p>
                    <div className='text-center font-medium'>
                        
                        <p className='py-2 border-b mx-8'>Job Description</p>
                        <p className='py-2 border-b mx-8'>Alvarez & Marsal is hiring for the role of Senior Associate!</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Apply</button>
                </div>
            </div>
        </div>

        <Footer />
    </>);
}