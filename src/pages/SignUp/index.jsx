import { Link } from 'react-router-dom'
import Button from '../../components/button'
import Input from '../../components/input'
import { Background, Container, Content, AnimationContainer } from './styles'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import React from "react"
import Api from '../../services/api'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Redirect } from 'react-router-dom'

const SignUp = () => {
    const schema = yup.object().shape({
        name: yup
        .string()
        .required('Campo obrigatório!'),
        email: yup
        .string()
        .email('E-mail inválido!')
        .required('Campo obrigatório!'),
        password: yup
        .string()
        .min(8, 'Mínimo de 8 dígitos!')
        .required('Campo obrigatório!'),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Senhas diferentes!')
        .required('Campo obrigatório!'),
    })

    const history = useHistory()    

    const {register, handleSubmit, formState:{errors}, reset} = useForm({ resolver: yupResolver(schema)})
    
    //desestrura o objeto pois não vamos mandar todas a propriedades para a Api (não irá o confirmPassword)
    const onSubmitFunction = async ({name, email, password}) => {
        //criar um novo objeto para passar as informações
        const user = {name, email, password}
        await Api.post('/user/register', user)
        //pode colocar um _ no parâmetro já que não estamos utilizando a response
        .then((_) => {
            toast.success('Conta criada com sucesso!')
            return history.push('/login')
        })
        .catch((err) => {toast.error('Erro ao criar a conta, tente outro e-mail.')})
        reset()
    }

    // if (authenticated){
    //     return <Redirect to='/dashboard'/>
    // }

    return (
        <Container>
            <Background/>
            <Content>
                <AnimationContainer>
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <h1>Cadastro</h1>
                        <Input
                        icon={FiUser} label='Nome' 
                        placeholder='Seu nome completo'
                        register={register} 
                        name='name'
                        error={errors.name?.message}
                        />
                        <Input 
                        icon={FiMail} 
                        label='E-mail' 
                        placeholder='Seu melhor e-mail'
                        register={register} 
                        name='email'
                        error={errors.email?.message} 
                        />
                        <Input
                        icon={FiLock} 
                        label='Senha' 
                        placeholder='Uma senha bem segura'
                        type='password'
                        register={register} 
                        name='password'
                        error={errors.password?.message}
                        />
                        <Input 
                        icon={FiLock} 
                        label='Confirmar Senha' 
                        placeholder='Confirmação da senha'
                        type='password'
                        register={register} 
                        name='confirmPassword'
                        error={errors.confirmPassword?.message}
                        />
                        <Button type='submit'>Enviar</Button>
                        <p>Já tem uma conta? Faça seu <Link to='/login'>login</Link></p>
                    </form>                    
                </AnimationContainer>
            </Content>
        </Container>
    )
}

export default SignUp