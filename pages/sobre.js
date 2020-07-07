import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTile'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre' />
            <h1 className='w-full p-4 text-center text-3xl font-bold'>PalpiteBox</h1>
            <h2 className='w-full p-4 text-center italic mb-16'>PalpiteBox é uma aplicação que tem como finalidade a pesquisa de satisfação dos seus cliente. <br/><br/> Nela, o cliente deixa suas sugestões ou críticas afim de ajudar o estabelicimento a melhorar seus servições e / ou produtos. E com essas informações, melhorar mais o seu estabelicimento. <br/><br/> Esta aplicação foi desenvolvida durante a semana Fullstack Master oferecida pela DevPleno.</h2>
        </div>
    )
}

export default Sobre