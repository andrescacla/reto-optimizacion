import React, { useEffect, useState } from 'react'
import { CardProps, PokemonState } from '../interface/pokemon.interface'
import pokemon from '../styles/pokemon.module.css'
import { getPokemonId } from '../api/axios'
import { Button } from './Button'
export const Card = React.memo(({ id, onClick }: CardProps) => {
  const [pokemonState, setPokemon] = useState<PokemonState>({
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    }
  })
  
  const getPokemonRaw = async (id: number) => {
    const response = await getPokemonId(id)
    const { name, id: idPokemon, sprites } = response.data
    setPokemon({
      name,
      id: idPokemon,
      sprites
    })
  }
  useEffect(() => {
    if (id > 0) {
      getPokemonRaw(id)

    }
  }, [id])
  return (
    <div className={pokemon.card}>
      <div className={pokemon.card_image}>
        {
          id > 0 && <img src={pokemonState.sprites.front_default ? pokemonState.sprites.front_default : undefined} alt={pokemonState.name} />
        }
      </div>
      <div className={pokemon.card_description}>
        
        <strong>
          {pokemonState.name}
        </strong>
      </div>
      <Button onClick={onClick} text={id} />
    </div>
  )
})
