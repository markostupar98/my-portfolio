// import Link from "next/link";
"use client";
// function Navbar() {
//   return (
//     <nav className="bg-transparent">
//       <div className="flex items-center justify-between py-5">
//         <div className="flex flex-shrink-0 items-center">
//           <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
//             Marko Stupar
//           </Link>
//         </div>

//         <ul
//           className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
//           id="navbar-default"
//         >
//           <li>
//             <Link
//               className="block px-4 py-2 no-underline outline-none hover:no-underline"
//               href="/#about"
//             >
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
//                 ABOUT
//               </div>
//             </Link>
//           </li>

//           <li>
//             <Link
//               className="block px-4 py-2 no-underline outline-none hover:no-underline"
//               href="/#skills"
//             >
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
//                 SKILLS
//               </div>
//             </Link>
//           </li>

//           <li>
//             <Link
//               className="block px-4 py-2 no-underline outline-none hover:no-underline"
//               href="/#projects"
//             >
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
//                 PROJECTS
//               </div>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex-row items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            {`</ Marko >`}
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <FiMenu size={24} />
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gradient-to-r bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/#about"
                className="block py-2 px-3 text-sm text-white transition-colors duration-300 hover:text-pink-600"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/#skills"
                className="block py-2 px-3 text-sm text-white transition-colors duration-300 hover:text-pink-600"
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="block py-2 px-3 text-sm text-white transition-colors duration-300 hover:text-pink-600"
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
