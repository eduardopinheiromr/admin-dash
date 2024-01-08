import { Button, Flex, Heading, useToast } from "@chakra-ui/react";
import Link from "@shared/components/Link";
import { useAuthStore } from "@shared/stores/useAuthStore";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BsMicrosoft } from "react-icons/bs";
import AuthInput from "../AuthInput";
import loginResolver from "./loginResolver";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setLoading] = useState("");
  const toast = useToast();
  const methods = useForm({ resolver: loginResolver, mode: "onChange" });
  const { signIn } = useAuthStore();

  const handleSubmit = async (data: any) => {
    setLoading("credentials");
    try {
      await signIn(data);

      await router.push("/home");
    } catch (e) {
      console.log(e);

      toast({
        title: "Erro ao fazer login",
        description: "Usuário ou senha inválidos",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading("");
    }
  };

  return (
    <FormProvider {...methods}>
      <Flex
        as="form"
        onSubmit={methods.handleSubmit(handleSubmit)}
        mx="auto"
        w="full"
        direction="column"
        justify="center"
        gap={6}
      >
        <Heading
          textAlign="center"
          mt={4}
          fontWeight={400}
          fontSize={20}
          color="black"
          as="h1"
          opacity={0.7}
        >
          Área de Login
        </Heading>
        <AuthInput name="email" placeholder="Digite seu usuário" />
        <AuthInput name="password" placeholder="Senha" isPassword />
        <Button
          type="submit"
          rounded="full"
          fontWeight={500}
          h="60px"
          w="full"
          variant="solid-black"
          isLoading={isLoading === "credentials"}
          id="credentials-login"
        >
          Acessar
        </Button>

        <Button
          type="submit"
          onClick={handleMicrosoftSignin}
          leftIcon={<BsMicrosoft />}
          marginTop={-2}
          iconSpacing={8}
          fontWeight={500}
          color="darkgray"
          backgroundColor="lightgray"
          _hover={{
            filter: "brightness(0.9)",
          }}
          h="60px"
          w="full"
          rounded="full"
          isDisabled={isLoading === "credentials"}
          id="microsoft-login"
        >
          Acessar com Microsoft
        </Button>
      </Flex>
      <Link
        mt={6}
        href="/solicitar-senha"
        textDecor="underline"
        color="black"
        textAlign="center"
      >
        Esqueci minha senha
      </Link>
    </FormProvider>
  );
}
