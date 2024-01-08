import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('Informe seu e-mail')
    .transform(value => value.trim()),
  password: Yup.string()
    .required('Informe sua senha')
    .transform(value => value.trim()),
})

export default yupResolver(validationSchema)
