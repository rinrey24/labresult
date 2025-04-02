<?php

namespace App\Imports;

use App\Models\LabResult;
use Carbon\Carbon;
use Exception;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;
use PhpOffice\PhpSpreadsheet;

class LabResultImport implements ToModel,WithStartRow
{
    public function startRow(): int
    {
       return 2;
    }

    public function model(array $row)
    {
        try {
            if (!is_numeric($row[0])) {
                throw new Exception("Import gagal! Format tanggal pemeriksaan salah!"); 
                exit;
            }
            if (!is_numeric($row[4])) {
                throw new Exception("Import gagal! Format tanggal lahir salah!"); 
                exit;
            }
            return new LabResult([
                'tgl_pemeriksaan' => PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row[0])->format('Y-m-d'),
                'nama_pasien' => $row[1],
                'alamat' => $row[2],
                'jenis_kelamin' => $row[3],
                'tgl_lahir' => PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row[4])->format('Y-m-d'),
                'umur' => $row[5],
                'poli' => $row[6],
                'status_pembayaran' => $row[7],
                'a_hematologi_hb' => $row[8],
                'a_hematologi_diffcount' => $row[9],
                'a_hematologi_leukosit' => $row[10],
                'a_hematologi_trombosit' => $row[11],
                'a_hematologi_ht' => $row[12],
                'a_hematologi_led' => $row[13],
                'a_hematologi_golongandarah' => $row[14],
                'b_kimiadarah_glukosadarah' => $row[15],
                'b_kimiadarah_kolesterol' => $row[16],
                'b_kimiadarah_asamurat' => $row[17],
                'c_serologi_widal_o' => $row[18],
                'c_serologi_widal_ao' => $row[19],
                'c_serologi_widal_h' => $row[20],
                'c_serologi_widal_ah' => $row[21],
                'c_serologi_dengue_iggigm' => $row[22],
                'c_serologi_dengue_ns1' => $row[23],
                'c_serologi_malaria' => $row[24],
                'c_serologi_syphilis' => $row[25],
                'c_serologi_hbsag' => $row[26],
                'c_serologi_hiv' => $row[27],
                'c_serologi_hcv' => $row[28],
                'c_serologi_teskehamilan' => $row[29],
                'd_urin_makroskopis_warna' => $row[30],
                'd_urin_makroskopis_kekeruhan' => $row[31],
                'd_urin_makroskopis_ph' => $row[32],
                'd_urin_makroskopis_bjurin' => $row[33],
                'd_urin_makroskopis_protein' => $row[34],
                'd_urin_makroskopis_glukosa' => $row[35],
                'd_urin_makroskopis_bilirubin' => $row[36],
                'd_urin_makroskopis_urobilinogen' => $row[37],
                'd_urin_makroskopis_keton' => $row[38],
                'd_urin_makroskopis_nitrit' => $row[39],
                'd_urin_makroskopis_leukosit' => $row[40],
                'd_urin_makroskopis_blood' => $row[41],
                'd_urin_makroskopis_asamaskorbat' => $row[42],
                'd_urin_mikroskopis_eritrosit' => $row[43],
                'd_urin_mikroskopis_leukosit' => $row[44],
                'd_urin_mikroskopis_epitel' => $row[45],
                'd_urin_mikroskopis_bakteri' => $row[46],
                'd_urin_mikroskopis_kristal' => $row[47],
                'd_urin_mikroskopis_silinder' => $row[48],
                'd_urin_mikroskopis_jamur' => $row[49],
                'd_urin_mikroskopis_trichomonas' => $row[50],
                'd_urin_mikroskopis_sprema' => $row[51],
                'e_sekret_vagina' => $row[52],
                'e_sekret_utera' => $row[53],
                'f_dahak_slide' => $row[54],
                'f_dahak_tcm' => $row[55],
                'g_kimiadarah2_ureum' => $row[56],
                'g_kimiadarah2_kreatinin' => $row[57],
                'g_kimiadarah2_sgot' => $row[58],
                'g_kimiadarah2_sgpt' => $row[59],
                'g_kimiadarah2_hdl' => $row[60],
                'g_kimiadarah2_ldl' => $row[61],
                'g_kimiadarah2_trigliserida' => $row[62],
                'h_urin2_tesnarkoba' => $row[63],
                'i_lainlain' => $row[64],
            ]);
        } catch (\Exception $e) {
            throw($e);
        }
    }
}
