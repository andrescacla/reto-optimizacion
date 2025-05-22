export interface Pokemon {
  name: string,
  url: string
}
export interface CardProps {
  name: string,
  id: number,
  onClick: () => void
}
export interface PokemonState {
  name: string,
  id: number,
  sprites: {
    front_default: string
  }
} 
export interface HeaderProps {
  title: string
} 
export interface ListPokemonesProps {
  value: string
}