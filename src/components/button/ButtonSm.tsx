import Link from 'next/link'
import React from 'react'
interface ButtonSmProps{
    text:string
    bgColor:string
    url:string
    textColor?:string
    isBorder?:boolean
}
const ButtonSm:React.FC<ButtonSmProps> = (props) => {
  return (
    <Link href={props.url} className={` bg-${props.bgColor}
    px-4 py-2.5 md:px-5 md:py-2 lg:px-[30px] lg:py-3 flex items-center justify-center text-[10px] md:text-xs lg:text-xs font-onest font-semibold
     text-${props.textColor}  ${props.isBorder? `border hover:border-${props.bgColor}`:""} rounded-full hover:text-[#231F20]  hover:bg-transparent 
     transition-colors duration-300
    
    `}>{props.text}</Link>
  )
}

export default ButtonSm