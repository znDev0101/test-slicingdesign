import { informationCard } from "../../data/informationCard";
import pieGram from "../../assets/Pie - Gradient Line.png";
import pieGram1 from "../../assets/Pie - Gradient Line (1).png";
import editIcon from "../../assets/edit.png";
import chart from "../../assets/chart.png";

const Information = () => {
  return (
    <div className='w-[95%] my-5 mx-auto hidden lg:grid grid-cols-[2fr_1fr] grid-rows-[1fr_2fr]  gap-x-5 '>
      <div className='flex gap-x-5'>
        {informationCard.map((data, i) => {
          return (
            <div
              key={i}
              className='h-24 flex gap-x-4 bg-white items-center py-2 px-6 rounded-md shadow-lg'
            >
              <div className='bg-[#E2F0FF] p-2 rounded-full'>
                <img src={data.icon} className='w-[25px] h-[25px]' />
              </div>
              <div className='flex items-center flex-col'>
                <span className='font-semibold'>{data.title}</span>
                <span className='font-bold text-[#17A9E2]'>{data.count}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className='w-full row-[2/3] relative flex items-center justify-between rounded-xl bg-white p-10'>
        <div className='flex flex-col gap-y-6 items-center'>
          <h2 className='font-bold'>PINJAMAN DI SETUJUI</h2>
          <div className='relative'>
            <img src={pieGram} className='w-24 h-24' />
            <h4 className='absolute top-[33px] left-[28px] text-xl font-bold'>
              40%
            </h4>
          </div>
          <p>2/5 Pinjaman telah disetujui</p>
        </div>
        <div className='w-[.10rem] h-full bg-gray-300'></div>
        <div className='flex flex-col gap-y-6 items-center'>
          <h2 className='font-bold'>TARGET</h2>
          <div className='relative'>
            <img src={pieGram1} className='w-24 h-24' />
            <h4 className='absolute top-[33px] left-[23px] text-xl font-bold'>
              280%
            </h4>
          </div>
          <p>Rp14.000.000.000,00 / Rp5.000.000.000</p>
        </div>
        <img
          src={editIcon}
          className='absolute top-3 right-3 w-8 h-8 hover:cursor-pointer'
        />
      </div>
      <div className='h-full row-[1/3] col-[2] bg-white shadow-md rounded-xl'>
        <h1 className='p-4 font-bold'>NOTIFICATION</h1>
        <div className='flex gap-x-6 ms-4'>
          <div className='flex flex-col gap-y-10'>
            <h5>2 hrs</h5>
            <h5>2 hrs</h5>
            <h5>4 hrs</h5>
            <h5>4 hrs</h5>
          </div>
          <div className='w-[.20rem] h-56 bg-gray-300'></div>
          <div className='flex flex-col'>
            <div className='relative'>
              <h5 className='font-semibold'>
                admin_branch has <br /> updated
              </h5>
              <p className='text-sm text-gray-600'>
                Harry Handoko - Contact|MYCRM{" "}
              </p>
              <div className='absolute top-0 -left-8 w-3 h-3 bg-[#17A9E2] rounded-full'></div>
            </div>
            <div className='relative'>
              <h5 className='font-semibold'>
                admin_branch has <br /> updated
              </h5>
              <p className='text-sm text-gray-600'>
                Harry Handoko - Application|MYCRM{" "}
              </p>
              <div className='absolute top-2 -left-8 w-3 h-3 bg-[#646567] rounded-full'></div>
            </div>
            <div className='relative'>
              <h5 className='font-semibold'>
                admin_branch has <br /> updated
              </h5>
              <p className='text-sm text-gray-600'>
                Harry Handoko - Application|MYCRM{" "}
              </p>
              <div className='absolute top-2 -left-8 w-3 h-3 bg-[#17A9E2] rounded-full'></div>
            </div>
            <div className='relative'>
              <h5 className='font-semibold'>
                admin_branch has <br /> updated
              </h5>
              <p className='text-sm text-gray-600'>
                Harry Handoko - Contact|MYCRM{" "}
              </p>
              <div className='absolute top-2 -left-8 w-3 h-3 bg-[#646567] rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white mt-7 rounded-lg'>
        <h1 className='text-center font-bold mt-5'>
          Top 5 Bank Approval Tertinggi
        </h1>
        <div className='w-[95%] mx-auto hidden lg:block'>
          <img src={chart} alt='img chart' className='w-[670px] h-[430px]' />
        </div>
      </div>
    </div>
  );
};

export default Information;
