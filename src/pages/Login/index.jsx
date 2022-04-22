import React from "react"
import { Link } from 'react-router-dom'
import Button from '../../components/button'
import Input from '../../components/input'
import { Background, Container, Content, AnimationContainer } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Api from '../../services/api'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const Login = () => {    
    const schema = yup.object().shape({
        
        email: yup
        .string()
        .email('E-mail inválido!')
        .required('Campo obrigatório!'),
        password: yup
        .string()
        .min(8, 'Mínimo de 8 dígitos!')
        .required('Campo obrigatório!'),
        
    })

    const history = useHistory()    

    const {register, handleSubmit, formState:{errors}, reset} = useForm({ resolver: yupResolver(schema)})    
    
    const onSubmitFunction = async (data) => {

        await Api.post('/user/login', data)
        
        .then((response) => {
            const { token } = response.data 
            
            localStorage.setItem('@Doit:token', JSON.stringify(token))
            
            // setAuthenticated(true)
            return history.push('/dashboard')
        })
        .catch((err) => {toast.error('E-mail ou senha inválidos!')})
        reset()
    }



    return (
        <Container>            
            <Content>
                <AnimationContainer>
                    <form onSubmit={() => handleSubmit(onSubmitFunction)}>
                        <h1>Login</h1>
                        
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
                        placeholder='Sua senha aqui'
                        type='password'
                        register={register} 
                        name='password'
                        error={errors.password?.message}
                        />
                        
                        <Button type='submit'>Enviar</Button>
                        <p>Não tem uma conta? <Link to='/signUp'>Faça seu cadastro</Link></p>
                    </form>                    
                </AnimationContainer>
            </Content>
            
            <Background/>
            
            
        </Container>
    )
}

export default Login