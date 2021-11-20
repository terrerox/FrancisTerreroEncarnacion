import React from 'react'
import { Link } from "react-router-dom";
import { Flex, Heading, Button } from "@chakra-ui/react"

const Header = () => (
    <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={6}
        p={6}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["green", "green", "primary.700", "primary.700"]}
    >
        <Flex align="center">
            <Heading>Manejo de usuarios</Heading>
        </Flex>

        <Flex
            align={["center", "center", "center", "center"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
        >
            <Link to="/">
                <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                    Usuarios
                </Button>
            </Link>

            <Link to="/departments">
                <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
                    Departamentos
                </Button>
            </Link>
        </Flex>
    </Flex>
)

export default Header
