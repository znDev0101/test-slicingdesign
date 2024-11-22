import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import profileUser from "../../assets/profile-user.png";
import { useLocation } from "react-router-dom";
import arrowLeftImg from "../../assets/arrow-left.png";

export const Navbar = () => {
  const location = useLocation();

  return (
    <header
      className={`w-full  flex items-center justify-between px-5 ${
        location.pathname !== "/"
          ? "bg-[#37b5e7] lg:bg-white py-4"
          : "bg-white py-3 lg:py-2"
      }   border-b border-gray-400`}
    >
      <span
        className='hidden lg:block font-semibold text-2xl text-[#4F5051]
'
      >
        {location.pathname === "/" ? "Edit Application" : "Dashboard"}
      </span>
      {location.pathname === "/" && (
        <HiOutlineMenu className='lg:hidden text-[#37b5e7] text-2xl' />
      )}

      <div className='flex items-center lg:hidden gap-x-16'>
        <img src={arrowLeftImg} alt='arrow img' />
        <h1 className='text-2xl text-white font-bold'>Edit Application</h1>
      </div>

      <div className='hidden lg:flex gap-x-5'>
        <div className='w-[.10rem] h-10 bg-gray-200'></div>
        <div className='flex gap-x-4 items-center'>
          <IoMdNotificationsOutline className='text-2xl' />
          <FaCaretDown />
        </div>
        <div className='w-[.10rem] h-10 bg-gray-200'></div>
        <div className='flex items-center gap-x-4'>
          <span>YOHANNES AFFANDY</span>
          <FaCaretDown />
        </div>
        <div className='w-[.10rem] h-10 bg-gray-200'></div>
      </div>
      {location.pathname === "/" && (
        <div className='lg:hidden'>
          <img src={profileUser} alt='profile user' />
        </div>
      )}
    </header>
  );
};
