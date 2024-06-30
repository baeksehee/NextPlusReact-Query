"use client";

import { useRef, useState } from "react";
import style from "./commentForm.module.css";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  id: string;
};

export default function CommentForm({ id }: Props) {
  const [content, setContent] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const onClickButton = () => {};
  const onSubmit = () => {};
  const onChange = () => {};
  const me = {
    id: "zerocho0",
    image: "/5Udwvqim.jpg",
  };
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);

  if (!post) {
    return null;
  }

  return (
    <form className={style.postForm} onSubmit={onSubmit}>
      <div className={style.postUserSection}>
        <div className={style.postUserImage}>
          <img src={me.image} alt={me.id} />
        </div>
      </div>
      <div className={style.postInputSection}>
        <textarea
          value={content}
          onChange={onChange}
          placeholder="답글 게시하기"
        />
      </div>
    </form>
  );
}
