import CardInformation from "../dashboard/CardInformation";
import dunotDiagram from "../../assets/Ellipse 3.png";
import halfDunotDiagram from "../../assets/Ellipse 2 (1).png";

const Hero = () => {
  return (
    <div className='flex flex-col relative pt-3 lg:hidden gap-y-5 w-full h-[350px] items-center bg-[#37b5e7]'>
      <h1 className='text-white font-semibold text-xl'>TARGET</h1>
      <div className='relative'>
        <img src={dunotDiagram} alt='diagram' />
        <img
          src={halfDunotDiagram}
          alt='diagram'
          className='absolute top-0 right-0'
        />
        <h5 className='absolute top-16 left-14 text-white text-2xl font-bold'>
          60%
        </h5>
      </div>
      <div className='text-center'>
        <h5 className='text-white font-semibold'>60.000.000 / 100.000.000</h5>
        <p className='text-white'>3 / 6 Loan approved</p>
      </div>
      <CardInformation />
    </div>
  );
};

export default Hero;
