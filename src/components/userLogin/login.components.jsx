import React from "react";
import "./login.style.css";
import {
    Flex,
    Button,
    Input,
    Switch} from '@chakra-ui/react';

const Login = () => {


    return (
        <div className="login-card">
            <div>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex direction="column" 
                // background={formBackground} 
                p={12} rounded={6}>
                    <header> New Member </header>
                    <Input 
                    placeholder="Enter your email" 
                    variant="filled" 
                    mb={3} 
                    type="email"
                    />
                    <Input 
                    placeholder="shhhhh! " 
                    variant="filled" 
                    mb={6} 
                    type="password"
                    />
                    <Switch 
                    mb={5} 
                    // onChange={toggleColorMode} 
                    >Term & condition
                    </Switch>
                    <Button 
                    colorScheme="green" 
                    >Submit</Button>
                </Flex>
            </Flex>
            </div>
        </div>
    )
}

export default Login;