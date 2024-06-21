import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { List, PencilLine } from "@phosphor-icons/react"; // Icones

import styles from "./styles/Perfil.module.css"
import { Avatar } from "./ui/avatar";

export function Perfil() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <List size={45} className="text-white hover:text-[#2584DC] transition rounded-full p-1 hover:bg-[#383841]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`${styles.menuContent} bg-[#202024] text-white border-[#202024] border-2 p-0 mr-4`}>
          <aside>
            <img
              className="w-full h-[72px] object-cover"
              src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex flex-col items-center mt-[-2rem]">
              <Avatar hasBorder src="https://github.com/cucarrox.png" />
              <strong className="mt-3 leading-relaxed">Sigismund Dijkstra</strong>
              <span className="text-gray-400 text-[0.875rem] leading-relaxed">Astronomo</span>
            </div>
            <footer className="border-t-2 border-solid border-t-[#303030] mt-6 pt-6 pb-8 px-8">
              <DropdownMenuItem className={`${styles.menuItem} text-[#2584DC] bg-transparent border-[#2584DC] border-[1px] border-solid rounded-[8px] h-[50px] py-0 px-6 font-bold gap-2 cursor-pointer`}>
                <PencilLine size={20} />
                <span>Editar seu perfil</span>
              </DropdownMenuItem>
            </footer>
          </aside>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
