import React, { useState } from "react";

// Estilos
import "./index.css";
import styles from "./components/styles/App.module.css";

// Componetes
import { Header } from "./components/header";
import { Post } from "./components/post";
import { posts } from "./ts/postExampleComments";

export function App() {
  return (
    <>
      <div>
        <Header />
        <div className={`${styles.mainContent}`}>
          <main className="w-full flex flex-col justify-center items-center">
            {
              posts.map((post) => {
                return (
                  <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                />
                )
              })
            }
          </main>
        </div>
      </div>
    </>
  );
}
