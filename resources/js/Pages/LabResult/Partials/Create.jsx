import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Select } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create(auth){
    const {data,setData,post,errors,reset} = useForm({
        tgl_pemeriksaan : '',
        nama_pasien : '',
        alamat : '',
        jenis_kelamin : '',
        tgl_lahir : '',
        umur : '',
        poli : '',
        status_pembayaran : '',
        a_hematologi_hb : '',
        a_hematologi_diffcount : '',
        a_hematologi_leukosit : '',
        a_hematologi_trombosit : '',
        a_hematologi_ht : '',
        a_hematologi_led : '',
        a_hematologi_golongandarah : '',
        b_kimiadarah_glukosadarah : '',
        b_kimiadarah_kolesterol : '',
        b_kimiadarah_asamurat : '',
        c_serologi_widal_o : '',
        c_serologi_widal_ao : '',
        c_serologi_widal_h : '',
        c_serologi_widal_ah : '',
        c_serologi_dengue_iggigm : '',
        c_serologi_dengue_ns1 : '',
        c_serologi_malaria : '',
        c_serologi_syphilis : '',
        c_serologi_hbsag : '',
        c_serologi_hiv : '',
        c_serologi_hcv : '',
        c_serologi_teskehamilan : '',
        d_urin_makroskopis_warna : '',
        d_urin_makroskopis_kekeruhan : '',
        d_urin_makroskopis_ph : '',
        d_urin_makroskopis_bjurin : '',
        d_urin_makroskopis_protein : '',
        d_urin_makroskopis_glukosa : '',
        d_urin_makroskopis_bilirubin : '',
        d_urin_makroskopis_urobilinogen : '',
        d_urin_makroskopis_keton : '',
        d_urin_makroskopis_nitrit : '',
        d_urin_makroskopis_leukosit : '',
        d_urin_makroskopis_blood : '',
        d_urin_makroskopis_asamaskorbat : '',
        d_urin_mikroskopis_eritrosit : '',
        d_urin_mikroskopis_leukosit : '',
        d_urin_mikroskopis_epitel : '',
        d_urin_mikroskopis_bakteri : '',
        d_urin_mikroskopis_kristal : '',
        d_urin_mikroskopis_silinder : '',
        d_urin_mikroskopis_jamur : '',
        d_urin_mikroskopis_trichomonas : '',
        d_urin_mikroskopis_sprema : '',
        e_sekret_vagina : '',
        e_sekret_utera : '',
        f_dahak_slide : '',
        f_dahak_tcm : '',
        g_kimiadarah2_ureum : '',
        g_kimiadarah2_kreatinin : '',
        g_kimiadarah2_sgot : '',
        g_kimiadarah2_sgpt : '',
        g_kimiadarah2_hdl : '',
        g_kimiadarah2_ldl : '',
        g_kimiadarah2_trigliserida : '',
        h_urin2_tesnarkoba : '',
        i_lainlain : ''
    })

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("labresult.store"))
    }

    return (
        <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200 flex">
                Tambah Baru Hasil
            </h2>
        }
        >
            <Head title="Tambah Baru Hasil" />

        <div className="py-6">
            <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                    <div className="p-4 text-gray-900 dark:text-gray-100">
                        <form 
                        onSubmit={onSubmit}
                        className="p-4 sm:p-8 bh-white bh-white dark:bh-gray-800 shadow sm:rounded-lg">
                            <div>
                            <h2 className="mb-3 text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200 flex">
               <u>Data Pasien</u>
            </h2>
                                <InputLabel htmlFor="tgl_pemeriksaan" value="Tanggal Pemeriksaan"/>
                                 <TextInput
                                 id="tgl_pemeriksaan" 
                                 type="date"
                                 name="tgl_pemeriksaan"
                                 //value={data.name}
                                 className="mt-1 block w-full"
                                 isFocused={true}
                                 required
                                 onChange={(e) => setData("tgl_pemeriksaan", e.target.value)}
                                  />

