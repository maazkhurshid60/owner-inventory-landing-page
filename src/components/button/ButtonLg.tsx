import Link from 'next/link'
import React from 'react'
interface ButtonLgProps{
    text:string
    bgColor:string
    url:string
    textColor?:string
    isBorder?:boolean
}
const ButtonLg:React.FC<ButtonLgProps> = (props) => {
  return (
    <Link href={props.url} className={` bg-${props.bgColor}
    px-4 py-2.5 md:px-5 md:py-2 lg:px-[40px] lg:py-3.5 flex items-center justify-center text-[10px] md:text-xs lg:text-sm font-onest font-semibold
     text-${props.textColor}  ${props.isBorder? `border border-transparent hover:border-${props.bgColor}`:""} rounded-full hover:text-${props.bgColor}  hover:bg-transparent 
     transition-colors duration-300
    
    `}>{props.text}</Link>
  )
}

export default ButtonLg