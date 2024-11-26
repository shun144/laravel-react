import { PropsWithChildren } from 'react';
import Logo from '@/Components/Logo';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
            <div>
                <div className='h-32 block'>
                    <Logo className="w-auto h-full fill-current " />
                </div>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 border border-slate-200 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
