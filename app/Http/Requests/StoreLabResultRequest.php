<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLabResultRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "tgl_pemeriksaan" => ['required','date'],
            "nama_pasien" => ['required'],
            "tgl_lahir" => ['required','date'],
            "alamat" => ['nullable','string'],
            "jenis_kelamin" => ['nullable','string'],
            "umur" => ['nullable','string'],
            "poli" => ['nullable','string'],
            "status_pembayaran" => ['nullable','string'],
            "a_hematologi_hb" => ['nullable','string'],
            "a_hematologi_diffcount" => ['nullable','string'],
            "a_hematologi_leukosit" => ['nullable','string'],
            "a_hematologi_trombosit" => ['nullable','string'],
            "a_hematologi_ht" => ['nullable','string'],
            "a_hematologi_led" => ['nullable','string'],
            "a_hematologi_golongandarah" => ['nullable','string'],
            "b_kimiadarah_glukosadarah" => ['nullable','string'],
            "b_kimiadarah_kolesterol" => ['nullable','string'],
            "b_kimiadarah_asamurat" => ['nullable','string'],
            "c_serologi_widal_o" => ['nullable','string'],
            "c_serologi_widal_ao" => ['nullable','string'],
            "c_serologi_widal_h" => ['nullable','string'],
            "c_serologi_widal_ah" => ['nullable','string'],
            "c_serologi_dengue_iggigm" => ['nullable','string'],
            "c_serologi_dengue_ns1" => ['nullable','string'],
            "c_serologi_malaria" => ['nullable','string'],
            "c_serologi_syphilis" => ['nullable','string'],
            "c_serologi_hbsag" => ['nullable','string'],
            "c_serologi_hiv" => ['nullable','string'],
            "c_serologi_hcv" => ['nullable','string'],
            "c_serologi_teskehamilan" => ['nullable','string'],
            "d_urin_makroskopis_warna" => ['nullable','string'],
            "d_urin_makroskopis_kekeruhan" => ['nullable','string'],
            "d_urin_makroskopis_ph" => ['nullable','string'],
            "d_urin_makroskopis_bjurin" => ['nullable','string'],
            "d_urin_makroskopis_protein" => ['nullable','string'],
            "d_urin_makroskopis_glukosa" => ['nullable','string'],
            "d_urin_makroskopis_bilirubin" => ['nullable','string'],
            "d_urin_makroskopis_urobilinogen" => ['nullable','string'],
            "d_urin_makroskopis_keton" => ['nullable','string'],
            "d_urin_makroskopis_nitrit" => ['nullable','string'],
            "d_urin_makroskopis_leukosit" => ['nullable','string'],
            "d_urin_makroskopis_blood" => ['nullable','string'],
            "d_urin_makroskopis_asamaskorbat" => ['nullable','string'],
            "d_urin_mikroskopis_eritrosit" => ['nullable','string'],
            "d_urin_mikroskopis_leukosit" => ['nullable','string'],
            "d_urin_mikroskopis_epitel" => ['nullable','string'],
            "d_urin_mikroskopis_bakteri" => ['nullable','string'],
            "d_urin_mikroskopis_kristal" => ['nullable','string'],
            "d_urin_mikroskopis_silinder" => ['nullable','string'],
            "d_urin_mikroskopis_jamur" => ['nullable','string'],
            "d_urin_mikroskopis_trichomonas" => ['nullable','string'],
            "d_urin_mikroskopis_sprema" => ['nullable','string'],
            "e_sekret_vagina" => ['nullable','string'],
            "e_sekret_utera" => ['nullable','string'],
            "f_dahak_slide" => ['nullable','string'],
            "f_dahak_tcm" => ['nullable','string'],
            "g_kimiadarah2_ureum" => ['nullable','string'],
            "g_kimiadarah2_kreatinin" => ['nullable','string'],
            "g_kimiadarah2_sgot" => ['nullable','string'],
            "g_kimiadarah2_sgpt" => ['nullable','string'],
            "g_kimiadarah2_hdl" => ['nullable','string'],
            "g_kimiadarah2_ldl" => ['nullable','string'],
            "g_kimiadarah2_trigliserida" => ['nullable','string'],
            "h_urin2_tesnarkoba" => ['nullable','string'],
            "i_lainlain" => ['nullable','string'],
        ];
    }
}
