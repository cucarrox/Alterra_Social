import alterra_gray_icon from "../assets/img/alterra_gray-icon.png"
import { Perfil } from "./perfil"

export function Header() {
   return (
      <>
         <header className="bg-[#202024] p-2 flex justify-between select-none">
            <div className="w-[10%]"></div>
            <div className="w-[80%] flex justify-center">
               <img className="w-16" src={alterra_gray_icon} alt="Logo da Alterra Social" />
            </div>
            <nav className="w-[10%] flex justify-center items-center">
               <Perfil />
            </nav>
         </header>
      </>
   )
}