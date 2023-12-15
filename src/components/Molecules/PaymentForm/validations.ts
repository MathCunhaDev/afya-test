import { z } from "zod";

export const validations = z.object({
  cardNumber: z
    .string({
      required_error: "Preencha o número do cartão.",
    })
    .min(19, { message: "Insira os 16 números do seu cartão." })
    .max(19, { message: "Máximo de 16 caracteres." }),
  validity: z
    .string({
      required_error: "Preencha a validade do cartão.",
    })
    .min(5, { message: "Mínimo de 4 caracteres" })
    .max(5, { message: "Máximo de 4 caracteres" }),
  cvv: z
    .string({
      required_error: "Preencha o CVV do cartão.",
    })
    .min(3, { message: "Mínimo de 3 caracteres" })
    .max(3, { message: "Máximo de 3 caracteres" }),
  name: z
    .string({
      required_error: "Preencha o seu nome.",
    })
    .max(30, { message: "Máximo de 30 caracteres" }),
  cpf: z
    .string({
      required_error: "Preencha o cpf.",
    })
    .min(14, { message: "Mínimo de 11 caracteres" })
    .max(14, { message: "Máximo de 11 caracteres" }),
  installments: z
    .string({
      required_error: "Selecione uma opção de parcelamento.",
    })
    .min(1, { message: "teste" }),
});
