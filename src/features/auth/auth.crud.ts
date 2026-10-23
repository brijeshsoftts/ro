import { apiClient } from "@/lib/apiClient";
import { createCrud } from "@/lib/crud/createCrud";

export const authCrud = createCrud<never, undefined>()({
  resource: "auth",
  endpoint: "/auth",
  label: "Auth",
});

export const useLogout = authCrud.createAction<void>({
  name: "logout",
  mutationFn: () => apiClient.post("/auth/logout").then((r) => r.data),
  successMessage: "Logged out successfully",
});
