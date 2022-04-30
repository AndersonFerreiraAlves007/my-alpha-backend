const yup = require('yup')

const schemaCreate = yup.object().shape({
  username: yup
    .string('Este campo deve ser uma string').required('Este campo é obrigatório')
    .matches(/[a-zA-Z]\w\w\w{0,37}/, 'Username deve ter no mínimo 3 caracteres')
    .min(3, 'Username deve ter no mínimo 3 caracteres')
    .max(40, 'Tamanho máximo de 40 caracteres'),
  birth_date: yup.string('Este campo deve ser uma string')
    .required('Este campo é obrigatório')
    .matches(/^\d\d\d\d-\d\d-\d\d$/, 'Data inválida, Formato da data aaaa-mm-dd'),
  image: yup.string('Este campo deve ser uma string'),
  password: yup
    .string('Este campo deve ser uma string')
    .trim().required('Este campo é obrigatório')
    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,20}$/, 'A senha deve ter de 6 a 20 caracteres (formado por letras e números) com no mínimo 1 maiúscula, 1 minúscula e 1 número') // Deve ter de 6 a 20 caracteres (formado por letras e números) com no mínimo 1 maiúscula, 1 minúscula e 1 número
})

const schemaUpdate = yup.object().shape({
  username: yup
    .string('Este campo deve ser uma string')
    .required('Este campo é obrigatório')
    .matches(/[a-zA-Z]\w\w\w{0,37}/, 'Username deve ter no mínimo 3 caracteres')
    .min(3, 'Username deve ter no mínimo 3 caracteres')
    .max(40, 'Username deve ter no máximo de 40 caracteres'),
  birth_date: yup
    .string('Este campo deve ser uma string')
    .required('Este campo é obrigatório')
    .matches(/^\d\d\d\d-\d\d-\d\d$/, 'Data inválida, Formato da data aaaa-mm-dd'),
  image: yup.string('Este campo deve ser uma string'),
  password: yup
    .string('Este campo deve ser uma string')
    .trim()
    .required('Este campo é obrigatório')
    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,20}$/, 'A senha deve ter de 6 a 20 caracteres (formado por letras e números) com no mínimo 1 maiúscula, 1 minúscula e 1 número')
})

const schemaLogin = yup.object().shape({
  username: yup
    .string('Este campo deve ser uma string')
    .required('Este campo é obrigatório')
    .matches(/[a-zA-Z]\w\w\w{0,37}/, 'Username deve ter no mínimo 3 caracteres')
    .min(3, 'Username deve ter no mínimo 3 caracteres')
    .max(40, 'Username deve ter no máximo 40 caracteres'),
  password: yup
    .string('Este campo deve ser uma string')
    .trim()
    .required('Este campo é obrigatório')
    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,20}$/, 'A senha deve ter de 6 a 20 caracteres (formado por letras e números) com no mínimo 1 maiúscula, 1 minúscula e 1 número')
})

const validateCreate = async (req, res, next) => {
  try {
    const bodyValidate = await schemaCreate.validate(req.body)
    req.body = bodyValidate
    console.log('anderson risadinha', bodyValidate)
    next()
  } catch (e) {
    res.status(400).send(e.errors.join(','))
  }
}

const validateUpdate = async (req, res, next) => {
  try {
    const bodyValidate = await schemaUpdate.validate(req.body)
    req.body = bodyValidate
    next()
  } catch (e) {
    res.status(400).send(e.errors.join(','))
  }
}

const validateLogin = async (req, res, next) => {
  try {
    const bodyValidate = await schemaLogin.validate(req.body)
    req.body = bodyValidate
    next()
  } catch (e) {
    res.status(400).send(e.errors.join(','))
  }
}

module.exports = { validateCreate, validateUpdate, validateLogin }
