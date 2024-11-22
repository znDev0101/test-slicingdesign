import LogoBanner from "../LogoBanner";
import { FaChevronDown } from "react-icons/fa6";
import Home from "../../assets/Home.png";
import Contact from "../../assets/Contact.png";
import File from "../../assets/File.png";
import ShoppingBag from "../../assets/Shopping Bag.png";
import Bank from "../../assets/Bank Building.png";
import Performance from "../../assets/Performance.png";
import Help from "../../assets/Help.png";
import Layers from "../../assets/Layers.png";
import ProductManagement from "../../assets/Product Management.png";
import Whatsapp from "../../assets/WhatsApp.png";

const SideBar = () => {
  const menuSideBar = [
    {
      menuName: "Dashboard",
      startIcon: Home,
    },
    {
      menuName: "Contact",
      startIcon: Contact,
    },
    {
      menuName: "Loan",
      startIcon: File,
    },
    {
      menuName: "Product",
      startIcon: ShoppingBag,
      endIcon: FaChevronDown,
    },
    {
      menuName: "Bank",
      startIcon: Bank,
    },
    {
      menuName: "Credit Scoring",
      startIcon: Performance,
    },
    {
      menuName: "FAQ's",
      startIcon: Help,
    },
    {
      menuName: "Pipeline",
      startIcon: Layers,
    },
    {
      menuName: "Pipeline Developer",
      startIcon: Layers,
    },
    {
      menuName: "Marketing Tools",
      startIcon: ProductManagement,
    },
    {
      menuName: "Whatsapp",
      startIcon: Whatsapp,
    },
  ];

  return (
    <div className='w-[300px] min-h-screen bg-white border border-gray-500 hidden lg:flex flex-col gap-y-5'>
      <LogoBanner />
      {/* Navigation sidebar */}
      <nav>
        <ul className='flex flex-col gap-y-5'>
          {menuSideBar.map((data, i: number) => {
            return (
              <li
                key={i}
                className='relative w-[90%] mx-auto flex items-center gap-x-5 hover:cursor-pointer'
              >
                <img src={data.startIcon} />
                <span>{data.menuName}</span>
                {data.endIcon && <data.endIcon className='absolute right-2' />}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
