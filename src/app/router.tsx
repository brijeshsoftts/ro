import { createBrowserRouter } from "react-router-dom";

import { PublicLayout } from "@/components/layout/PublicLayout";
import LandingPage from "@/pages/public/Landing";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [{ index: true, element: <LandingPage /> }],
  },
]);
