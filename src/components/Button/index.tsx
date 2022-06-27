import React, {ReactNode} from 'react'
import style from "./button.module.scss"

interface ButtonProps {
  children: ReactNode
  type?: 'submit' | 'button' | 'reset' | undefined
  onClick?: () => void
}


export default function Button({onClick, type, children}: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={style.button}>{children}</button>
  )
}

// export default class Button extends React.Component<ButtonProps> {
//
//   render(){
//     const { children, type = 'button', onClick } = this.props
//     return (
//       <button onClick={onClick} type={type} className={style.button}>{children}</button>
//     )
//   }
// }
