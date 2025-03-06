import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "./../constants/index";

const Navbar = () => {
  return (
    <header className="w-fill py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" height={18} width={14} />
        <div className="flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((nav, i) => (
            <div
              key={i}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" height={18} width={18} />
          <img src={bagImg} alt="bag" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
