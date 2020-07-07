import { isEmail } from './isEmail'

export const Validation = (data) => {
    
    const retorno = {
        status: true,
        menssage: []
    }

    /**
    data.Nome: '',
    data.Email: '',
    data.WhatsApp: '',
    data.Feedback: '',
    data.Nota: 0
    */

    if(!data.Nome){ 
       retorno.status = false
       retorno.menssage[0] = 'Nome vazio' 
    }
    
    console.log()
    
    if(!data.Email){ 
        retorno.status = false
        retorno.menssage[1] = 'E-mail vazio' 
     }else if (!isEmail(data.Email)){
        retorno.status = false
        retorno.menssage[1] = 'E-mail inválido'
     }

     if(!data.WhatsApp){ 
        retorno.status = false
        retorno.menssage[2] = 'WhatsApp em branco'
        
     }else if(isNaN(`${data.WhatsApp}`)){
        retorno.status = false
        retorno.menssage[2] = 'WhatsApp com apenas números'    
    }

     if(!data.Feedback){ 
        retorno.status = false
        retorno.menssage[3] = 'Sugestão vazia' 
     }
     
     if(parseInt(data.Nota) <= 0){ 
        retorno.status = false
        retorno.menssage[4] = 'Dê uma nota' 
     }

    return retorno
}