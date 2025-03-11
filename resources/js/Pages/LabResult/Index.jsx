import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head ,Link, router, usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import ImportResult from "./Partials/ImportResult";

export default function Index({auth,results, queryParams = null,success,error}) {
    const user = usePage().props.auth.user;
    queryParams = queryParams || {}
    const  searchFieldChanged = (name,value) => {
        if (value){
            queryParams[name] = value
        }else{
            delete queryParams[name]
        }

        router.get(route('labresult.index', queryParams));
    }

    const onKeyPress = (name,e) => {
        if (e.key !== 'Enter') return;
        delete queryParams['page']
        searchFieldChanged(name,e.target.value);
    }

    const deleteResult = (result) => {
        if (!window.confirm("Apakah anda yakin ingin hapus item ini?")){
            return;
        }
        router.delete(route('labresult.destroy', result.id))
        alert('Berhasil dihapus !');
    }

    
    const editResult = (result) => {
        router.get(route('labresult.edit', result.id))
    }


    return (
        <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200 flex">
                Hasil Laboratorium
            </h2>
        }
        >
            <Head title="Hasil Lab" />

            <div className="py-6">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-4 text-gray-900 dark:text-gray-100">
                                 {
                                    (user.role == 'admin') ? (
                                        <div className="grid grid-cols-10 gap-8">
                                        <ImportResult success={success} error={error}/>
                                        
                                        <Link href={route('labresult.create')} type="button"  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800 ms-4 mb-4">Tambah Baru</Link>
                                                                </div>
                                    ) : ''
                                 }
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-200 uppercase">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">Tgl Pemeriksaan</th>
                                        <th className="px-3 py-2">Nama Pasien</th>
                                        <th className="px-3 py-2">Alamat</th>
                                        <th className="px-3 py-2">Jenis Kelamin</th>
                                        <th className="px-3 py-2">Tgl Lahir</th>
                                        <th className="px-3 py-2">Umur</th>
                                        <th className="px-3 py-2">Poli</th>
                                        <th className="px-3 py-2">Pembayaran</th>
                                        <th className="px-3 py-2">Pemeriksaan</th>
                                        <th className="px-3 py-2">Action</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase">
                                    <tr className="text-nowrap">
                                    <th className="px-3 py-2">
                                             <TextInput 
                                             type="date"
                                            className="w-full py-2"
                                            defaultValue={queryParams.tgl_pemeriksaan}
                                            placeholder="Tgl Pemeriksaan"
                                            onBlur={e => searchFieldChanged('tgl_pemeriksaan', e.target.value)}
                                            onKeyPress={e => onKeyPress('tgl_pemeriksaan',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                            <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.nama_pasien}
                                            placeholder="Nama Pasien"
                                            onBlur={e => searchFieldChanged('nama_pasien', e.target.value)}
                                            onKeyPress={e => onKeyPress('nama_pasien',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                            <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.alamat}
                                            placeholder="Alamat"
                                            onBlur={e => searchFieldChanged('alamat', e.target.value)}
                                            onKeyPress={e => onKeyPress('alamat',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                            <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.jenis_kelamin}
                                            placeholder="Jenis Kelamin"
                                            onBlur={e => searchFieldChanged('jenis_kelamin', e.target.value)}
                                            onKeyPress={e => onKeyPress('jenis_kelamin',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                             <TextInput 
                                             type="date"
                                            className="w-full py-2"
                                            defaultValue={queryParams.tgl_lahir}
                                            placeholder="Tgl Lahir"
                                            onBlur={e => searchFieldChanged('tgl_lahir', e.target.value)}
                                            onKeyPress={e => onKeyPress('tgl_lahir',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                            <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.umur}
                                            placeholder="Umur"
                                            onBlur={e => searchFieldChanged('umur', e.target.value)}
                                            onKeyPress={e => onKeyPress('umur',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                            <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.poli}
                                            placeholder="Poli"
                                            onBlur={e => searchFieldChanged('poli', e.target.value)}
                                            onKeyPress={e => onKeyPress('poli',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                            <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.status_pembayaran}
                                            placeholder="Pembayaran"
                                            onBlur={e => searchFieldChanged('status_pembayaran', e.target.value)}
                                            onKeyPress={e => onKeyPress('status_pembayaran',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.data.map((result) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={result.id}>
                                            <td className="px-3 py-2">{result.tgl_pemeriksaan}</td>
                                            <td className="px-3 py-2">{result.nama_pasien}</td>
                                            <td className="px-3 py-2">{result.alamat}</td>
                                            <td className="px-3 py-2">{result.jenis_kelamin}</td>
                                            <td className="px-3 py-2">{result.tgl_lahir}</td>
                                            <td className="px-3 py-2">{result.umur}</td>
                                            <td className="px-3 py-2">{result.poli}</td>
                                            <td className="px-3 py-2">{result.status_pembayaran}</td>
                                            <td className="px-3 py-2">
                                            {
                                                    (result.a_hematologi_hb != null || result.a_hematologi_diffcount != null || result.a_hematologi_leukosit != null || result.a_hematologi_trombosit != null || result.a_hematologi_ht != null || result.a_hematologi_led != null || result.a_hematologi_golongandarah != null) ? (
                                                        // <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-pink-900 dark:text-pink-300">Hematologi</span>
                                                        " Hematologi;"
                                                    ) : ''
                                                }
                                                {
                                                    (result.b_kimiadarah_glukosadarah != null || result.b_kimiadarah_kolesterol != null || result.b_kimiadarah_asamurat != null) ? (
                                                        // <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">Kimia Darah</span>
                                                        " Kimia Darah;"
                                                    ) : ''
                                                }
                                                 {
                                                    ( result.c_serologi_widal_o != null || result.c_serologi_widal_ao != null || result.c_serologi_widal_h != null || result.c_serologi_widal_ah != null || result.c_serologi_dengue_iggigm != null || result.c_serologi_dengue_ns1 != null || result.c_serologi_malaria != null || result.c_serologi_syphilis != null || result.c_serologi_hbsag != null || result.c_serologi_hiv != null || result.c_serologi_hcv != null || result.c_serologi_teskehamilan != null) ? (
                                                        // <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">Kimia Darah</span>
                                                        " Serologi;"
                                                    ) : ''
                                                }
                                                 {
                                                    ( result.d_urin_makroskopis_warna != null || result.d_urin_makroskopis_kekeruhan != null || result.d_urin_makroskopis_ph != null || result.d_urin_makroskopis_bjurin != null || result.d_urin_makroskopis_protein != null || result.d_urin_makroskopis_glukosa != null || result.d_urin_makroskopis_bilirubin != null || result.d_urin_makroskopis_urobilinogen != null || result.d_urin_makroskopis_keton != null || result.d_urin_makroskopis_nitrit != null || result.d_urin_makroskopis_leukosit != null || result.d_urin_makroskopis_blood != null || result.d_urin_makroskopis_asamaskorbat != null || result.d_urin_mikroskopis_eritrosit != null || result.d_urin_mikroskopis_leukosit != null || result.d_urin_mikroskopis_epitel != null || result.d_urin_mikroskopis_bakteri != null || result.d_urin_mikroskopis_kristal != null || result.d_urin_mikroskopis_silinder != null || result.d_urin_mikroskopis_jamur != null || result.d_urin_mikroskopis_trichomonas != null || result.d_urin_mikroskopis_sprema != null) ? (
                                                        // <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">Kimia Darah</span>
                                                        " Urin;"
                                                    ) : ''
                                                }
                                                {
                                                    ( result.e_sekret_vagina != null || result.e_sekret_utera != null) ? (
                                                        // <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">Kimia Darah</span>
                                                        " Sekret;"
                                                    ) : ''
                                                }
                                                 {
                                                    ( result.f_dahak_slide != null || result.f_dahak_tcm != null) ? (
                                                        // <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">Kimia Darah</span>
                                                        " Dahak;"
                                                    ) : ''
                                                }
                                                 {
                                                    ( result.g_kimiadarah2_ureum != null || result.g_kimiadarah2_kreatinin != null || result.g_kimiadarah2_sgot != null || result.g_kimiadarah2_sgpt != null || result.g_kimiadarah2_hdl != null || result.g_kimiadarah2_ldl != null || result.g_kimiadarah2_trigliserida != null) ? (
                                                        // <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">Kimia Darah</span>
                                                        " Kimia Darah II;"
                                                    ) : ''
                                                }
                                                  {
                                                    ( result.h_urin2_tesnarkoba != null) ? (
                                                        // <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">Kimia Darah</span>
                                                        " Urin II;"
                                                    ) : ''
                                                }
                                                 {
                                                    ( result.i_lainlain != null) ? (
                                                        // <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">Kimia Darah</span>
                                                        " Lain-lain;"
                                                    ) : ''
                                                }
                                            </td>
                                            <td className="px-3 py-2 whitespace-nowrap">
                                                {/* <Link href={route('labresult.edit',result.id)} >
                                                <button className="rounded-md bg-slate-800 p-1.5 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                                                <path fillRule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
                                                </svg>
                                                </button> 
                                                </Link>  */}

                                                <button onClick={()=>window.open(route('labresult.print',result.id),'_blank', 'rel=noopener noreferrer')}
                                                className="rounded-md bg-slate-800 p-1.5 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-grey-700" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M4 5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.51 1.94l-.315 1.896A1 1 0 0 0 4.18 15h7.639a1 1 0 0 0 .986-1.164l-.316-1.897A2 2 0 0 0 14 10V7a2 2 0 0 0-2-2V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3Zm1.5 0V2.5h5V5h-5Zm5.23 5.5H5.27l-.5 3h6.459l-.5-3Z" clipRule="evenodd" />
                                                </svg>
                                                </button> 
                                                {
                                                    (user.role == 'admin') ? (
                                                        <button className="rounded-md bg-slate-800 p-1.5 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-amber-700" type="button" 
                                                        onClick={(e) => editResult(result)}>
                                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                                        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                                        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                                                        </svg>

                                                        </button> 
                                                    ) : ''
                                                }
                                                {
                                                    (user.role == 'admin') ? (
                                                        <button className="rounded-md bg-slate-800 p-1.5 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-red-700" type="button" 
                                                        onClick={(e) => deleteResult(result)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                                                        </svg>
                                                        </button> 
                                                    ) : ''
                                                }
                                               
                                                </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={results.meta.links}></Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}