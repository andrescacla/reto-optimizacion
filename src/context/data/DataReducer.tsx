import { Pokemon } from "../../interface/pokemon.interface"
import { InitialState } from "./DataContext"

export type actions =
  | { type: 'SET_pokemones', payload: Pokemon[] }



export const dataReducer = (state: InitialState, action: actions): InitialState => {
  switch (action.type) {
    
    case 'SET_pokemones':
      return {
        ...state,
        pokemones: action.payload
      }
    default:
      return state
  }
}
