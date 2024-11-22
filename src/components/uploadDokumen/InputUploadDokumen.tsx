import { IoCaretDownOutline } from "react-icons/io5";
import UploadData from "./UploadData";

const InputUploadDokumen = () => {
  const fieldsDataKTP = [
    {
      label: "Fotokopi KTP Pemohon",
      placeholder: "--Upload Fotokopi KTP Pemohon--",
    },
    {
      label: "Fotokopi KTP Suami / Istri",
      placeholder: "--Upload Fotokopi KTP Suami / Istri--",
    },
    {
      label: "Fotokopi Kartu Keluarga",
      placeholder: "--Upload Fotokopi Kartu Keluarga--",
    },
    {
      label: "Fotokopi Akte Nikah/Cerai",
      placeholder: "--Upload Fotokopi Akte Nikah/Cerai--",
    },
    {
      label: "Fotokopi NPWP Pemohon",
      placeholder: "--Upload Fotokopi NPWP Pemohon--",
    },
    {
      label:
        "Akta Pisah Harga Notaril dan didaftarkan ke KUA atau catatan sipil (Jika Ada)",
      placeholder: "--Upload Akta Pisah Harga Notaril--",
    },
  ];

  const fieldsDataJaminan = [
    {
      label: "Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir",
      placeholder: "--Upload Fotokopi Dokumen Jaminan--",
    },
    {
      label:
        "Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan",
      placeholder: "--Upload PDF Surat Pengajuan Bank--",
    },
    {
      label: "Fotokopi Perjanjian Kredit (Jika Over Kredit)",
      placeholder: "--Upload Fotokopi Perjanjian Kredit--",
    },
    {
      label: "Dokumen PPJB (Jika Developer)",
      placeholder: "--Upload Dokumen PPJB--",
    },
  ];
  const fieldsDataKeuangan = [
    {
      label: "Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir",
      placeholder: "--Upload Fotokopi SPT / PPh21--",
    },
    {
      label: "Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir",
      placeholder: "--Upload Asli Slip Gaji 1 Bulan Terakhir--",
    },
    {
      label: "Fotokopi R/K atau tabungan 6 bulan terakhir",
      placeholder: "--Upload Fotokopi R/K 6 Bulan Terakhir--",
    },
    {
      label: "Surat Keterangan / Rekomendasi Perusahaan",
      placeholder: "--Upload Surat Keterangan Perusahaan--",
    },
  ];
  const fieldsDataTambahan = [
    {
      label: "File Kekurangan 1",
      placeholder: "--Upload File Kekurangan 1--",
    },
    {
      label: "File Kekurangan 2",
      placeholder: "--Upload File Kekurangan 2--",
    },
  ];
  return (
    <div className='w-[90%] lg:w-[95%] mx-auto lg:pt-5'>
      <div className='border border-gray-600'>
        <div className='bg-[#005274] flex items-center gap-x-5 py-4 px-5 text-white'>
          <IoCaretDownOutline className='text-xl' />
          <h1 className='font-semibold text-xl'>Data Pribadi</h1>
        </div>
        <UploadData fieldsData={fieldsDataKTP} />
      </div>
      <div className='border border-gray-600 mt-10'>
        <div className='bg-[#005274] flex items-center gap-x-5 py-4 px-5 text-white'>
          <IoCaretDownOutline className='text-xl' />
          <h1 className='font-semibold text-xl'>Data Jaminan</h1>
        </div>
        <UploadData fieldsData={fieldsDataJaminan} />
      </div>
      <div className='border border-gray-600 mt-10'>
        <div className='bg-[#005274] flex items-center gap-x-5 py-4 px-5 text-white'>
          <IoCaretDownOutline className='text-xl' />
          <h1 className='font-semibold text-xl'>Data Keuangan</h1>
        </div>
        <UploadData fieldsData={fieldsDataKeuangan} />
      </div>
      <div className='border border-gray-600 mt-10'>
        <div className='bg-[#005274] flex items-center gap-x-5 py-4 px-5 text-white'>
          <IoCaretDownOutline className='text-xl' />
          <h1 className='font-semibold text-xl'>Data Tambahan</h1>
        </div>
        <UploadData fieldsData={fieldsDataTambahan} />
      </div>
    </div>
  );
};

export default InputUploadDokumen;
