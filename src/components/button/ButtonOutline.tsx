import Link from 'next/link'
import React from 'react'
interface ButtonOutlineProps{
    text:string
    borderColor:string
    url:string
    textColor?:string
}
const ButtonOutline:React.FC<ButtonOutlineProps> = (props) => {
  return (
    <Link href={props.url} className={` bg-transparent 
    px-8 py-2.5 md:px-5 md:py-3 lg:px-[30px] whitespace-nowrap lg:py-5 flex items-center justify-center text-sm md:text-base font-onest font-semibold
     text-${props.borderColor}  border border-${props.borderColor} hover:border-transparent rounded-full hover:text-${props.textColor}  hover:bg-${props.borderColor} 
     transition-colors duration-300
    
    `}>{props.text}</Link>
  )
}

export default ButtonOutline