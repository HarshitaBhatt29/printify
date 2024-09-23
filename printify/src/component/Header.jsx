import { useState } from "react";
import { Link } from "react-scroll";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-[10%] fixed top-0 left-0 z-50 backdrop-blur-2xl">
      <nav className="h-full flex justify-between items-center">
        <div className="lg:w-1/4 flex justify-center">
          <span
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="lg:hidden mx-2 transition-all duration-150 delay-0 ease active:scale-75"
          >
            <i className="uil uil-list-ul text-5xl text-[#39b75d]"></i>
          </span>
          <span className="h-[50px] w-[135px]  flex items-center">
            <img src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" />
          </span>
        </div>
        <ul className="hidden w-1/4  gap-x-6 lg:flex lg:justify-start md:w-3/4 hover:cursor-pointer">
          <li>
            <Link
              to="#"
              spy={true}
              smooth={true}
              duration={300}
              delay={0}
              className="flex items-end gap-x-1 hover:text-[#39b75d] transition duration-150 ease-in-out"
            >
              <h4 className="font-pop text-lg font-medium">Catalog</h4>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              spy={true}
              smooth={true}
              duration={500}
              delay={0}
              className="flex items-end gap-x-1 hover:text-[#39b75d] transition duration-150 ease-in-out"
            >
              <h4 className="font-pop text-lg font-medium">How it works</h4>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              spy={true}
              smooth={true}
              duration={500}
              delay={0}
              className="flex items-end gap-x-1 hover:text-[#39b75d] transition duration-150 ease-in-out"
            >
              <h4 className="font-pop text-lg font-medium">Pricing</h4>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              spy={true}
              smooth={true}
              duration={500}
              delay={0}
              className="flex items-end gap-x-1 hover:text-[#39b75d] transition duration-150 ease-in-out"
            >
              <h4 className="font-pop text-lg font-medium">Blog</h4>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              spy={true}
              smooth={true}
              duration={500}
              delay={0}
              className="flex items-end gap-x-1 hover:text-[#39b75d] transition duration-150 ease-in-out"
            >
              <h4 className="font-pop text-lg font-medium">Services</h4>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              spy={true}
              smooth={true}
              duration={500}
              delay={0}
              className="flex items-end gap-x-1 hover:text-[#39b75d] transition duration-150 ease-in-out"
            >
              <h4 className="font-pop text-lg font-medium">Use-cases</h4>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              spy={true}
              smooth={true}
              duration={500}
              delay={0}
              className="flex items-end gap-x-1 hover:text-[#39b75d]  transition duration-150 ease-in-out"
            >
              <h4 className="font-pop text-lg font-medium">Need-help?</h4>
            </Link>
          </li>
        </ul>
        <div className="lg:w-1/4 flex justify-start items-center gap-3 mr-3">
          <span className=" flex justify-center items-center h-10 w-24 pb-1 border rounded-sm font-semibold text-basel hover:text-[#39b75d] hover:cursor-pointer transition duration-150 ease-in-out ring-2 ring-slate-200">
            Log in
          </span>
          <span className="flex justify-center items-center h-10 w-24 pb-1  rounded-sm text-white font-semibold text-base bg-[#39b75d] hover:bg-[#1f913f] hover:cursor-pointer transition duration-150 ease-in-out">
            Sign up
          </span>
        </div>
        <div
          className={`fixed left-0 top-0  h-screen w-1/3 z-10 rounded-bl-3xl rounded-tl-3xl shadow-lg shadow-gray-500 bg-white transition-all duration-700 delay-75 ease-in-out  ${
            isOpen ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end items-center h-14">
            <span
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className="mr-5 transition-all duration-150 delay-0 ease active:scale-75"
            >
              <i className="uil uil-times text-3xl"></i>
            </span>
          </div>
          <ul className="w-full gap-x-6 gap-y-1 flex flex-col justify-center px-4 hover:cursor-pointer">
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                duration={300}
                delay={0}
                className="h-12 flex items-center gap-x-1 p-2 rounded-lg  hover:text-[#39b75d]  hover:border-[#39b75d] border-solid border-2 border-white transition duration-100 ease-in-out"
              >
                <h4 className="font-pop text-sm font-medium pb-1">Catalog</h4>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                duration={300}
                delay={0}
                className="h-12 flex items-center gap-x-1 p-2 rounded-lg  hover:text-[#39b75d]  hover:border-[#39b75d] border-solid border-2 border-white transition duration-100 ease-in-out"
              >
                <h4 className="font-pop text-sm font-medium ">How it works</h4>
              </Link>
            </li>

            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                duration={300}
                delay={0}
                className="h-12 flex items-center gap-x-1 p-2 rounded-lg  hover:text-[#39b75d]  hover:border-[#39b75d] border-solid border-2 border-white transition duration-100 ease-in-out"
              >
                <h4 className="font-pop text-sm font-medium pb-1">Pricing</h4>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                duration={300}
                delay={0}
                className="h-12 flex items-center gap-x-1 p-2 rounded-lg  hover:text-[#39b75d]  hover:border-[#39b75d] border-solid border-2 border-white transition duration-100 ease-in-out"
              >
                <h4 className="font-pop text-sm font-medium pb-1">
                Blog                </h4>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                duration={300}
                delay={0}
                className="h-12 flex items-center gap-x-1 p-2 rounded-lg  hover:text-[#39b75d]  hover:border-[#39b75d] border-solid border-2 border-white transition duration-100 ease-in-out"
              >
                <h4 className="font-pop text-sm font-medium pb-1">Services</h4>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                duration={300}
                delay={0}
                className="h-12 flex items-center gap-x-1 p-2 rounded-lg  hover:text-[#39b75d]  hover:border-[#39b75d] border-solid border-2 border-white transition duration-100 ease-in-out"
              >
                <h4 className="font-pop text-sm font-medium pb-1">use-cases</h4>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                spy={true}
                smooth={true}
                duration={300}
                delay={0}
                className="h-12 flex items-center gap-x-1 p-2 rounded-lg  hover:text-[#39b75d]  hover:border-[#39b75d] border-solid border-2 border-white transition duration-100 ease-in-out"
              >
                <h4 className="font-pop text-sm font-medium pb-1">Need-Help?</h4>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
