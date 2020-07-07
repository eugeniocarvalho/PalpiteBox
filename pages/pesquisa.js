import React, { userState, useState } from 'react'
import PageTitle from '../components/PageTile'

const Pesquisa = () => {
    const [form, setform] = useState({
        Nome: '',
        Email: '',
        WhatsApp: '',
        Nota: 0
    })

    const notas = [0, 1, 2, 3, 4, 5]
    const [sucess, setSucess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json()
            setSucess(true)
            setRetorno(data)

        } catch (error) {

        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name

        setform(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa'/>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestôes</h1>
            <p className='text-center mb-10'>O restaurante X sempre busca atender melhor seus clientes. <br /> Por isso, estamos sempre abertos a ouvir a sua opinião</p>
            {!sucess &&
                <div className='sm:w-auto my-auto ml-16 mr-16 mx-auto sm:1/3 sm:mx-center md:w-1/6 md:mx-auto'>
                    <label className='font-bold'>Seu nome: </label>
                    <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                    <label className='font-bold'>E-mail: </label>
                    <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                    <label className='font-bold'>WhatsApp: </label>
                    <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='WhatsApp' onChange={onChange} name='WhatsApp' value={form.WhatsApp} />
                    <div className='flex py-3'>
                        {
                            notas.map(
                                nota => {
                                    return (
                                        <label className='block w-1/12 text-center px-4'>
                                            {nota} <br/>
                                            <input type='radio' name='Nota' value={nota} onChange={onChange}/>
                                        </label>
                                    )
                                }
                            )
                        }
                    </div>
                    <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow mb-16' onClick={save}>Salvar</button>
                </div>}
            {sucess &&
                <div className='sm:m-auto sm:w-auto md:mx-auto md:w-1/5'>
                    <p className='text-center mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 pt-5'>Obrigado por contribuir com sua sugestão ou crítica.</p>
                    {
                        retorno.showCoupon &&
                        <div className='text-center border p-4 mb-6'>
                            Seu Cupom: <br />  <br />
                            <span className='font-bold text-2xl underline'>{retorno.Cupom}</span>
                            <br />

                        </div>
                    }
                    {
                        retorno.showCoupon &&
                        <div className='text-center border p-5 mb-16'>
                            <span className='font-bold block mb-2'>{retorno.Promo}</span>
                            <br />
                            <span className='italic'>Tire um print desta tela e apresente.</span>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Pesquisa