<div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
<div className="sm:col-span-3">
<InputLabel className="mt-5" htmlFor="nama_pasien" value="Nama Pasien"/>
                                 <TextInput
                                 id="nama_pasien" 
                                 type="text"
                                 name="nama_pasien"
                                 value={data.nama_pasien}
                                 className="mt-1 block w-full"
                                 required
                                 onChange={(e) => setData("nama_pasien", e.target.value)}
                                  />
                                  </div>

                                  <div className="sm:col-span-3">
                                  <InputLabel className="mt-5" htmlFor="jenis_kelamin" value="Jenis Kelamin"/>
                                  <Select
                                   id="jenis_kelamin" 
                                   name="jenis_kelamin"
                                   value={data.jenis_kelamin}
                                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-amber-600 dark:focus:ring-amber-600"
                                   onChange={(e) => setData("jenis_kelamin", e.target.value)}
                                  >
                                    <option value=""></option>
                                    <option value="L">L</option>
                                    <option value="P">P</option>
                                  </Select>
                                  </div>
              </div>

                                <InputLabel className="mt-5" htmlFor="alamat" value="Alamat"/>
                                 <TextInput
                                 id="alamat" 
                                 type="text"
                                 name="alamat"
                                 value={data.alamat}
                                 className="mt-1 block w-full"
                                 onChange={(e) => setData("alamat", e.target.value)}
                                  />
                                  
                                

<div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
<div className="sm:col-span-3">
                                <InputLabel className="mt-5" htmlFor="tgl_lahir" value="Tanggal Lahir"/>
                                 <TextInput
                                 id="tgl_lahir" 
                                 type="date"
                                 name="tgl_lahir"
                                 //value={data.name}
                                 className="mt-1 block w-full"
                                 required
                                 onChange={(e) => setData("tgl_lahir", e.target.value)}
                                  />
                                  </div>

                                  <div className="sm:col-span-3">
                                  <InputLabel className="mt-5" htmlFor="umur" value="Umur"/>
                                  <TextInput
                                  id="umur" 
                                  type="text"
                                  name="umur"
                                  value={data.umur}
                                  className="mt-1 block w-full"
                                  onChange={(e) => setData("umur", e.target.value)}
                                  />
                                  </div>
              </div>

              <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
