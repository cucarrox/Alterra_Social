import { useState } from "react";

export function showCommentFuction() {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return { toggleComments, showComments };
}
