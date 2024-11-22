import { IconType } from "react-icons";
import uploadImg from "../../assets/uploadImg.png";

interface UploadDataProps {
  label: string;
  placeholder: string;
  iconPlus?: IconType;
  iconRemove?: IconType;
  iconEye?: IconType;
}

const UploadData = ({ fieldsData }: { fieldsData: UploadDataProps[] }) => {
  return (
    <div className='w-[95%] mx-auto flex flex-col lg:grid grid-cols-2 lg:items-center gap-y-5 justify-between my-3 lg:my-7'>
      {fieldsData.map((field, i) => {
        return (
          <>
            <label
              htmlFor={field.label}
              className='font-semibold flex items-center justify-between lg:block'
            >
              {field.label}
              {field.iconPlus && (
                <field.iconPlus className={` lg:hidden mr-3 text-[#717a81]`} />
              )}
            </label>

            {field.hasOwnProperty("iconPlus") && (
              <div className='flex justify-between items-center lg:hidden px-3 py-1 bg-white border border-gray-400 rounded-md'>
                <span>File 1</span>
                <div className='flex text-[#717a81] gap-x-2'>
                  {field.iconEye && <field.iconEye />}
                  {field.iconRemove && <field.iconRemove />}
                </div>
              </div>
            )}
            {field.hasOwnProperty("iconPlus") && (
              <div className='flex justify-between items-center lg:hidden px-3'>
                <div className='flex gap-x-2'>
                  <input
                    type='checkbox'
                    className='w-5 h-5'
                    name='verified'
                    id='verified'
                  />
                  <h5 className='font-semibold'>Verified</h5>
                </div>
                <div className='flex gap-x-2'>
                  <input
                    type='checkbox'
                    className='w-5 h-5'
                    name='Send to Bank'
                    id='Send to Bank'
                  />
                  <h5 className='font-semibold'>Send to Bank</h5>
                </div>
              </div>
            )}

            <div
              key={i}
              className={`${
                field.hasOwnProperty("iconPlus") && "hidden lg:flex"
              } flex items-center justify-between border border-gray-300 bg-white rounded-lg p-2`}
            >
              {/* Hidden Input for File */}
              <input type='file' id={`file-${i}`} className='hidden' />

              {/* Label for Upload Text */}
              <label
                htmlFor={`file-${i}`}
                className='text-[#8f9396] text-sm cursor-pointer'
              >
                {field.placeholder}
              </label>

              {/* Upload Icon */}
              <label
                htmlFor={`file-${i}`}
                className='text-gray-500 hover:text-blue-500 p-1 rounded cursor-pointer'
              >
                <img src={uploadImg} alt='upload img' />
              </label>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UploadData;
