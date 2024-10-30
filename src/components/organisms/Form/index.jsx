// src/components/RegistrationForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { TextInput } from "components/atoms";
import { validateCPF } from "utils/validate-cpf";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  console.log(errors);

  return (
    <Box p={5} bg="white" borderRadius="md">
      <Text
        fontSize="2xl"
        mb={4}
        textAlign="center"
        color="#14301b"
        fontWeight="bold"
      >
        SEJA BEM-VINDO(A)!
      </Text>
      <Text mb={4} textAlign="center" color="#164921">
        Preencha suas informações para entrar na sala e ter acesso a benefícios
        exclusivos.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel color="#164921">Nome Completo</FormLabel>
          <Input
            borderColor="gray"
            color="#164921"
            {...register("name", { required: "Este campo é obrigatório" })}
          />
        </FormControl>

        <FormControl isInvalid={errors.phone} mt={4}>
          <FormLabel color="#164921">Celular</FormLabel>
          <TextInput
            mask="PHONE_MASK"
            color="#164921"
            {...register("phone", { required: "Este campo é obrigatório" })}
          />
        </FormControl>

        <FormControl isInvalid={errors.email} mt={4}>
          <FormLabel color="#164921">E-mail</FormLabel>
          <Input
            borderColor="gray"
            color="#164921"
            type="email"
            {...register("email", { required: "Este campo é obrigatório" })}
          />
        </FormControl>

        <FormControl isInvalid={errors.cpf} mt={4}>
          <FormLabel color="#164921">CPF</FormLabel>
          <TextInput
            borderColor="gray"
            color="#164921"
            mask="CPF_MASK"
            {...register("cpf", {
              required: "Este campo é obrigatório",
              // validate: {
              //   isValidCPF: (value) => {
              //     return validateCPF(value) || "CPF inválido";
              //   },
              // },
            })}
          />
          {/* {errors.cpf && <Text color="red.500">{errors.cpf.message}</Text>}{" "} */}
          {/* Mensagem de erro */}
        </FormControl>

        <FormControl isInvalid={errors.university} mt={4}>
          <FormLabel color="#164921">Faculdade</FormLabel>
          <Input
            borderColor="gray"
            color="#164921"
            {...register("university", {
              required: "Este campo é obrigatório",
            })}
          />
        </FormControl>

        <FormControl isInvalid={errors.graduationDate} mt={4}>
          <FormLabel color="#164921">Previsão de Formatura</FormLabel>
          <Input
            borderColor="gray"
            color="#164921"
            type="date"
            {...register("graduationDate", {
              required: "Este campo é obrigatório",
            })}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit" width="full">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default RegistrationForm;
