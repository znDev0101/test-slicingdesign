import ProfileUser from "../ProfileUser";
import office from "../../assets/Office.png";
import email from "../../assets/Secured Letter.png";
import phone from "../../assets/Phone.png";

const UserInformation = () => {
  return (
    <div className='ps-5 py-5 w-full bg-white hidden lg:block'>
      <div className='flex items-center gap-x-10'>
        <ProfileUser />
        <div className='flex flex-col gap-y-3'>
          <h1 className='text-[#17A9E2] text-2xl font-semibold'>
            YOHANNES AFFANDY (JOJO)
          </h1>
          <div className='flex gap-x-10 items-center'>
            <div className='flex flex-col gap-y-4'>
              <div className='flex items-center gap-x-3'>
                <div className='bg-[#e3f0ff] p-1 rounded-full'>
                  <img src={office} alt='icon-office' className='w-6 h-6' />
                </div>
                <span>Loan Market Office Dev</span>
              </div>
              <div className='flex items-center gap-x-3'>
                <div className='bg-[#e3f0ff] p-1 rounded-full'>
                  <span className='font-semibold text-[#17a9e2]'>ID:</span>
                </div>
                <span>LM9990001</span>
              </div>
            </div>
            <div className='w-[.1rem] h-20 bg-gray-200 text-center'></div>
            <div className='flex flex-col gap-y-4'>
              <div className='flex items-center gap-x-3'>
                <div className='bg-[#e3f0ff] p-1 rounded-full'>
                  <img src={email} alt='icon-office' className='w-6 h-6' />
                </div>
                <span>it@loanmarket.co.id</span>
              </div>
              <div className='flex items-center gap-x-3'>
                <div className='bg-[#e3f0ff] p-1 rounded-full'>
                  <img src={phone} alt='icon-office' className='w-6 h-6' />
                </div>
                <span>6281234567890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
