import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";

export const App = () => {
  return (
    <main className="min-h-screen">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </main>
  );
};
