import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTile'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)

    return (
        <div>
            <PageTitle title='Seja Bem-Vindo'/>
            <p className='mt-16 text-center'>O restaurante X sempre busca atender melhor seus clientes. <br /> Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-10 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
                </Link>
            </div>
            {!data && <p className='text-center p-6'>Carregando...</p>}
            {!error && data && data.showCoupon &&
                <p className='my-16 text-center'>
                    {data.message}
                </p>
            }
        </div>
    )
}

export default Index