import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTile'

const Contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />
            <h1 className='w-full mb-2 focus:outline-none focus:border-indigo-500 text-base p-16 text-center text-2xl' >Links para Contato</h1>
            <div class="flex justify-center " >
                <Link href='https://www.facebook.com/eugenio.freire.5'>
                    <a className='sm:text-3xl font-medium title-font mb-4 text-gray-900 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-lg shadow-xl'>Facebook</a>
                </Link>

                <Link href='https://www.instagram.com/_eugeniocarvalho/'>
                    <a className='sm:text-3xl font-medium title-font mb-4 text-gray-900 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-lg shadow-xl'>Instagram</a>
                </Link>
                <Link href='https://github.com/eugeniofreire'>
                    <a className='sm:text-3xl font-medium title-font mb-4 text-gray-900 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-lg shadow-xl'>GitHub</a>
                </Link>
            </div>
            <h1 className='w-full mb-2 focus:outline-none focus:border-indigo-500 text-base p-16 text-center text-2xl'>
                <a className='text-center bg-blue-400 px-4 py-2 shadow-xl underline rounded-lg' href="mailto:eugenio9008@gmail.com?subject=SweetWords">Enviar e-mail</a>
            </h1>

        </div>
    )
}

export default Contato