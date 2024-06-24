import { useState } from "react";

// Definimos uma interface para o estado inicial e as funções que vamos exportar
interface CommentFunctions {
  commentPost: string[];
  newCommentText: string;
  createNewComment: any;
  newCommentTextChange: any;
}

// Função para configurar o estado e retornar as funções
export function useCommentFunctions(): CommentFunctions {
  const [commentPost, setCommentPost] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState("");

  function createNewComment(event: any) {
    event.preventDefault();

    setCommentPost([...commentPost, newCommentText]);
    setNewCommentText("");

    event.currentTarget.commentText.value = "";
  }

  function newCommentTextChange(event: any) {
    setNewCommentText(event.target.value);
  }

  return {
    commentPost,
    newCommentText,
    createNewComment,
    newCommentTextChange,
  };
}
