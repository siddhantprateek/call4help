import React from "react";
import "./login.style.css";
import {
    Flex,
    Button,
    Input,
    Switch,
    useColorMode,
    useColorModeValue } from '@chakra-ui/react';

const Login = () => {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("blue.50" , "black")

    return (
        <div className="login-card">
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
                <header> New Member </header>
                <Input placeholder="Enter your email" variant="filled" mb={3} type="email"/>
                <Input placeholder="shh! " variant="filled" mb={6} type="password"/>
                <Switch mb={5} onChange={toggleColorMode} >Term & condition</Switch>
                <Button colorScheme="green" >Submit</Button>
            </Flex>
        </Flex>
        </div>
    )
}

export default Login;