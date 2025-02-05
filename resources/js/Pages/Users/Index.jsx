import Pagination from "@/Components/Pagination";
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({auth,users}) {
    return (
        <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Users
            </h2>
        }
        >
            <Head title="Users" />

            <div className="py-6">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <Link href={route('user.create')}>
                        <PrimaryButton className="ms-4 mb-4" > Add </PrimaryButton>
                                        </Link> */}
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-200 uppercase">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Name</th>
                                        <th className="px-3 py-2">Email</th>
                                        <th className="px-3 py-2">Role</th>
                                        <th className="px-3 py-2">Created At</th>
                                        <th className="px-3 py-2">Updated At</th>
                                        <th className="px-3 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map((user) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                                            <td className="px-3 py-2">{user.id}</td>
                                            <td className="px-3 py-2">{user.name}</td>
                                            <td className="px-3 py-2">{user.email}</td>
                                            <td className="px-3 py-2">{user.role}</td>
                                            <td className="px-3 py-2">{user.created_at}</td>
                                            <td className="px-3 py-2">{user.updated_at}</td>
                                            <td className="px-3 py-2"><Link href={route('user.edit',user.id)} className="font-medium text-blue-600">Edit</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={users.meta.links}></Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}