import { auth } from "@/auth";
import Post from "../_component/Post";
import style from "./profile.module.css";
import Link from "next/link";

export default async function Profile() {
  const user = {
    id: "zerocho0",
    nickname: "제로초",
    image: "/5Udwvqim.jpg",
  };
  const session = await auth();

  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div> {user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        {session?.user ? (
          <button className={style.followButton}>팔로우</button>
        ) : (
          <Link href={"/"}>
            {/* 로그인 모달 뜨도록 수정이 필요함 */}
            <button className={style.followButton}>팔로우</button>
          </Link>
        )}
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
