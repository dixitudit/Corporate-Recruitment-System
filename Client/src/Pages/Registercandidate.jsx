
 const Registercandidate = () => {
  return (
    
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div className='justify-center flex'>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="38.000000pt" height="39.000000pt" viewBox="0 0 349.000000 356.000000" preserveAspectRatio="xMidYMid meet" >
      <g transform="translate(0.000000,356.000000) scale(0.100000,-0.100000)" fill="#00D8FF" stroke="none">
          <path d="M1470 2965 c-153 -28 -349 -111 -470 -201 -251 -184 -419 -449 -476 -751 -24 -131 -15 -375 19 -498 69 -247 196 -448 381 -603 96 -80 136 -107 242 -160 164 -82 320 -117 529 -116 114 1 161 6 253 27 196 45 373 138 517 269 40 38 79 68 85 68 7 0 94 -57 193 -127 l181 -126 29 34 c34 40 147 209 147 220 0 4 -83 65 -185 136 -102 70 -183 132 -181 138 81 184 113 305 122 468 14 232 -40 451 -166 671 -86 151 -275 333 -440 424 -87 49 -227 99 -337 121 -120 25 -324 27 -443 6z m434 -249 c277 -77 483 -241 610 -486 176 -339 118 -770 -142 -1051 -69 -74 -140 -135 -148 -126 -3 3 12 29 34 59 74 98 140 263 158 396 l6 48 -83 39 c-107 48 -227 90 -319 109 -39 8 -74 17 -77 20 -4 3 7 16 23 28 204 156 254 431 116 644 -52 80 -109 129 -201 172 -67 32 -86 37 -172 40 -70 3 -112 0 -155 -13 -188 -54 -315 -202 -344 -400 -22 -143 41 -310 157 -414 l66 -60 -39 -6 c-109 -19 -233 -60 -366 -122 -91 -42 -91 -43 -58 -181 25 -103 75 -213 135 -298 25 -35 43 -64 39 -64 -19 0 -116 85 -169 149 -162 193 -233 401 -222 651 6 147 28 233 92 365 131 271 382 461 683 515 73 14 308 4 376 -14z m-148 -1102 c35 -20 66 -39 68 -43 3 -4 -17 -39 -44 -77 -28 -37 -48 -75 -45 -84 19 -64 105 -395 105 -406 0 -14 -138 -167 -156 -172 -6 -2 -45 35 -87 81 l-76 84 33 129 c55 209 67 248 88 270 15 17 16 23 5 27 -20 8 -109 135 -102 147 7 11 126 80 138 80 5 0 38 -16 73 -36z"/>
      </g>
      </svg>
      </div>
      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Candidate Sign Up</h2>
    </div>
  

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6">

        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
          <div className="mt-2" >
            <input id="name" name="name" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-grey-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div className="mt-2" >
            <input id="name" name="name" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-grey-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
          <div className="mt-2">
            <input id="address" name="address" type="text" autoComplete="address" required className="block w-full rounded-md border-0 py-1.5 text-gray-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label htmlFor="Qualification" className="block text-sm font-medium leading-6 text-gray-900">Qualification</label>
          <div className="mt-2">
            <input id="qualification" name="qualification" type="text" autoComplete="qualification" required className="block w-full rounded-md border-0 py-1.5 text-gray-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-medium leading-6 text-gray-900">Skills</label>
          <div className="mt-2">
            <input id="skills" name="skills" type="text" autoComplete="skills" required className="block w-full rounded-md border-0 py-1.5 text-gray-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label htmlFor="PhoneNo" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
          <div className="mt-2">
            <input id="PhoneNo" name="PhoneNo" type="tel" autoComplete="PhoneNo" required className="block w-full rounded-md border-0 py-1.5 text-gray-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label htmlFor="dateofbirth" className="block text-sm font-medium leading-6 text-gray-900">Date Of Birth</label>
          <div className="mt-2">
            <input id="dateofbirth" name="dateofbirth" type="date" placeholder="dd-mm-yyyy" required className="block w-full rounded-md border-0 py-1.5 text-gray-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        
        <div>
        <label htmlFor="resume" className="block text-sm font-medium leading-6 text-gray-900">Resume</label>
        <input type="file" id="myFile" name="resume"/>
        </div>


        <div>
          <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">Experience</label>
          <div className="mt-2">
            <input id="experience" name="experience" type="text" autoComplete="experience" required className="block w-full rounded-md border-0 py-1.5 text-gray-1000 shadow-sm ring-1 ring-inset ring-sky-400 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
        <div className="mt-2">
          <button type="submit" className="flex w-full justify-center rounded-md bg-sky-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200">Sign up</button>
        </div>
        </div>

      </form>

      
    </div>
  </div>  
  )
}
export default Registercandidate;