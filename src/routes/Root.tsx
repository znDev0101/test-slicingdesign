import { Outlet } from "react-router-dom";
import SideBar from "../components/layout/SideBar";
import { Navbar } from "../components/layout/Navbar";

export default function Root() {
  return (
    <div className='flex '>
      <SideBar />
      <div className='w-full'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
