import React, { useState } from 'react'
import departmentService from '../services/departmentService'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast
} from '@chakra-ui/react';

const DepartmentForm = () => {
    const toast = useToast()
    const [department, setDepartment] = useState({
        name: ''
    })

    const { name } = department

    const updateState = e => {
        setDepartment({
            ...department,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      if (name.trim() === '') {
        return toast({
            title: "Error",
            description: "Complete todos los campos",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
      }
      
      departmentService.create({
        name
      })
      .then(() => {
        toast({
            title: "Departamento creado.",
            description: "Departamento creado con éxito.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        })

      setDepartment({
        name: ''
      })
    }
    return (
     <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Agregar Departamento</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input 
                    name="name"                
                    onChange={updateState} 
                    value={name}
                    placeholder="Ingrese el nombre" 
                />
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Enviar
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    )
}

export default DepartmentForm
