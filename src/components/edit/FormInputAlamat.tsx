import CheckBoxEditAlamat from "../ui/CheckBoxEditAlamat";

interface PropsFormInputAlamat {
  title: string;
  titleCheckBox: string;
}
const FormInputAlamat = ({ title, titleCheckBox }: PropsFormInputAlamat) => {
  return (
    <div className={`w-full relative mx-auto lg:mt-5 border border-gray-300`}>
      <div className='bg-[#005274] py-4'>
        <h1 className='text-white font-semibold ms-5 text-2xl'>{title}</h1>
      </div>
      <div className='w-[95%] mx-auto my-3 relative'>
        <div className='flex flex-col gap-y-5  lg:flex-row justify-between gap-x-10 w-full my-5'>
          <div className='w-full flex flex-col gap-y-5'>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='Alamat' className='font-semibold'>
                Alamat lengkap (Jalan , Komplek, RT/RW)
              </label>
              <input
                type='text'
                placeholder='--isi alamat lengkap--'
                className='border border-gray-500 rounded-md px-4 py-1'
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='Alamat' className='font-semibold'>
                Provinsi
              </label>
              <select
                id='provinsi'
                className='border border-gray-500 rounded-md  px-4 py-1'
              >
                <option defaultValue={"--Pilih Provinsi--"}>
                  -- Pilih Provinsi --
                </option>
              </select>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='Alamat' className='font-semibold'>
                Kecamatan
              </label>
              <select
                id='provinsi'
                className='border border-gray-500 rounded-md  px-4 py-1'
              >
                <option defaultValue={"--Pilih Kecamatan--"}>
                  -- Pilih Kecamatan --
                </option>
              </select>
            </div>
          </div>
          <div className=' w-full flex flex-col gap-y-5'>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='Alamat' className='font-semibold'>
                Alamat lengkap (Jalan , Komplek, RT/RW)
              </label>
              <input
                type='text'
                placeholder='--isi alamat lengkap--'
                className='border border-gray-500 rounded-md px-4 py-1'
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='Alamat' className='font-semibold'>
                Provinsi
              </label>
              <select
                id='provinsi'
                className='border border-gray-500  rounded-md  px-4 py-1'
              >
                <option defaultValue={"--Pilih Provinsi--"}>
                  -- Pilih Provinsi --
                </option>
              </select>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='Alamat' className='font-semibold'>
                Kecamatan
              </label>
              <select
                id='provinsi'
                className='border border-gray-500 rounded-md  px-4 py-1'
              >
                <option defaultValue={"--Pilih Kecamatan--"}>
                  -- Pilih Kecamatan --
                </option>
              </select>
            </div>
          </div>
        </div>
        {title !== "Data Alamat Tempat Bekerja" && (
          <CheckBoxEditAlamat titleCheckBox={titleCheckBox} />
        )}
      </div>
    </div>
  );
};

export default FormInputAlamat;
