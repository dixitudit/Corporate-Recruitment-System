import { useState  } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const changeSVG = () =>{
        setOpen(!open);      
    }

  return (

<body>
    <nav className='p-1 whitespace-nowrap md:flex font-serif md:justify-between md:items-center shadow-md'>
        <div className='flex justify-between items-center'>
            {/* logo */}
            <div>
                <a href="" className='flex items-center gap-1'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="38.000000pt" height="39.000000pt" viewBox="0 0 349.000000 356.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,356.000000) scale(0.100000,-0.100000)" fill="#00D8FF" stroke="none">
                        <path d="M1470 2965 c-153 -28 -349 -111 -470 -201 -251 -184 -419 -449 -476 -751 -24 -131 -15 -375 19 -498 69 -247 196 -448 381 -603 96 -80 136 -107 242 -160 164 -82 320 -117 529 -116 114 1 161 6 253 27 196 45 373 138 517 269 40 38 79 68 85 68 7 0 94 -57 193 -127 l181 -126 29 34 c34 40 147 209 147 220 0 4 -83 65 -185 136 -102 70 -183 132 -181 138 81 184 113 305 122 468 14 232 -40 451 -166 671 -86 151 -275 333 -440 424 -87 49 -227 99 -337 121 -120 25 -324 27 -443 6z m434 -249 c277 -77 483 -241 610 -486 176 -339 118 -770 -142 -1051 -69 -74 -140 -135 -148 -126 -3 3 12 29 34 59 74 98 140 263 158 396 l6 48 -83 39 c-107 48 -227 90 -319 109 -39 8 -74 17 -77 20 -4 3 7 16 23 28 204 156 254 431 116 644 -52 80 -109 129 -201 172 -67 32 -86 37 -172 40 -70 3 -112 0 -155 -13 -188 -54 -315 -202 -344 -400 -22 -143 41 -310 157 -414 l66 -60 -39 -6 c-109 -19 -233 -60 -366 -122 -91 -42 -91 -43 -58 -181 25 -103 75 -213 135 -298 25 -35 43 -64 39 -64 -19 0 -116 85 -169 149 -162 193 -233 401 -222 651 6 147 28 233 92 365 131 271 382 461 683 515 73 14 308 4 376 -14z m-148 -1102 c35 -20 66 -39 68 -43 3 -4 -17 -39 -44 -77 -28 -37 -48 -75 -45 -84 19 -64 105 -395 105 -406 0 -14 -138 -167 -156 -172 -6 -2 -45 35 -87 81 l-76 84 33 129 c55 209 67 248 88 270 15 17 16 23 5 27 -20 8 -109 135 -102 147 7 11 126 80 138 80 5 0 38 -16 73 -36z"/>
                    </g>
                </svg>
                <span className='font-bold text-xl sm:opacity-100 opacity-0'>Skill Magnet</span>
                </a>
            </div>
            {/* menu logo for mobile */}

            {!open && <div onClick={changeSVG} className={`text-3xl mx-2 cursor-pointer md:hidden block `}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                    <linearGradient id="EIPc0qTNCX0EujYwtxKaXa_MmupZtPbnw66_gr1" x1="12.066" x2="34.891" y1=".066" y2="22.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stopColor="#3bc9f3"></stop><stop offset=".85" stopColor="#1591d8"></stop></linearGradient><path fill="url(#EIPc0qTNCX0EujYwtxKaXa_MmupZtPbnw66_gr1)" d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"></path><linearGradient id="EIPc0qTNCX0EujYwtxKaXb_MmupZtPbnw66_gr2" x1="12.066" x2="34.891" y1="12.066" y2="34.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stopColor="#3bc9f3"></stop><stop offset=".85" stopColor="#1591d8"></stop></linearGradient><path fill="url(#EIPc0qTNCX0EujYwtxKaXb_MmupZtPbnw66_gr2)" d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"></path><linearGradient id="EIPc0qTNCX0EujYwtxKaXc_MmupZtPbnw66_gr3" x1="12.066" x2="34.891" y1="24.066" y2="46.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stopColor="#3bc9f3"></stop><stop offset=".85" stopColor="#1591d8"></stop></linearGradient><path fill="url(#EIPc0qTNCX0EujYwtxKaXc_MmupZtPbnw66_gr3)" d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"></path>
                </svg>
            </div>}
            {open && <div onClick={changeSVG} className={`text-3xl mx-2 cursor-pointer md:hidden block `}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00D8FF" className="w-9 h-9">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>

            </div>}
        </div>
        <div>
            <ul className={`md:flex gap-3 font-medium pr-36 max-md:bg-teal-100 z-[-1] md:z-auto md:static absolute w-full px-4 md:w-auto md:py-1 md-pl-0 pl-8 md:opacity-100 opacity-0 transition-all ease-in duration-200 ${open?'top-16 opacity-100':'top-[-480px]'}`}>
                <li className='hover:text-[#00D8FF] mx-2 my-4 '>
                    <a className="hover:underline hover:underline-offset-4 cursor-pointer">Home</a>
                </li>
                <li className='hover:text-[#00D8FF] mx-2 my-4 '>
                    <a href='#' className="hover:underline hover:underline-offset-4 ">Jobs</a>
                </li>
                <li className='hover:text-[#00D8FF] mx-2 my-4 '>
                    <a href='#' className="hover:underline hover:underline-offset-4 ">Companies</a>
                </li>
                <li className='hover:text-[#00D8FF] mx-2 my-4 '>
                    <a href='#' className="hover:underline hover:underline-offset-4 ">Practice</a>
                </li>
                <li className='hover:text-[#00D8FF] mx-2 my-4 '>
                    <a href='#' className="hover:underline hover:underline-offset-4 ">Contact Us</a>
                </li>
                <li>
                    <Link to={'/login'} className='absolute z-[1] top-1 right-20'>
                        <div className='py-1 rounded-2xl px-4  my-4 bg-[#00D8FF] '>Log in</div>
                    </Link>
                    <button className=" absolute top-1 right-0">
                        <div className='py-1 hover:bg-[#77e5f1] rounded-2xl px-5  my-4 bg-sky-100'>Sign Up</div>
                    </button>
                </li>
            </ul>

        </div>
    </nav>
</body>

  )
}

export default NavBar