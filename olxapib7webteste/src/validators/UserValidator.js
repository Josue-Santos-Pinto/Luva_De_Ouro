const { checkSchema } = require('express-validator');

module.exports = {
    editAction: checkSchema({
        token: {
            notEmpty: true
        },
        name: {
            optional: true,
            trim: true,
            isLength:{
                options: { min: 2 }
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
        },
        email: {
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password: {
            optional: true,
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
        },
        state: {
            optional: true,
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        },
        celular: {
            optional: true,
            isMobilePhone: true,
            notEmpty: true,
            errorMessage: 'Celular inválido'
        },
        cep: {
            optional: true,
            notEmpty: true,
            // isLength: {
            //     options: { max: 8 }
            // },
            isPostalCode: {
                options: 'BR',
            },
            // isNumeric:true,
            errorMessage: 'CEP inválido, use o traço (ex: 20111-290)'
        }

    })
};