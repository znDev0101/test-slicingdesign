import saveIcon from "../../assets/save.png";

import FormInputAlamat from "../../components/edit/FormInputAlamat";

const FormAlamat = () => {
  return (
    <div className='w-[90%] mx-auto lg:bg-white mt-2 lg:mt-10 rounded-lg p-3'>
      <form className='relative '>
        <div className='flex flex-col gap-y-10 lg:gap-y-5'>
          <FormInputAlamat
            title='Data KTP'
            titleCheckBox='Domisili Sesuai KTP'
          />
          <FormInputAlamat
            title='Data Domisili'
            titleCheckBox='Alamat tempat Bekerja / perusahaan Sesuai KTP'
          />

          <FormInputAlamat
            title='Data Alamat Tempat Bekerja'
            titleCheckBox='Alamat tempat Bekerja / perusahaan Sesuai KTP'
          />
        </div>

        <button
          type='submit'
          className='lg:absolute right-7 -bottom-16 mt-5 w-40 mx-auto flex items-center justify-center gap-x-3 bg-[#005274] text-white py-1 px-4 font-semibold rounded-md'
        >
          <img src={saveIcon} alt='img save' className='w-7 h-7' />
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default FormAlamat;
