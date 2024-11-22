import StepEditProcess from "../StepEditProcess";
import EditNavigasi from "../EditNavigasi";
import FormAlamat from "./FormAlamat";

const EditAlamat = () => {
  return (
    <div className='bg-[#f6f6f6]'>
      <StepEditProcess widthStepProcess={"200px"} widthEndStepProcess={"80%"} />
      <EditNavigasi titleNavigasi={"Alamat"} subTitleForMobile={"3/12 Step"} />
      <FormAlamat />
    </div>
  );
};

export default EditAlamat;
