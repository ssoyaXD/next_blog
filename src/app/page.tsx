import FeaturedPosts from "@/components/FeaturedPosts";
import ProfileArticle from "@/components/ProfileArticle";
import SlidePosts from "@/components/SlidePosts";

export default function Home() {
  return (
    <>
      <ProfileArticle/>
      <FeaturedPosts/>
      <SlidePosts/>
    </>
  );
}

