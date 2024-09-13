import MyBurgerMenu from "../components/Burger-menu/Burger-menu";

export default function Header() {
  return (
    <header className="w-full flex items-center px-5 lg:px-[75px] justify-between relative mt-7">
      <div>
        <a className="text-logo text-[30px] sm:text-[34px]  font-medium cursor-pointer">
          dlc
        </a>
      </div>
      <div className="md:flex justify-center hidden">
        <nav>
          <ul className="font-medium text-sm flex items-center gap-5 lg:gap-9 ">
            <li className="cursor-pointer hover:mt-[-5px] ease-out duration-200">
              <a>Free stuff</a>
            </li>
            <li className="cursor-pointer hover:mt-[-5px] ease-out duration-200">
              <a>Free tutorials</a>
            </li>
            <li className="cursor-pointer hover:mt-[-5px] ease-out duration-200">
              <a>Blog</a>
            </li>
            <li className="cursor-pointer text-inter hover:mt-[-5px] ease-out duration-200">
              <a>About</a>
            </li>
            <li className="cursor-pointer hover:mt-[-5px] ease-out duration-200">
              <a>1-1 Coaching</a>
            </li>
            <li className="cursor-pointer hover:mt-[-5px] ease-out duration-200">
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-sm flex gap-3 lg:gap-5 items-center">
        <button className="font-medium cursor-pointer">Log in</button>
        <button className="font-semibold cursor-pointer w-[94px] h-[44px] rounded-[50px] bg-[#EDF2F6] text-[#234EF6] hover:bg-[#dcefff] ease-in-out duration-200">
          Sing up
        </button>
      </div>
      <div className="h-[44px] w-[44px] md:hidden flex items-center">
        <MyBurgerMenu />
      </div>
    </header>
  );
}
