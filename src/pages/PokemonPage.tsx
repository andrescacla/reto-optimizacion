import { useCallback, useEffect, useState } from "react"

import { useNavigate } from "react-router"
import { Button } from "../components/Button"
import pokemon from '../styles/pokemon.module.css'
import { Card } from "../components/Card"
import { Header } from "../components/Header"
import { ListPokemones } from "../components/ListPokemones"
import { useDataContext } from "../hooks/useData"

export const PokemonPage = () => {
  const navigate = useNavigate()
  const { fetchpokemones } = useDataContext()
  const [stepOne, setStepOne] = useState<number>(0)
  const [stepTwo, setStepTwo] = useState<number>(0)
  const [stepThree, setStepThree] = useState<number>(0)
  const [value, setValue] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const onBack = () => {
    navigate('/')
  }
  

  const onStepOne = useCallback(() => {
    setStepOne(stepOne + 1)
  }, [stepOne])
  const onStepTwo = useCallback(() => {
    setStepTwo(stepTwo + 1)
  }, [stepTwo])
  const onStepThree = useCallback(() => {
    setStepThree(stepThree + 1)
  }, [stepThree])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  
  const onSearch = () => {
    setSearch(value)
  }
  

  useEffect(() => {
    fetchpokemones()
  }, [])
  return (
    <div className={pokemon.pokemon_container}>
      <Header />
      <div className={pokemon.container_cards}>
        <Card name={`Card 1 - ${stepOne}`} id={stepOne} onClick={onStepOne} />
        <Card name={`Card 2- ${stepTwo}`} id={stepTwo} onClick={onStepTwo} />
        <Card name={`Card 3- ${stepThree}`} id={stepThree} onClick={onStepThree} />

      </div>

      <Button onClick={onBack} text={'Volver al home'} />

      <input type="text" name="vale" value={value} onChange={onInputChange} className={pokemon.input} />

      <Button onClick={onSearch} text={'Buscar'} />

      <ListPokemones value={search} />
      
    </div>
  )
}
