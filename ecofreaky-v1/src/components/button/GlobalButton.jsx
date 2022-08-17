import React from 'react'
const GlobalButton = (props) => {
  const {text, icon, clickEvent, disabled, twcolor, textColor} = props


  return (
  <button className={"mt-10 w-full flex items-center justify-center relative group focus:outline-none focus:ring"} onClick={()=>clickEvent && clickEvent()} disabled={disabled}>
     <span className={`absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 group-hover:translate-y-0 group-hover:translate-x-0 ${twcolor}`}></span>
    {icon&&<i className={icon}></i>}
    {text && <span className={`relative w-full inline-block px-12 py-3 text-md font-bold border-yellow tracking-widest uppercase border-2 border-current group-active:text-opacity-75 ${textColor}`}>{text}</span> }
  </button>
  )
}
export default GlobalButton;