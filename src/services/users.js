export const validationEmailInput = {
    required:{
        value:true,
        message:"Este campo es requerido"
    },
    minLength:{
        value:4,
        message:"Minimo 4 caracteres"
    },
}

export const  validationPasswordInput = {
    required:{
        value:true,
        message:"Este campo es requerido"
    },
    pattern:{
        value:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        message: "debe tener por lo menos un numero, caracter-especial(!@#$%^&*), minuscula, mayucula y debe tener 8 caracteres como minimo"
    }
}

export const validationNameInput = {
    required:{
        value:true,
        message:"Este campo es requerido"
    },
    maxLength:{
        value:15,
        message:"Excedes la cantidad de caracteres, maximo 15"
    },
    minLength:{
        value:4,
        message:"Minimo 4 caracteres"
    }
}