import { ButtonProps } from '../interface/components/button'
import button from './styles/button.module.css'
export const Button = ({onClick, text}: ButtonProps) => {
  return (
    <button className={button.button_start} onClick={onClick}>
      {text}
    </button>
  )
}
