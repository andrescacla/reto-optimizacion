import { createContext } from "react";
import { Pokemon } from "../../interface/pokemon.interface";

export interface InitialState {
    pokemones: Pokemon[]
}

export interface DataContextProps {
    data: InitialState,
    fetchpokemones: () => void,
    // fetchPokemonId: (id: string) => void,
    // setpokemones: (pokemones: Pokemon[]) => void,
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)