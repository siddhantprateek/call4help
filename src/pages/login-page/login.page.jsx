import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Login from '../../components/userLogin/login.components'
const LoginPage = () =>(
    <ChakraProvider>
        <Login />
    </ChakraProvider>
)

export default LoginPage;