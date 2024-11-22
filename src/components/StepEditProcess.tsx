import { useLocation } from "react-router-dom";

const StepEditProcess = ({
  widthStepProcess,
  widthEndStepProcess,
}: {
  widthStepProcess: string;
  widthEndStepProcess: string;
}) => {
  const dataEditProcess = [
    "Informasi Asset",
    "Informasi  Tambahan",
    "Upload Dokumen",
    "Review",
    "Pilihan Product & Bank",
    "Bank Officer",
    "Surat Keterangan",
    "PDF CPA",
    "Summary",
  ];

  const location = useLocation();

  return (
    <div className='hidden lg:flex flex-col gap-y-3 bg-white h-[150px] px-5'>
      <div className='flex mt-7 mx-8'>
        <div
          className={`h-[.4rem] bg-[#1e5870]`}
          style={{
            width: widthStepProcess,
          }}
        ></div>
        <div
          className={` h-[.4rem] bg-[#c1c1c1]`}
          style={{
            width: widthEndStepProcess,
          }}
        ></div>
      </div>
      <div className='flex justify-center gap-x-10'>
        <div className='relative'>
          <span className='text-[#1e5870] font-semibold text-sm'>Pinjaman</span>
          <div className='absolute -top-6 left-1/2 -translate-x-1/2 transform w-5 h-5 rounded-full bg-[#1e5870]'></div>
        </div>
        <div className='relative'>
          <span className='text-[#1e5870] font-semibold text-sm'>
            Pekerjaan
          </span>
          <div className='absolute -top-6 left-1/2 -translate-x-1/2 transform w-5 h-5 rounded-full bg-[#1e5870]'></div>
        </div>
        <div className='relative'>
          <span
            className={`${
              location.pathname === "/edit/alamat"
                ? "text-[#17a9e2]"
                : "text-[#1e5870]"
            }  font-semibold text-sm`}
          >
            Alamat
          </span>
          <div
            className={`absolute -top-6 left-1/2 -translate-x-1/2 transform w-5 h-5 rounded-full  ${
              location.pathname === "/edit/alamat"
                ? "bg-[#17a9e2]"
                : "bg-[#1e5870]"
            } `}
          ></div>
        </div>
        {dataEditProcess.map((data: string, i: number) => {
          return (
            <div className='relative flex flex-col items-center' key={i}>
              <span
                className={` text-center text-sm font-semibold ${
                  i >= dataEditProcess.indexOf("Review") && "text-[#c1c1c1]"
                } ${
                  i < dataEditProcess.indexOf("Upload Dokumen") &&
                  location.pathname === "/edit/uploaddokumen" &&
                  "text-[#1e5870]"
                } ${
                  location.pathname === "/edit/uploaddokumen" &&
                  "text-[#17a9e2]"
                } ${
                  location.pathname === "/edit/alamat" &&
                  i < dataEditProcess.length &&
                  "text-[#c1c1c1]"
                } 
              `}
              >
                {data}
              </span>
              <div
                className={`absolute -top-6 left-1/2 -translate-x-1/2 transform w-5 h-5 rounded-full ${
                  i >= dataEditProcess.indexOf("Review") && "bg-[#c1c1c1]"
                } ${
                  i < dataEditProcess.indexOf("Upload Dokumen") &&
                  location.pathname === "/edit/uploaddokumen" &&
                  "bg-[#1e5870]"
                } ${
                  location.pathname === "/edit/uploaddokumen" && "bg-[#17a9e2]"
                } ${
                  location.pathname === "/edit/alamat" &&
                  i < dataEditProcess.length &&
                  "bg-[#c1c1c1]"
                } `}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepEditProcess;
