import InputUploadDokumen from "./InputUploadDokumen";
import saveIcon from "../../assets/save.png";

const LayoutUploadDokumen = () => {
  return (
    <div className='max-w-[67rem] relative mt-8 py-3 mx-auto bg-[#f6f6f6] lg:bg-white rounded-lg'>
      <form>
        <InputUploadDokumen />
        <button
          type='submit'
          className='mx-auto lg:ml-auto lg:mr-8 my-6 flex items-center justify-end gap-x-3 px-10 lg:px-3 py-1 bg-[#005274] text-white font-semibold rounded-sm'
        >
          <img src={saveIcon} alt='img save' className='w-7 h-7' />
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default LayoutUploadDokumen;
