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
                                        <ImportResult success={success} error={error}/>
                                    ) : ''
                                }
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-200 uppercase">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID Pasien</th>
                                        <th className="px-3 py-2">Nama Pasien</th>
                                        <th className="px-3 py-2">Tgl Lahir</th>
                                        <th className="px-3 py-2">Nama Tes</th>
                                        <th className="px-3 py-2">Hasil</th>
                                        <th className="px-3 py-2">Flag</th>
                                        <th className="px-3 py-2">Nilai Rujukan</th>
                                        <th className="px-3 py-2">Komentar</th>
                                        <th className="px-3 py-2">Action</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">
                                        <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.patientid}
                                            placeholder="ID Pasien"
                                            onBlur={e => searchFieldChanged('patientid', e.target.value)}
                                            onKeyPress={e => onKeyPress('patientid',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                            <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.patientname}
                                            placeholder="Nama Pasien"
                                            onBlur={e => searchFieldChanged('patientname', e.target.value)}
                                            onKeyPress={e => onKeyPress('patientname',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                             <TextInput 
                                             type="date"
                                            className="w-full py-2"
                                            defaultValue={queryParams.date_of_birth}
                                            placeholder="Nama Pasien"
                                            onBlur={e => searchFieldChanged('date_of_birth', e.target.value)}
                                            onKeyPress={e => onKeyPress('date_of_birth',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                             <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.testname}
                                            placeholder="Nama Tes"
                                            onBlur={e => searchFieldChanged('testname', e.target.value)}
                                            onKeyPress={e => onKeyPress('testname',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                             <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.result}
                                            placeholder="Hasil"
                                            onBlur={e => searchFieldChanged('result', e.target.value)}
                                            onKeyPress={e => onKeyPress('result',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                             <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.flag}
                                            placeholder="Flag"
                                            onBlur={e => searchFieldChanged('flag', e.target.value)}
                                            onKeyPress={e => onKeyPress('flag',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2">
                                             <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.reference}
                                            placeholder="Nilai Rujukan"
                                            onBlur={e => searchFieldChanged('reference', e.target.value)}
                                            onKeyPress={e => onKeyPress('reference',e)}
                                             ></TextInput>
                                             </th>
                                        <th className="px-3 py-2">
                                             <TextInput 
                                            className="w-full py-2"
                                            defaultValue={queryParams.comment}
                                            placeholder="Komentar"
                                            onBlur={e => searchFieldChanged('comment', e.target.value)}
                                            onKeyPress={e => onKeyPress('comment',e)}
                                             ></TextInput>
                                        </th>
                                        <th className="px-3 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.data.map((result) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={result.id}>
                                            <td className="px-3 py-2">{result.patientid}</td>
                                            <td className="px-3 py-2">{result.patientname}</td>
                                            <td className="px-3 py-2">{result.date_of_birth}</td>
                                            <td className="px-3 py-2">{result.testname}</td>
                                            <td className="px-3 py-2">{result.result}</td>
                                            <td className="px-3 py-2">{result.flag}</td>
                                            <td className="px-3 py-2">{result.reference}</td>
                                            <td className="px-3 py-2">{result.comment}</td>
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