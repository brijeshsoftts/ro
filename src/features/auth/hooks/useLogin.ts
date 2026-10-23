import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { apiClient } from "@/lib/apiClient";

import { authCrud } from "../auth.crud";
import { type Login, LoginSchema } from "../schemas/login.schema";

export function useLogin() {
  const mutation = authCrud.createAction({
    name: "login",
    mutationFn: (data: Login) =>
      apiClient.post("/auth/login", data).then((r) => r.data),
    successMessage: "Logged out successfully",
  });

  const form = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });

  const submit = (data: Login) => mutation().mutate(data);

  return {
    handleSubmit: form.handleSubmit(submit),
    form,
  };
}
