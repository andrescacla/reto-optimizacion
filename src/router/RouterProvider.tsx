import {
  createBrowserRouter,
} from "react-router";
import { PokemonPage } from "../pages/PokemonPage";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <PokemonPage/>
  },
  
], {
  basename: '/reto/',
});

export default router;


