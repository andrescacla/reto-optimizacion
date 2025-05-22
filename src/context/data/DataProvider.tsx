import { useReducer } from "react";
import { DataContext } from "./DataContext";
import { dataReducer } from "./DataReducer";
import initialState from "./DataState";
import { api } from "../../api/axios";
import { Pokemon } from "../../interface/pokemon.interface";

export interface DataProviderProps {
  children: React.ReactNode | React.ReactNode[];
}



export const DataProvider = ({ children }: DataProviderProps) => {

  const [dataState, dispatch] = useReducer(dataReducer, initialState)
  
  const fetchpokemones = async() => {
    const {data, status} = await api.get('/?limit=100')
    if(status === 200) {
      const pokemones = data.results
      setpokemones(pokemones)
    } 
    

  }
  

  const setpokemones = (pokemones: Pokemon[]) => {
    dispatch({
      type: 'SET_pokemones',
      payload: pokemones
    })
  }

  return (
    <DataContext.Provider
      value={{
        data: dataState,
        fetchpokemones,
        // setpokemones
      }}>
      {children}
    </DataContext.Provider>
  )
}


