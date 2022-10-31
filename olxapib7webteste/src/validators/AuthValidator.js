const { checkSchema } = require('express-validator');

module.exports = {
    signup: checkSchema({
        name: {
            trim: true,
            isLength:{
                options: { min: 2 }
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password: {
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
        },
        state: {
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        },
        celular: {
              trim: true,
            isMobilePhone: true,
            errorMessage: 'Celular inválido'
        },
        cep: {
            optional:false,
            notEmpty: true,
            // isLength: {
            //     options: { max: 8 }
            // },
            isPostalCode: {
                options: 'BR',
            },
            // isNumeric:true,
            errorMessage: 'CEP inválido, use o traço (ex: 20111-290)'
        },

    }),
    signin: checkSchema({
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password: {
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
        },
    })
};