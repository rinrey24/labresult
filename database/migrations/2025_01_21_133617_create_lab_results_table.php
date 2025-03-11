<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lab_results', function (Blueprint $table) {
            $table->id();
            $table->date('tgl_pemeriksaan')->nullable();
            $table->string('nama_pasien')->nullable();
            $table->string('alamat')->nullable();
            $table->string('jenis_kelamin')->nullable();
            $table->date('tgl_lahir')->nullable();
            $table->string('umur')->nullable();
            $table->string('poli')->nullable();
            $table->string('status_pembayaran')->nullable();
            $table->string('a_hematologi_hb')->nullable();
            $table->string('a_hematologi_diffcount')->nullable();
            $table->string('a_hematologi_leukosit')->nullable();
            $table->string('a_hematologi_trombosit')->nullable();
            $table->string('a_hematologi_ht')->nullable();
            $table->string('a_hematologi_led')->nullable();
            $table->string('a_hematologi_golongandarah')->nullable();
            $table->string('b_kimiadarah_glukosadarah')->nullable();
            $table->string('b_kimiadarah_kolesterol')->nullable();
            $table->string('b_kimiadarah_asamurat')->nullable();
            $table->string('c_serologi_widal_o')->nullable();
            $table->string('c_serologi_widal_ao')->nullable();
            $table->string('c_serologi_widal_h')->nullable();
            $table->string('c_serologi_widal_ah')->nullable();
            $table->string('c_serologi_dengue_iggigm')->nullable();
            $table->string('c_serologi_dengue_ns1')->nullable();
            $table->string('c_serologi_malaria')->nullable();
            $table->string('c_serologi_syphilis')->nullable();
            $table->string('c_serologi_hbsag')->nullable();
            $table->string('c_serologi_hiv')->nullable();
            $table->string('c_serologi_hcv')->nullable();
            $table->string('c_serologi_teskehamilan')->nullable();
            $table->string('d_urin_makroskopis_warna')->nullable();
            $table->string('d_urin_makroskopis_kekeruhan')->nullable();
            $table->string('d_urin_makroskopis_ph')->nullable();
            $table->string('d_urin_makroskopis_bjurin')->nullable();
            $table->string('d_urin_makroskopis_protein')->nullable();
            $table->string('d_urin_makroskopis_glukosa')->nullable();
            $table->string('d_urin_makroskopis_bilirubin')->nullable();
            $table->string('d_urin_makroskopis_urobilinogen')->nullable();
            $table->string('d_urin_makroskopis_keton')->nullable();
            $table->string('d_urin_makroskopis_nitrit')->nullable();
            $table->string('d_urin_makroskopis_leukosit')->nullable();
            $table->string('d_urin_makroskopis_blood')->nullable();
            $table->string('d_urin_makroskopis_asamaskorbat')->nullable();
            $table->string('d_urin_mikroskopis_eritrosit')->nullable();
            $table->string('d_urin_mikroskopis_leukosit')->nullable();
            $table->string('d_urin_mikroskopis_epitel')->nullable();
            $table->string('d_urin_mikroskopis_bakteri')->nullable();
            $table->string('d_urin_mikroskopis_kristal')->nullable();
            $table->string('d_urin_mikroskopis_silinder')->nullable();
            $table->string('d_urin_mikroskopis_jamur')->nullable();
            $table->string('d_urin_mikroskopis_trichomonas')->nullable();
            $table->string('d_urin_mikroskopis_sprema')->nullable();
            $table->string('e_sekret_vagina')->nullable();
            $table->string('e_sekret_utera')->nullable();
            $table->string('f_dahak_slide')->nullable();
            $table->string('f_dahak_tcm')->nullable();
            $table->string('g_kimiadarah2_ureum')->nullable();
            $table->string('g_kimiadarah2_kreatinin')->nullable();
            $table->string('g_kimiadarah2_sgot')->nullable();
            $table->string('g_kimiadarah2_sgpt')->nullable();
            $table->string('g_kimiadarah2_hdl')->nullable();
            $table->string('g_kimiadarah2_ldl')->nullable();
            $table->string('g_kimiadarah2_trigliserida')->nullable();
            $table->string('h_urin2_tesnarkoba')->nullable();
            $table->string('i_lainlain')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lab_results');
    }
};
