import saveIcon from "../../assets/save.png";

import FormInputAlamat from "../../components/edit/FormInputAlamat";

const FormAlamat = () => {
  return (
    <div className='w-[90%] mx-auto lg:bg-white mt-7 rounded-lg p-3'>
      <form className='relative '>
        <div className='flex flex-col gap-y-36 lg:gap-y-5'>
          <FormInputAlamat
            title='Data KTP'
            titleCheckBox='Domisili Sesuai KTP'
          />
          <FormInputAlamat
            title='Data Domisili'
            titleCheckBox='Alamat tempat Bekerja / perusahaan Sesuai KTP'
          />
          {/* check box for mobile */}
          <div className='absolute bottom-[50rem] w-full flex lg:hidden items-center justify-between gap-x-3  mt-5 '>
            <div className='flex items-center gap-x-2'>
              <input
                type='checkbox'
                className='w-4 h-4'
                name='checkBoxKTP'
                id='checkBoxKTP'
              />
              <span className='font-semibold'>Domisili Sesuai KTP</span>
            </div>
            <button
              type='button'
              className='bg-[#fe0000] text-white font-semibold py-2 lg:py-2 px-4 rounded-md'
            >
              CLEAR
            </button>
          </div>
          <div className='absolute bottom-[46rem] flex lg:hidden items-center justify-between gap-x-3  mt-5 '>
            <div className='flex items-center gap-x-2'>
              <input
                type='checkbox'
                className='w-4 h-4'
                name='checkBoxKTP'
                id='checkBoxKTP'
              />
              <span className='font-semibold'>
                Alamat tempat bekerja / perusahaan sesuai KTP
              </span>
            </div>
            <button
              type='button'
              className='bg-[#fe0000] text-white font-semibold py-2 lg:py-2 px-4 rounded-md'
            >
              CLEAR
            </button>
          </div>
          <FormInputAlamat
            title='Data Alamat Tempat Bekerja'
            titleCheckBox='Alamat tempat Bekerja / perusahaan Sesuai KTP'
          />
        </div>

        <button
          type='submit'
          className='lg:absolute right-7 -bottom-16 mt-5 w-40 mx-auto flex items-center justify-center gap-x-3 bg-[#005274] text-white py-1 px-4 font-semibold rounded-md '
        >
          <img src={saveIcon} alt='img save' className='w-7 h-7' />
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default FormAlamat;
