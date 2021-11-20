import React, { useState } from 'react'
import userService from '../services/userService'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
    SimpleGrid,
    useToast   
} from '@chakra-ui/react';
import IdentityCardInput from '../components/IdentityCardInput'

const UserForm = ({ departments }) => {
    const toast = useToast()

    const [user, setUser] = useState({
        identityCard: '',
        name: '',
        lastname: '',
        gender: 0,
        birthDate: '',
        departmentId: '',
        position: '',
        manager: ''
    })

    const { 
        identityCard, 
        name,
        lastname,
        gender,
        birthDate,
        departmentId,
        position,
        manager
    } = user

    const updateState = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value 
        })
    }

    const isEmpty = obj => !Object.values(obj).every(element => element !== '')

    const handleSubmit = (e) => {
      e.preventDefault()

      if (isEmpty(user)) {
        return toast({
            title: "Error",
            description: "Complete todos los campos",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
      }
      
      userService.create({
        identityCard,
        name,
        lastname,
        gender: Number(gender),
        birthDate,
        departmentId,
        position,
        manager
      })
      .then(() => {
        toast({
            title: "Usuario creado.",
            description: "Usuario creado con éxito.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        })

      setUser({
        identityCard: '',
        name: '',
        lastname: '',
        gender: 0,
        birthDate: '',
        departmentId: '',
        position: '',
        manager: '',
      })
    }

    return (
        <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Agregar Usuario</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
            <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
              <FormControl>
                <FormLabel>Cédula</FormLabel>
                <IdentityCardInput 
                    name="identityCard"    
                    onChange={updateState} 
                    value={identityCard}
                    placeholder="Ingrese la cédula" 
                />
              </FormControl>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input 
                    name="name"                
                    onChange={updateState} 
                    value={name}
                    placeholder="Ingrese el nombre" 
                />
              </FormControl>
            </SimpleGrid>
            <SimpleGrid columns={2} mt={4} spacingX="40px" spacingY="20px">
              <FormControl>
                <FormLabel>Apellido</FormLabel>
                <Input 
                    name="lastname"                
                    onChange={updateState} 
                    value={lastname}
                    placeholder="Ingrese el apellido" 
                />
              </FormControl>
              <FormControl>
                <FormLabel>Género</FormLabel>
                    <Select
                        name="gender"
                        onChange={updateState}
                        className="form-control"
                    >
                        <option value="0">Masculino</option>
                        <option value="1">Femenino</option>
                    </Select>
              </FormControl>
            </SimpleGrid>
            <SimpleGrid columns={2} mt={4} spacingX="40px" spacingY="20px">
              <FormControl>
                <FormLabel>Fecha de nacimiento</FormLabel>
                <Input 
                    name="birthDate" 
                    type="date"               
                    onChange={updateState} 
                    value={birthDate}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Posición</FormLabel>
                <Input 
                    name="position"                
                    onChange={updateState} 
                    value={position}
                    placeholder="Ingrese la posición" 
                />
              </FormControl>
            </SimpleGrid>
            <SimpleGrid columns={2} mt={4} spacingX="40px" spacingY="20px">
              <FormControl>
                <FormLabel>Supervisor</FormLabel>
                <Input 
                    name="manager"                
                    onChange={updateState} 
                    value={manager}
                    placeholder="Ingrese nombre de el supervisor" 
                />
              </FormControl>
              <FormControl>
                <FormLabel>Departamentos</FormLabel>
                    <Select
                        name="departmentId"
                        onChange={updateState}
                        placeholder="Seleciona departamento"
                    >
                        {
                            departments.map(department => (
                                <option 
                                    key={department.id}
                                    value={department.id}
                                >
                                    { department.name }
                                </option>
                            ))
                        }    
                    </Select>
              </FormControl>
            </SimpleGrid>
              <Button width="full" mt={4} type="submit">
                Enviar
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    )
}

export default UserForm