<div className="sm:col-span-3">
<InputLabel className="mt-5" htmlFor="poli" value="Poli"/>
                                <TextInput
                                id="poli" 
                                type="text"
                                name="poli"
                                value={data.poli}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("poli", e.target.value)}
                                />
                                  </div>

                                  <div className="sm:col-span-3">
                                  <InputLabel className="mt-5" htmlFor="status_pembayaran" value="Status Pembayaran"/>
                                <TextInput
                                id="status_pembayaran" 
                                type="text"
                                name="status_pembayaran"
                                value={data.status_pembayaran}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("status_pembayaran", e.target.value)}
                                />
                                  </div>
              </div>

                <hr className="mt-7 mb-7"></hr>
                              
                              
                            <h2 className="mb-5 text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200 flex">
               <u>Data Pemeriksaan</u></h2>

               
               <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-pink-400 flex">
               Hematologi</h2>

               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="a_hematologi_hb" value="Hb"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Hb"
                                id="a_hematologi_hb" 
                                type="text"
                                name="a_hematologi_hb"
                                value={data.a_hematologi_hb}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("a_hematologi_hb", e.target.value)}
                                />
                                  </div>

                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="a_hematologi_diffcount" value="Diffcount"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Diffcount"
                                id="a_hematologi_diffcount" 
                                type="text"
                                name="a_hematologi_diffcount"
                                value={data.a_hematologi_diffcount}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("a_hematologi_diffcount", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="a_hematologi_leukosit" value="Leukosit"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Leukosit"
                                id="a_hematologi_leukosit" 
                                type="text"
                                name="a_hematologi_leukosit"
                                value={data.a_hematologi_leukosit}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("a_hematologi_leukosit", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="a_hematologi_trombosit" value="Trombosit"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Trombosit"
                                id="a_hematologi_trombosit" 
                                type="text"
                                name="a_hematologi_trombosit"
                                value={data.a_hematologi_trombosit}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("a_hematologi_trombosit", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="a_hematologi_ht" value="HT"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="HT"
                                id="a_hematologi_ht" 
                                type="text"
                                name="a_hematologi_ht"
                                value={data.a_hematologi_ht}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("a_hematologi_ht", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="a_hematologi_led" value="LED"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="LED"
                                id="a_hematologi_led" 
                                type="text"
                                name="a_hematologi_led"
                                value={data.a_hematologi_led}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("a_hematologi_led", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="a_hematologi_golongandarah" value="Golongan Darah"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Golongan Darah"
                                id="a_hematologi_golongandarah" 
                                type="text"
                                name="a_hematologi_golongandarah"
                                value={data.a_hematologi_golongandarah}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("a_hematologi_golongandarah", e.target.value)}
                                />
                                  </div>
              </div>

              <h2 className="mt-5 text-xl font-semibold leading-tight text-gray-800 dark:text-blue-400 flex">
               Kimia Darah</h2>

               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="b_kimiadarah_glukosadarah" value="Glukosa Darah"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Glukosa Darah"
                                id="b_kimiadarah_glukosadarah" 
                                type="text"
                                name="b_kimiadarah_glukosadarah"
                                value={data.b_kimiadarah_glukosadarah}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("b_kimiadarah_glukosadarah", e.target.value)}
                                />
                                  </div>

                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="b_kimiadarah_kolesterol" value="Kolesterol"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Kolesterol"
                                id="b_kimiadarah_kolesterol" 
                                type="text"
                                name="b_kimiadarah_kolesterol"
                                value={data.b_kimiadarah_kolesterol}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("b_kimiadarah_kolesterol", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="b_kimiadarah_asamurat" value="Asam Urat"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Asam Urat"
                                id="b_kimiadarah_asamurat" 
                                type="text"
                                name="b_kimiadarah_asamurat"
                                value={data.b_kimiadarah_asamurat}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("b_kimiadarah_asamurat", e.target.value)}
                                />
                                  </div>
              </div>


              <h2 className="mt-5 text-xl font-semibold leading-tight text-gray-800 dark:text-yellow-400 flex">
               Serologi</h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="c_serologi_widal_o" value="Widal O"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Widal O"
                                id="c_serologi_widal_o" 
                                type="text"
                                name="c_serologi_widal_o"
                                value={data.c_serologi_widal_o}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_widal_o", e.target.value)}
                                />
                                  </div>

                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="c_serologi_widal_ao" value="Widal AO"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Widal AO"
                                id="c_serologi_widal_ao" 
                                type="text"
                                name="c_serologi_widal_ao"
                                value={data.c_serologi_widal_ao}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_widal_ao", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="c_serologi_widal_h" value="Widal H"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Widal H"
                                id="c_serologi_widal_h" 
                                type="text"
                                name="c_serologi_widal_h"
                                value={data.c_serologi_widal_h}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_widal_h", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="c_serologi_widal_ah" value="Widal AH"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Widal AH"
                                id="c_serologi_widal_ah" 
                                type="text"
                                name="c_serologi_widal_ah"
                                value={data.c_serologi_widal_ah}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_widal_ah", e.target.value)}
                                />
                                  </div>
              </div>

              <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="c_serologi_dengue_iggigm" value="Dengue IgG/IgM"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Dengue IgG/IgM"
                                id="c_serologi_dengue_iggigm" 
                                type="text"
                                name="c_serologi_dengue_iggigm"
                                value={data.c_serologi_dengue_iggigm}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_dengue_iggigm", e.target.value)}
                                />
                                  </div>

                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="c_serologi_dengue_ns1" value="Dengue NS1"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Dengue NS1"
                                id="c_serologi_dengue_ns1" 
                                type="text"
                                name="c_serologi_dengue_ns1"
                                value={data.c_serologi_dengue_ns1}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_dengue_ns1", e.target.value)}
                                />
                                  </div>  
              </div>

              <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="c_serologi_malaria" value="Malaria"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Malaria"
                                id="c_serologi_malaria" 
                                type="text"
                                name="c_serologi_malaria"
                                value={data.c_serologi_malaria}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_malaria", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="c_serologi_syphilis" value="Syphilis"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Syphilis"
                                id="c_serologi_syphilis" 
                                type="text"
                                name="c_serologi_syphilis"
                                value={data.c_serologi_syphilis}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_syphilis", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="c_serologi_hbsag" value="HBsAg"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="HBsAg"
                                id="c_serologi_hbsag" 
                                type="text"
                                name="c_serologi_hbsag"
                                value={data.c_serologi_hbsag}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_hbsag", e.target.value)}
                                />
                                  </div> 
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="c_serologi_hiv" value="HIV"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="HIV"
                                id="c_serologi_hiv" 
                                type="text"
                                name="c_serologi_hiv"
                                value={data.c_serologi_hiv}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_hiv", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="c_serologi_hcv" value="HCV"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="HCV"
                                id="c_serologi_hcv" 
                                type="text"
                                name="c_serologi_hcv"
                                value={data.c_serologi_hcv}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_hcv", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="c_serologi_teskehamilan" value="Tes Kehamilan (PP Test)"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Tes "
                                id="c_serologi_teskehamilan" 
                                type="text"
                                name="c_serologi_teskehamilan"
                                value={data.c_serologi_teskehamilan}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("c_serologi_teskehamilan", e.target.value)}
                                />
                                  </div>  
              </div>

              
              <h2 className="mt-5 text-xl font-semibold leading-tight text-gray-800 dark:text-amber-600 flex">
              Urin rutin / Lengkap</h2>

              <h2 className="mt-5 text-md font-semibold leading-tight text-gray-800 dark:text-gray-200 flex">
              Makroskopis</h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-7">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="d_urin_makroskopis_warna" value="Warna"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Warna"
                                id="d_urin_makroskopis_warna" 
                                type="text"
                                name="d_urin_makroskopis_warna"
                                value={data.d_urin_makroskopis_warna}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_warna", e.target.value)}
                                />
                                  </div>

                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_kekeruhan" value="Kekeruhan"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Kekeruhan"
                                id="d_urin_makroskopis_kekeruhan" 
                                type="text"
                                name="d_urin_makroskopis_kekeruhan"
                                value={data.d_urin_makroskopis_kekeruhan}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_kekeruhan", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_ph" value="pH"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="pH"
                                id="d_urin_makroskopis_ph" 
                                type="text"
                                name="d_urin_makroskopis_ph"
                                value={data.d_urin_makroskopis_ph}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_ph", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_bjurin" value="BJ Urin"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="BJ Urin"
                                id="d_urin_makroskopis_bjurin" 
                                type="text"
                                name="d_urin_makroskopis_bjurin"
                                value={data.d_urin_makroskopis_bjurin}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_bjurin", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_protein" value="Protein"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Protein"
                                id="d_urin_makroskopis_protein" 
                                type="text"
                                name="d_urin_makroskopis_protein"
                                value={data.d_urin_makroskopis_protein}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_protein", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_glukosa" value="Glukosa"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Glukosa"
                                id="d_urin_makroskopis_glukosa" 
                                type="text"
                                name="d_urin_makroskopis_glukosa"
                                value={data.d_urin_makroskopis_glukosa}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_glukosa", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_bilirubin" value="Bilirubin"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Bilirubin"
                                id="d_urin_makroskopis_bilirubin" 
                                type="text"
                                name="d_urin_makroskopis_bilirubin"
                                value={data.d_urin_makroskopis_bilirubin}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_bilirubin", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_urobilinogen" value="Urobilinogen"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Urobilinogen"
                                id="d_urin_makroskopis_urobilinogen" 
                                type="text"
                                name="d_urin_makroskopis_urobilinogen"
                                value={data.d_urin_makroskopis_urobilinogen}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_urobilinogen", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_keton" value="Keton"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Keton"
                                id="d_urin_makroskopis_keton" 
                                type="text"
                                name="d_urin_makroskopis_keton"
                                value={data.d_urin_makroskopis_keton}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_keton", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_nitrit" value="Nitrit"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Nitrit"
                                id="d_urin_makroskopis_nitrit" 
                                type="text"
                                name="d_urin_makroskopis_nitrit"
                                value={data.d_urin_makroskopis_nitrit}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_nitrit", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_leukosit" value="Leukosit"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Leukosit"
                                id="d_urin_makroskopis_leukosit" 
                                type="text"
                                name="d_urin_makroskopis_leukosit"
                                value={data.d_urin_makroskopis_leukosit}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_leukosit", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_blood" value="Blood"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Blood"
                                id="d_urin_makroskopis_blood" 
                                type="text"
                                name="d_urin_makroskopis_blood"
                                value={data.d_urin_makroskopis_blood}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_blood", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_makroskopis_asamaskorbat" value="Asam Askorbat"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Asam Askorbat"
                                id="d_urin_makroskopis_asamaskorbat" 
                                type="text"
                                name="d_urin_makroskopis_asamaskorbat"
                                value={data.d_urin_makroskopis_asamaskorbat}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_makroskopis_asamaskorbat", e.target.value)}
                                />
                                  </div>
              </div>

              <h2 className="mt-5 text-md font-semibold leading-tight text-gray-800 dark:text-gray-200 flex">
              Mikroskopis</h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-7">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="d_urin_mikroskopis_eritrosit" value="Eritrosit"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Eritrosit"
                                id="d_urin_mikroskopis_eritrosit" 
                                type="text"
                                name="d_urin_mikroskopis_eritrosit"
                                value={data.d_urin_mikroskopis_eritrosit}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_mikroskopis_eritrosit", e.target.value)}
                                />
                                  </div>

                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_mikroskopis_leukosit" value="Leukosit"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Leukosit"
                                id="d_urin_mikroskopis_leukosit" 
                                type="text"
                                name="d_urin_mikroskopis_leukosit"
                                value={data.d_urin_mikroskopis_leukosit}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_mikroskopis_leukosit", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_mikroskopis_epitel" value="Epitel"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Epitel"
                                id="d_urin_mikroskopis_epitel" 
                                type="text"
                                name="d_urin_mikroskopis_epitel"
                                value={data.d_urin_mikroskopis_epitel}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_mikroskopis_epitel", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_mikroskopis_bakteri" value="Bakteri"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Bakteri"
                                id="d_urin_mikroskopis_bakteri" 
                                type="text"
                                name="d_urin_mikroskopis_bakteri"
                                value={data.d_urin_mikroskopis_bakteri}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_mikroskopis_bakteri", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_mikroskopis_kristal" value="Kristal"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Kristal"
                                id="d_urin_mikroskopis_kristal" 
                                type="text"
                                name="d_urin_mikroskopis_kristal"
                                value={data.d_urin_mikroskopis_kristal}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_mikroskopis_kristal", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_mikroskopis_silinder" value="Silinder"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Silinder"
                                id="d_urin_mikroskopis_silinder" 
                                type="text"
                                name="d_urin_mikroskopis_silinder"
                                value={data.d_urin_mikroskopis_silinder}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_mikroskopis_silinder", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_mikroskopis_jamur" value="Jamur"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Jamur"
                                id="d_urin_mikroskopis_jamur" 
                                type="text"
                                name="d_urin_mikroskopis_jamur"
                                value={data.d_urin_mikroskopis_jamur}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_mikroskopis_jamur", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_mikroskopis_trichomonas" value="Trichomonas"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Trichomonas"
                                id="d_urin_mikroskopis_trichomonas" 
                                type="text"
                                name="d_urin_mikroskopis_trichomonas"
                                value={data.d_urin_mikroskopis_trichomonas}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_mikroskopis_trichomonas", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="d_urin_mikroskopis_sprema" value="Sperma"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Sperma"
                                id="d_urin_mikroskopis_sprema" 
                                type="text"
                                name="d_urin_mikroskopis_sprema"
                                value={data.d_urin_mikroskopis_sprema}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("d_urin_mikroskopis_sprema", e.target.value)}
                                />
                                  </div>
              </div>

              <h2 className="mt-5 text-xl font-semibold leading-tight text-gray-800 dark:text-indigo-400 flex">
               Sekret</h2>

               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="e_sekret_vagina" value="Vagina"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Vagina"
                                id="e_sekret_vagina" 
                                type="text"
                                name="e_sekret_vagina"
                                value={data.e_sekret_vagina}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("e_sekret_vagina", e.target.value)}
                                />
                                  </div>

                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="e_sekret_utera" value="Utera"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Utera"
                                id="e_sekret_utera" 
                                type="text"
                                name="e_sekret_utera"
                                value={data.e_sekret_utera}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("e_sekret_utera", e.target.value)}
                                />
                                  </div>  
              </div>

              <h2 className="mt-5 text-xl font-semibold leading-tight text-gray-800 dark:text-lime-600 flex">
               Dahak</h2>

               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="f_dahak_slide" value="Slide"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Slide"
                                id="f_dahak_slide" 
                                type="text"
                                name="f_dahak_slide"
                                value={data.f_dahak_slide}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("f_dahak_slide", e.target.value)}
                                />
                                  </div>

                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="f_dahak_tcm" value="TCM"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="TCM"
                                id="f_dahak_tcm" 
                                type="text"
                                name="f_dahak_tcm"
                                value={data.f_dahak_tcm}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("f_dahak_tcm", e.target.value)}
                                />
                                  </div>  
              </div>

              <h2 className="mt-5 text-xl font-semibold leading-tight text-gray-800 dark:text-sky-600 flex">
               Kimia Darah II</h2>

               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="g_kimiadarah2_ureum" value="Ureum"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Ureum"
                                id="g_kimiadarah2_ureum" 
                                type="text"
                                name="g_kimiadarah2_ureum"
                                value={data.g_kimiadarah2_ureum}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("g_kimiadarah2_ureum", e.target.value)}
                                />
                                  </div>
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="g_kimiadarah2_kreatinin" value="Kreatinin"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Kreatinin"
                                id="g_kimiadarah2_kreatinin" 
                                type="text"
                                name="g_kimiadarah2_kreatinin"
                                value={data.g_kimiadarah2_kreatinin}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("g_kimiadarah2_kreatinin", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="g_kimiadarah2_sgot" value="SGOT"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="SGOT"
                                id="g_kimiadarah2_sgot" 
                                type="text"
                                name="g_kimiadarah2_sgot"
                                value={data.g_kimiadarah2_sgot}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("g_kimiadarah2_sgot", e.target.value)}
                                />
                                  </div> 
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="g_kimiadarah2_sgpt" value="SGPT"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="SGPT"
                                id="g_kimiadarah2_sgpt" 
                                type="text"
                                name="g_kimiadarah2_sgpt"
                                value={data.g_kimiadarah2_sgpt}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("g_kimiadarah2_sgpt", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="g_kimiadarah2_hdl" value="HDL"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="HDL"
                                id="g_kimiadarah2_hdl" 
                                type="text"
                                name="g_kimiadarah2_hdl"
                                value={data.g_kimiadarah2_hdl}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("g_kimiadarah2_hdl", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="g_kimiadarah2_ldl" value="LDL"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="LDL"
                                id="g_kimiadarah2_ldl" 
                                type="text"
                                name="g_kimiadarah2_ldl"
                                value={data.g_kimiadarah2_ldl}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("g_kimiadarah2_ldl", e.target.value)}
                                />
                                  </div>  
                                  <div className="sm:col-span-1">
                                  <InputLabel className="mt-1" htmlFor="g_kimiadarah2_trigliserida" value="Trigliserida"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Trigliserida"
                                id="g_kimiadarah2_trigliserida" 
                                type="text"
                                name="g_kimiadarah2_trigliserida"
                                value={data.g_kimiadarah2_trigliserida}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("g_kimiadarah2_trigliserida", e.target.value)}
                                />
                                  </div>   
              </div>

              <h2 className="mt-5 text-xl font-semibold leading-tight text-gray-800 dark:text-amber-400 flex">
               Urin II</h2>

               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="h_urin2_tesnarkoba" value="Tes Narkoba"/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Tes Narkoba"
                                id="h_urin2_tesnarkoba" 
                                type="text"
                                name="h_urin2_tesnarkoba"
                                value={data.h_urin2_tesnarkoba}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("h_urin2_tesnarkoba", e.target.value)}
                                />
                                  </div>
              </div>

              <h2 className="mt-5 text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200 flex">
               Lain-lain</h2>

               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
<div className="sm:col-span-1">
<InputLabel className="mt-1" htmlFor="i_lainlain" value=""/>
                                <TextInput
                                autoComplete="off"
                                //placeholder="Lain-lain"
                                id="i_lainlain" 
                                type="text"
                                name="i_lainlain"
                                value={data.i_lainlain}
                                className="mt-1 block w-full"
                                onChange={(e) => setData("i_lainlain", e.target.value)}
                                />
                                  </div>
              </div>


                <div className="mt-8 text-right">
                    <Link href={route('labresult.index')} type="button"  className="mr-4 py-1 px-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800 ms-4 mb-4">Cancel</Link>
                    <PrimaryButton href={route('labresult.index')} >Simpan</PrimaryButton>
                </div>
                                
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        


        </AuthenticatedLayout>
    )
}