import TextInput from "@/Components/TextInput";
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import {  useForm } from "@inertiajs/react";
import { useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function ImportResult({className = '',success = '',error = ''}) {
    const [importExcel,setImportExcel] = useState(false);
    const { data, setData, post, processing, reset, errors, clearErrors,} = useForm({excelfile: '',});
    
    const confirmImportExcel = () => {
        setImportExcel(true);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', data.excelfile);
  
       post(route('labresult.import'), formData, {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            //onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
       });
    };

    const closeModal = () => {
        setImportExcel(false);

        clearErrors();
        reset();
    };
    return (
        <section className={`space-y-6 ${className}`}>
        <PrimaryButton className="ms-4 mb-4" onClick={confirmImportExcel}>
            Import Excel
        </PrimaryButton>

        <Modal show={importExcel} onClose={closeModal}>
                <form onSubmit={handleSubmit} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Masukkan file excel disini
                    </h2>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="excelfile"
                            value="File Excel"
                            className="sr-only"
                        />

                        <TextInput
                            id="excelfile"
                            type="file"
                            name="excelfile"
                            accept=".xlsx,.xls"
                            onChange={e => setData('excelfile', e.target.files[0])}
                            //value={data.password}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="File Excel"
                        />
                        <InputError
                            message={errors.excelfile}
                            className="mt-2"
                        />
                        {success && (
                        <p
                            className="mt-2 text-sm text-green-600 dark:text-green-400 ">{success}
                        </p> )}
                        {error && (
                        <InputError
                            message={error}
                            className="mt-2"
                        /> )}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton className="ms-3" disabled={processing}>
                            Import
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
            </section>
    )
}