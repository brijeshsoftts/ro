import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { apiClient } from "@/lib/apiClient";

import { authCrud } from "../auth.crud";
import { type Register, RegisterSchema } from "../schemas/register.schema";

export function useRegister() {
  const mutation = authCrud.createAction({
    name: "register",
    mutationFn: (data: Register) =>
      apiClient.post("/auth/register", data).then((r) => r.data),
    successMessage: "Registered successfully",
  });

  const form = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  const submit = (data: Register) => mutation().mutate(data);

  return {
    handleSubmit: form.handleSubmit(submit),
    form,
  };
}
