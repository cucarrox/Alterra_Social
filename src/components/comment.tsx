import { Trash, ThumbsUp } from "@phosphor-icons/react";
import margaritMaida from "../assets/img/MargueritPortrait.png"

import styles from "./styles/Comment.module.css"
import { Avatar } from "./ui/avatar";
import { Cone } from "lucide-react";

export function Comment(props: any) {
   return (
      <>
         <div className="mt-6 flex gap-[1rem]">
            <Avatar src={margaritMaida} />
            <div className={`${styles.commentBox} flex-1`}>
               <div className={`${styles.commentContent} bg-[#252527] rounderd-[8px] p-4`}>
                  <header className="flex items-start justify-between">
                     <div className="flex flex-col">
                        <strong className="text-[0.875rem] leading-relaxed">Marguerit Maida</strong>
                        <time className="text-[0.75rem] leading-relaxed text-gray-500"  title="19 de Junho às 8:59" dateTime="2024-06-19 08:59:12">Cerca de 1 hora atrás</time>
                     </div>
                     <button className="bg-transparent border-0 text-gray-500 rounded-full leading-[0] hover:text-[#F75A68] transition" title="Deletar comentário">
                        <Trash size={24} />
                     </button>
                  </header>
                  <p className="text-gray-300">{props.content}</p>
               </div>
               <footer className="mt-4">
                  <button className="bg-transparent border-0 text-[#2584DC] cursor-pointer flex items-center hover:text-[#25a8dc]">
                     <ThumbsUp className="mr-1" />
                     Like <span>25</span>
                  </button>
               </footer>
            </div>
         </div>
      </>
   )
}