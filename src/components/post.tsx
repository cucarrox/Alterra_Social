import styles from "./styles/Post.module.css";

// Componentes
import { Comment } from "./comment";
import { Avatar } from "./ui/avatar";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChatDots } from "@phosphor-icons/react";

import React, { useState } from "react";

export function Post(props: any) {

  // Datas
  const publishedDateFormated = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  // === ADICIONAR COMENTARIOS ===
  // useState ou estados = são variáveis onde o react irá monitorar os componentes caso haja mudanças
  const [commentPost, setCommentPost] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState("")

  // Coisa nova
  function createNewComment(event: any) {
    event?.preventDefault();

    setCommentPost([...commentPost, newCommentText]);
    setNewCommentText("")

    event.target.commentText.value = "";
  }

  function newCommentTextChange(event: any) { // Usa-se a programção declarativa
    setNewCommentText(event?.target.value)
  }

  //Botão para mostrar os comentários
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <article className={`${styles.post} bg-[#202024] rounded-[8px] p-10`}>
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-[1rem] ">
            <Avatar hasBorder src={props.author.avatarUrl} />
            <div className="flex flex-col">
              <strong className="leading-relaxed text-gray-300">
                {props.author.name}
              </strong>
              <span className="leading-relaxed text-gray-500">
                {props.author.role}
              </span>
            </div>
          </div>
          <time
            className="font-[0.875rem] text-gray-500"
            title={publishedDateFormated}
            dateTime={props.publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={`${styles.content} leading-relaxed text-white mt-6`}>
          {props.content.map((line: any) => {
            if (line.type == "paragraph") {
              return <p>{line.content}</p>;
            } else if (line.type == "link") {
              return (
                <p>
                  <a target="_blank" href={line.content}>
                    {line.content}
                  </a>
                </p>
              );
            }
          })}
        </div>

        <form
          onSubmit={createNewComment}
          className={`${styles.form} w-full mt-6 pt-6 border-t-[1px] border-[#303030] border-solid transition`}
        >
          <strong className="leading-relaxed text-gray-300">
            Deixe seu comentário
          </strong>

          <textarea
            name="commentText"
            value={newCommentText}
            onChange={newCommentTextChange}
            className="w-full bg-[#131313] resize-none h-24 p-4 text-gray-200 leading-[1.4] mt-4 rounded-[8px]"
            placeholder="Escrever seu comentário..."
          />
          
          <footer className="invisible max-h-0">
            <button
              className="px-8 py-3 mt-4 rounded-[8px] border-0 bg-[#2d6ba5] hover:bg-[#2584DC] transition select-none cursor-pointer font-bold "
              type="submit"
            >
              Publicar
            </button>
          </footer>
        </form>

        <div className="mt-8">
          <div className="flex space-x-2">
            <span>{commentPost.length}</span>
            <button
              onClick={toggleComments}
              className="hover:underline hover:text-gray-300 flex gap-1"
            >
              Comentários
              <ChatDots size={20} />
            </button>
          </div>
          <div className={`${styles.commentsSection} ${showComments ? styles.show : ""}`}>
            {commentPost.map((comment) => (
              <Comment content={comment} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
