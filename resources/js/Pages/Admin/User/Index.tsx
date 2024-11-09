import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import { Head, usePage, useForm, Link, router } from '@inertiajs/react';
import { useEffect, useState, useCallback, MouseEvent } from 'react';
import { User } from '../../../types';
import 'react-responsive-pagination/themes/classic.css';
import { CustomToaster, toast } from '@/Pages/Owner/components/toast/CustomToaster'
import UserTable from './Table';

type UserForAdmin = User & {
  first_password: string
}


type Props = {
  initialUsers: UserForAdmin[];
  success?: string;
  fail?: string;
}

const Index = ({ initialUsers, success, fail }: Props) => {

  return (
    <AdminAuthenticatedLayout
      header={
        <div className='w-full flex justify-end items-center my-2'>
          <Link
            href={route("admin.user.create")}
            className='bg-emerald-500 py-2 px-3 text-white rounded shadow transition-all hover:bg-emerald-600'
          >ユーザ追加</Link>
        </div>
      }
    >
      <Head title="ユーザ一覧" />
      <div className="py-12">
        <CustomToaster />
        <UserTable initialUsers={initialUsers} success={success} fail={fail} />
      </div>
    </AdminAuthenticatedLayout >
  )
}

export default Index;





