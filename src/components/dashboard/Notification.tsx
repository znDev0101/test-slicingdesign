import { FaAngleDown } from "react-icons/fa6";

const Notification = () => {
  return (
    <div className='mx-10 mt-44 lg:hidden'>
      <div className='flex justify-between'>
        <div className='flex gap-x-3 items-center'>
          <span>Notifications</span>
          <FaAngleDown className='text-gray-600' />
        </div>
        <span className='text-gray-400'>More</span>
      </div>
      <div className='flex flex-col gap-y-3 mt-3 '>
        <div className='relative bg-white shadow-2xl p-4 rounded-xl'>
          <h5 className='text-black font-semibold'>Bank Officer has updated</h5>
          <p className='text-gray-500 text-sm mt-1'>
            Van Tomiko Can - Application | MYCRM
          </p>
          <span className='absolute top-1 right-3 text-sm text-gray-500'>
            1 days ago
          </span>
        </div>
        <div className='relative bg-white shadow-2xl p-4 rounded-xl'>
          <h5 className='text-black font-semibold'>Bank Officer has updated</h5>
          <p className='text-gray-500 text-sm mt-1'>
            Van Tomiko Can - Application | MYCRM
          </p>
          <span className='absolute top-1 right-3 text-sm text-gray-500'>
            1 days ago
          </span>
        </div>
        <div className='relative bg-white shadow-2xl p-4 rounded-xl'>
          <h5 className='text-black font-semibold'>CMS has updated</h5>
          <p className='text-gray-500 text-sm mt-1'>
            Van Tomiko Can - Contact | MYCRM
          </p>
          <span className='absolute top-1 right-3 text-sm text-gray-500'>
            2 days ago
          </span>
        </div>
        <div className='relative bg-white shadow-2xl p-4 rounded-xl'>
          <h5 className='text-black font-semibold'>CMS has updated</h5>
          <p className='text-gray-500 text-sm mt-1'>
            Van Tomiko Can - Contact | MYCRM
          </p>
          <span className='absolute top-1 right-3 text-sm text-gray-500'>
            2 days ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
