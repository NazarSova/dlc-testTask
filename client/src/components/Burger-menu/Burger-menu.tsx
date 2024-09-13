import { useState } from "react";
import { X } from "lucide-react";
function MyBurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full z-30">
      <div
        className="w-full flex flex-col gap-[6px] items-center"
        onClick={() => setIsOpen(true)}
      >
        <span className="w-7 h-[3px] bg-gray-600 rounded-sm"></span>
        <span className="w-7 h-[3px] bg-gray-600 rounded-sm"></span>
        <span className="w-7 h-[3px] bg-gray-600 rounded-sm"></span>
      </div>
      <div
        className={`w-1/2 md:w-1/3 h-screen ease-in-out duration-500 absolute top-[-27px] ${
          isOpen ? "right-[0px]" : "right-[-500px]"
        } bg-[#E8F2FF]`}
      >
        <div className="w-full relative pl-2 pt-[37px]">
          <X
            onClick={() => setIsOpen(false)}
            className="absolute right-7 w-8 h-8 text-gray-600"
          />
          <div className="flex flex-col gap-2 mt-10 pl-2 text-lg font-medium">
            <a className="cursor-pointer hover:text-[#262626] ease-out duration-200">
              Free stuff
            </a>
            <a className="cursor-pointer hover:text-[#262626] ease-out duration-200">
              Free tutorials
            </a>
            <a className="cursor-pointer hover:text-[#262626] ease-out duration-200">
              Blog
            </a>
            <a className="cursor-pointer hover:text-[#262626] ease-out duration-200">
              About
            </a>
            <a className="cursor-pointer hover:text-[#262626] ease-out duration-200">
              1-1 Coaching
            </a>
            <a className="cursor-pointer hover:text-[#262626] ease-out duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBurgerMenu;
