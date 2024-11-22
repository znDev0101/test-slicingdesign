const CheckBoxEditAlamat = ({ titleCheckBox }: { titleCheckBox: string }) => {
  return (
    <div className='hidden lg:flex items-center justify-between gap-x-3  mt-5 '>
      <div className='flex items-center gap-x-3'>
        <input
          type='checkbox'
          className='w-3 h-3'
          name='checkBoxKTP'
          id='checkBoxKTP'
        />
        <span>{titleCheckBox}</span>
      </div>
      <button
        type='button'
        className='bg-[#fe0000] text-white font-semibold py-1 lg:py-2 px-4 rounded-md'
      >
        CLEAR
      </button>
    </div>
  );
};

export default CheckBoxEditAlamat;
