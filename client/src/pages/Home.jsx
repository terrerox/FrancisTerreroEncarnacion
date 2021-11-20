import React from 'react'
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react"
import Header from '../components/Header'

const Home = () => {
    return (
        <>
            <Header />
            <Container maxW="container.xl">
                <Outlet />
            </Container>
        </>
    )
}

export default Home