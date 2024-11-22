import EditNavigasi from "../EditNavigasi";
import StepEditProcess from "../StepEditProcess";
import LayoutUploadDokumen from "./LayoutUploadDokumen";

const UploadDokumen = () => {
  return (
    <>
      <StepEditProcess
        widthStepProcess={"900px"}
        widthEndStepProcess={"100%"}
      />
      <EditNavigasi
        titleNavigasi='Upload Dokumen'
        subTitleForMobile='6/12 Step'
        description='Silahkan upload dokumen yang dibutuhkan'
      />
      <LayoutUploadDokumen />
    </>
  );
};

export default UploadDokumen;
