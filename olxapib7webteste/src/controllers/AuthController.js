const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Correio = require('node-correios');
const correio = new Correio;
const { validationResult, matchedData } = require('express-validator');
const User = require('../models/User');
const State = require('../models/State');
const Correios = require('node-correios/lib/correios');

module.exports = {
    signin: async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req);

        // Validando o e-mail
        const user = await User.findOne({email: data.email});
        if(!user) {
            res.json({error: 'E-mail e/ou senha errados!'});
            return;
        }

        // Validando a senha
        const match = await bcrypt.compare(data.password, user.passwordHash);
        if(!match) {
            res.json({error: 'E-mail e/ou senha errados!'});
            return;
        }

        const payload = (Date.now() + Math.random()).toString();
        const token = await bcrypt.hash(payload, 10);

        user.token = token;
        await user.save();

        res.json({token, email: data.email});
    },
    signup: async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req);

        // Verificando se e-mail já existe
        const user = await User.findOne({
            email: data.email
        });
        if(user) {
            res.json({
                error: {email:{msg: 'E-mail já existe!'}}
            });
            return;
        }

        // Verificando se o estado existe
        if(mongoose.Types.ObjectId.isValid(data.state)) {
            const stateItem = await State.findById(data.state);
            if(!stateItem) {
                res.json({
                    error: {state:{msg: 'Estado não existe'}}
                });
                return;
            }
        } else {
            res.json({
                error: {state:{msg: 'Código de estado inválido'}}
            });
            return;
        }

        // // Verificando se o cep existe
        // const eNumero = (numero) => /^[0-9]+$/.test(cep);
        // const cepValido = (cep) => cep.length = 8 && eNumero(cep);
        // const pesquisarCep = async() => {
        //     const cep = document.getElementById('cep').value;
        //     const url = `http://viacep.com.br/ws/${cep}/json`;
        // if (cepValido(cep)) {
        //         const dados = await fetch(url);
        //         const endereco = await dados.json();
        //         if(endereco.hasOwnProperty('erro')) {
        //             document.getElementById('endereco').value = 'CEP não encontrado!';
        //         } else {
        //             return;
        //         }
        // }
        // document.getElementById('cep')
        // .addEventListener('focusout', pesquisarCep);
        // }

        

        // const eNumero = (numero) => /^[0-9]+$/.test(celular);
        // const celularValido = (celular) => celular.length = 11 && eNumero(celular);
        // if (celularValido(celular)) {
        //         const dados = await fetch(url);
        //         const endereco = await dados.json();
        //         if(endereco.hasOwnProperty('erro')) {
        //             document.getElementById('endereco').value = 'CEP não encontrado!';
        //         } else {
        //             preencherFormulario(endereco);
        //         }
        // }
        // }

     

        const passwordHash = await bcrypt.hash(data.password, 10);

        const payload = (Date.now() + Math.random()).toString();
        const token = await bcrypt.hash(payload, 10);

        const newUser = new User({
            name: data.name,
            email: data.email,
            passwordHash,
            token,
            state: data.state,
            celular: data.celular,
            cep: data.cep,
        });
        await newUser.save();

        res.json({token});
    }
};