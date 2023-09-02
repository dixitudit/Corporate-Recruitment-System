import { Link } from "react-router-dom"
  
export default function NotFound(){
    return (<>
        <section className="bgWhite">
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center maxW-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-[#00D8FF] rounded-full bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-black md:text-3xl">Page not found</h1>
            <p className="mt-4 text-gray-500 ">The page you are looking for doesn&apos;t exist.</p>

            <div className="flex items-center px-1/2 mt-6 gap-x-3 shrink-0 sm:w-auto">
                <Link to={"/"} className="px-5 py-2 text-md trackingWide textWhite transition-colors duration-200 bg-[#00D8FF] rounded-lg shrink-0 whitespace-nowrap w-auto hover:bg-blue-600">
                    Take me home
                </Link>
            </div>
        </div>
    </div>
</section>
    </>);
}