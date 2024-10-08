import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import TabDeciderSuspense from "./_component/TabDeciderSuspense";
import { Suspense } from "react";
import Loading from "./loading";
import { auth } from "@/auth";
import { QueryClient } from "@tanstack/react-query";
import { getPostRecommends } from "./_lib/getPostRecommends";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈 / z",
  description: "홈",
};

export default async function Home() {
  const session = await auth();
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "rescommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });

  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
