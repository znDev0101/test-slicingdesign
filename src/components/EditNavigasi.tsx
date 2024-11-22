import leftNavigationMb from "../assets/arrowleft.png";
import rightNavigationMb from "../assets/arrowright.png";
import leftNavigation from "../assets/leftarrow.png";
import rightNavigation from "../assets/rightarrow.png";

const EditNavigasi = ({
  titleNavigasi,
  description,
  subTitleForMobile,
}: {
  titleNavigasi: string;
  description?: string;
  subTitleForMobile: string;
}) => {
  return (
    <div className='w-full bg-[#f6f6f6]  px-7 lg:px-10 flex justify-between items-center pt-5'>
      {/* image navigation for mobile */}
      <img
        src={leftNavigationMb}
        alt='left navigation  '
        className='w-15 h-15 hover:cursor-pointer block lg:hidden'
      />
      {/* image navigation for dekstop */}
      <img
        src={leftNavigation}
        alt='left navigation  '
        className='w-15 h-15 hover:cursor-pointer hidden lg:block'
      />
      <div className='flex flex-col items-center text-center'>
        <span className='text-[#878787]  lg:hidden'>{subTitleForMobile}</span>
        <h1 className='text-2xl lg:text-4xl font-semibold'>{titleNavigasi}</h1>
        <p className='text-gray-500 text-sm mt-2'>{description}</p>
      </div>
      {/* image navigation for mobile */}
      <img
        src={rightNavigationMb}
        alt='left navigation  '
        className='w-15 h-15 hover:cursor-pointer block lg:hidden'
      />
      {/* image navigation for dekstop */}
      <img
        src={rightNavigation}
        alt='right navigation  '
        className='w-15 h-15 hover:cursor-pointer hidden lg:block'
      />
    </div>
  );
};

export default EditNavigasi;
