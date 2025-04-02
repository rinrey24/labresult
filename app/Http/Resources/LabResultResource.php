<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LabResultResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return [
        //     'id' => $this->id,
        //     'patientid' => $this->patientid,
        //     'patientname' => $this->patientname,
        //     'date_of_birth' => $this->date_of_birth,
        //     'testcode' => $this->testcode,
        //     'testname' => $this->testname,
        //     'result' => $this->result,
        //     'flag' => $this->flag,
        //     'reference' => $this->reference,
        //     'comment' => $this->comment,
        //     'created_at' => (new Carbon($this->created_at))->format('Y-m-d H:i:s'),
        //     'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d H:i:s'),
        // ];

        return [
            'id' => $this->id,
            'tgl_pemeriksaan' => $this->tgl_pemeriksaan,
            'nama_pasien' => $this->nama_pasien,
            'alamat' => $this->alamat,
            'jenis_kelamin' => $this->jenis_kelamin,
            'tgl_lahir' => $this->tgl_lahir,
            'umur' => $this->umur,
            'poli' => $this->poli,
            'status_pembayaran' => $this->status_pembayaran,
            'a_hematologi_hb' => $this->a_hematologi_hb,
            'a_hematologi_diffcount' => $this->a_hematologi_diffcount,
            'a_hematologi_leukosit' => $this->a_hematologi_leukosit,
            'a_hematologi_trombosit' => $this->a_hematologi_trombosit,
            'a_hematologi_ht' => $this->a_hematologi_ht,
            'a_hematologi_led' => $this->a_hematologi_led,
            'a_hematologi_golongandarah' => $this->a_hematologi_golongandarah,
            'b_kimiadarah_glukosadarah' => $this->b_kimiadarah_glukosadarah,
            'b_kimiadarah_kolesterol' => $this->b_kimiadarah_kolesterol,
            'b_kimiadarah_asamurat' => $this->b_kimiadarah_asamurat,
            'c_serologi_widal_o' => $this->c_serologi_widal_o,
            'c_serologi_widal_ao' => $this->c_serologi_widal_ao,
            'c_serologi_widal_h' => $this->c_serologi_widal_h,
            'c_serologi_widal_ah' => $this->c_serologi_widal_ah,
            'c_serologi_dengue_iggigm' => $this->c_serologi_dengue_iggigm,
            'c_serologi_dengue_ns1' => $this->c_serologi_dengue_ns1,
            'c_serologi_malaria' => $this->c_serologi_malaria,
            'c_serologi_syphilis' => $this->c_serologi_syphilis,
            'c_serologi_hbsag' => $this->c_serologi_hbsag,
            'c_serologi_hiv' => $this->c_serologi_hiv,
            'c_serologi_hcv' => $this->c_serologi_hcv,
            'c_serologi_teskehamilan' => $this->c_serologi_teskehamilan,
            'd_urin_makroskopis_warna' => $this->d_urin_makroskopis_warna,
            'd_urin_makroskopis_kekeruhan' => $this->d_urin_makroskopis_kekeruhan,
            'd_urin_makroskopis_ph' => $this->d_urin_makroskopis_ph,
            'd_urin_makroskopis_bjurin' => $this->d_urin_makroskopis_bjurin,
            'd_urin_makroskopis_protein' => $this->d_urin_makroskopis_protein,
            'd_urin_makroskopis_glukosa' => $this->d_urin_makroskopis_glukosa,
            'd_urin_makroskopis_bilirubin' => $this->d_urin_makroskopis_bilirubin,
            'd_urin_makroskopis_urobilinogen' => $this->d_urin_makroskopis_urobilinogen,
            'd_urin_makroskopis_keton' => $this->d_urin_makroskopis_keton,
            'd_urin_makroskopis_nitrit' => $this->d_urin_makroskopis_nitrit,
            'd_urin_makroskopis_leukosit' => $this->d_urin_makroskopis_leukosit,
            'd_urin_makroskopis_blood' => $this->d_urin_makroskopis_blood,
            'd_urin_makroskopis_asamaskorbat' => $this->d_urin_makroskopis_asamaskorbat,
            'd_urin_mikroskopis_eritrosit' => $this->d_urin_mikroskopis_eritrosit,
            'd_urin_mikroskopis_leukosit' => $this->d_urin_mikroskopis_leukosit,
            'd_urin_mikroskopis_epitel' => $this->d_urin_mikroskopis_epitel,
            'd_urin_mikroskopis_bakteri' => $this->d_urin_mikroskopis_bakteri,
            'd_urin_mikroskopis_kristal' => $this->d_urin_mikroskopis_kristal,
            'd_urin_mikroskopis_silinder' => $this->d_urin_mikroskopis_silinder,
            'd_urin_mikroskopis_jamur' => $this->d_urin_mikroskopis_jamur,
            'd_urin_mikroskopis_trichomonas' => $this->d_urin_mikroskopis_trichomonas,
            'd_urin_mikroskopis_sprema' => $this->d_urin_mikroskopis_sprema,
            'e_sekret_vagina' => $this->e_sekret_vagina,
            'e_sekret_utera' => $this->e_sekret_utera,
            'f_dahak_slide' => $this->f_dahak_slide,
            'f_dahak_tcm' => $this->f_dahak_tcm,
            'g_kimiadarah2_ureum' => $this->g_kimiadarah2_ureum,
            'g_kimiadarah2_kreatinin' => $this->g_kimiadarah2_kreatinin,
            'g_kimiadarah2_sgot' => $this->g_kimiadarah2_sgot,
            'g_kimiadarah2_sgpt' => $this->g_kimiadarah2_sgpt,
            'g_kimiadarah2_hdl' => $this->g_kimiadarah2_hdl,
            'g_kimiadarah2_ldl' => $this->g_kimiadarah2_ldl,
            'g_kimiadarah2_trigliserida' => $this->g_kimiadarah2_trigliserida,
            'h_urin2_tesnarkoba' => $this->h_urin2_tesnarkoba,
            'i_lainlain' => $this->i_lainlain,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d H:i:s'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d H:i:s'),
        ];
    }
}
