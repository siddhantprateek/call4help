import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Login from '../../components/userLogin/login.components'
import "./loginpage.style.css";
const LoginPage = () =>(
    <div className="Login">
        <ChakraProvider>
            <Login />
        </ChakraProvider>
    </div>
)

export default LoginPage;