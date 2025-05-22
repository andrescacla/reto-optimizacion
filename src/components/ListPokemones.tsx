// import  { useMemo } from 'react'
import { ListPokemonesProps, Pokemon } from '../interface/pokemon.interface'
import { useDataContext } from '../hooks/useData'
import { useMemo } from 'react'

export const ListPokemones = ({value}: ListPokemonesProps) => {
  console.log('ListPokemones')
  const { data } = useDataContext()
    const { pokemones } = data
  const filterPokemones = (pokemones: Pokemon[], value: string) => {
    const filter = pokemones.filter((pokemon) => pokemon.name.includes(value))
    return filter
  }
  const visiblePokemones = useMemo(() => filterPokemones(pokemones, value), [pokemones, value])
  return (
    <div>
        <ul>
          {
            visiblePokemones.map((pokemon) => (
              <li key={pokemon.name}>
                {pokemon.name}
              </li>
            ))
          }
        </ul>
      </div>
  )
}

