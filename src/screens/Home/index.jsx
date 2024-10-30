import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  SimpleGrid,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { bg_home, icone, mineradora } from "assets/img/application";
import { persons } from "./settings";
console.log(persons);
export const Home = () => {
  return (
    <Box bg="black" color="white" minHeight="100vh">
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box position="relative" w="100vw">
          {/* <Image src={bg_home} alt="bg_home" w="100%" h="auto" /> */}
          <Image
            src={bg_home}
            alt="bg_home"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            position="absolute"
            top="50%"
            left="5%"
            transform="translateY(-50%)"
            textAlign="left"
            zIndex={1}
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
          >
            <Text fontSize={{ base: "24px", md: "96px" }}>Feira</Text>
            <Text fontSize={{ base: "24px", md: "96px" }} color="green.400">
              Técnica - FEC
            </Text>
          </Heading>
        </Box>
        <Box p={4}>
          {/* Esteira Mineral Section */}
          <Box>
            <Heading
              as="h2"
              size={{ base: "lg", md: "xl" }}
              mb={4}
              textAlign="center"
            >
              Esteira{" "}
              <Text as="span" color="green.400">
                Mineral
              </Text>
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
              Esteiras de transporte mineral são equipamentos utilizados para
              transportar materiais em operações de mineração, pedreiras e
              indústrias de beneficiamento de minérios. Elas são projetadas para
              movimentar grandes quantidades de materiais, como minério de
              ferro, carvão, calcário e outros tipos de minérios, de forma
              contínua e eficiente entre diferentes etapas do processo
              produtivo.
            </Text>
          </Box>

          {/* Aplicações e Vantagens */}
          <Flex w="100%" flexDir={{ base: "column", md: "row" }}>
            <Box w={{ base: "100%", md: "70%" }}>
              <Box>
                <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
                  Aplicações
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Flex align="center">
                      <Image src={icone} w="25px" h="25px" mr="4px" />
                      Transporte de grandes volumes
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <Image src={icone} w="25px" h="25px" mr="4px" />
                      Alimentação de processos industriais
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <Image src={icone} w="25px" h="25px" mr="4px" />
                      Logística interna e externa
                    </Flex>
                  </ListItem>
                </List>
              </Box>
              <Box mt={4}>
                <Heading
                  as="h3"
                  size={{ base: "md", md: "lg" }}
                  mb={4}
                  color="green.400"
                >
                  Vantagens
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Flex align="center">
                      <Image src={icone} w="25px" h="25px" mr="4px" />
                      Eficiência energética
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <Image src={icone} w="25px" h="25px" mr="4px" />
                      Redução de custo operacional
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <Image src={icone} w="25px" h="25px" mr="4px" />
                      Segurança
                    </Flex>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box w={{ base: "100%", md: "30%" }} mt={{ base: 4, md: 0 }}>
              <Image src={mineradora} alt="mineradora" w="100%" h="auto" />
            </Box>
          </Flex>

          {/* Sustentabilidade */}
          <Box mt={{ md: 0, base: "12px" }}>
            <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
              Sustentabilidade
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
              A sustentabilidade das esteiras de transporte mineral está
              diretamente relacionada ao impacto ambiental e social que elas
              geram. Nosso foco é identificar oportunidades de melhoria para
              tornar essa operação mais eficiente, minimizando os danos ao meio
              ambiente. Além disso, existem vários outros aspectos em que a
              sustentabilidade pode ser aprimorada no uso de equipamentos na
              mineração.
            </Text>
            <List spacing={2}>
              <ListItem>
                <Flex align="center">
                  <Image src={icone} w="25px" h="25px" mr="4px" />A redução de
                  emissões
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Image src={icone} w="25px" h="25px" mr="4px" />A eficiência
                  energética — tema amplamente discutido e abordado neste
                  projeto
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Image src={icone} w="25px" h="25px" mr="4px" />A mitigação de
                  impactos ambientais diretos
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Image src={icone} w="25px" h="25px" mr="4px" />O uso
                  consciente de materiais e o ciclo de vida dos equipamentos
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Image src={icone} w="25px" h="25px" mr="4px" />
                  Redução de resíduos gerados
                </Flex>
              </ListItem>
            </List>
          </Box>

          {/* Quem Somos */}
          <Box mt={{ md: 0, base: "12px" }}>
            <Heading
              as="h3"
              size={{ base: "md", md: "lg" }}
              mb={4}
              textAlign="center"
            >
              Quem{" "}
              <Text as="span" color="green.400">
                Somos
              </Text>
            </Heading>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={4}>
              {persons.map((name) => (
                <VStack key={name?.name}>
                  <Image
                    src={name?.image}
                    alt={name?.name}
                    borderRadius="full"
                    boxSize={{ base: "60px", md: "80px" }}
                  />
                  <Text fontWeight="bold" fontSize={{ base: "xs", md: "sm" }}>
                    {name?.name}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>

          {/* Footer */}
          <Text textAlign="center" fontSize={{ base: "xs", md: "sm" }} mt={8}>
            Prestigie o nosso trabalho e siga o poder da evolução
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
