import uploadImg from "../../assets/uploadImg.png";

interface UploadDataProps {
  label: string;
  placeholder: string;
}

const UploadData = ({ fieldsData }: { fieldsData: UploadDataProps[] }) => {
  return (
    <div className='w-[95%] mx-auto flex flex-col lg:grid grid-cols-2 lg:items-center gap-y-5 justify-between my-3 lg:my-7'>
      {fieldsData.map((field, i) => {
        return (
          <>
            <label htmlFor={field.label} className='font-semibold'>
              {field.label}
            </label>
            <div
              key={i}
              className='flex items-center justify-between border border-gray-300 bg-white rounded-lg p-2'
            >
              {/* Hidden Input for File */}
              <input type='file' id={`file-${i}`} className='hidden' />

              {/* Label for Upload Text */}
              <label
                htmlFor={`file-${i}`}
                className='text-gray-600 text-sm cursor-pointer'
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
